const child_process = require("child_process");
const fs = require("fs/promises");
const {promisify} = require("util");
const exec = promisify(require("child_process").exec);
const {strings} = require("@angular-devkit/core");

(async () => {

  let name;
  let nameIsValid = false;
  while (!nameIsValid) {
    name = await prompt("module name");
    nameIsValid = isValidName(name);
  }

  let dashName = strings.dasherize(name);
  let className = strings.classify(name);
  let camelName = strings.camelize(name);

  let gitUrl;
  let gitUrlIsValid = false;
  while (!gitUrlIsValid) {
    gitUrl = await prompt("git url");
    gitUrlIsValid = isValidGitSSHLink(gitUrl);
  }

  console.log({name, gitUrl});
  console.log(strings.dasherize(name));
  console.log(strings.classify(name));

  {
    await exec(`ng generate library "${name}"`, {shell: true});
  }

  {
    let moduleFile = `wisdom_modules/${dashName}/src/lib/${dashName}.module.ts`;
    let moduleContent = await fs.readFile(moduleFile, "utf8");
    moduleContent = [
      `import {TranslateModule} from "@ngx-translate/core";`,
      `import {WisdomModule} from "common";`,
      moduleContent.replace(
        "imports: [",
        "imports: [\n    WisdomModule,\n    TranslateModule"
      )
    ].join("\n");
    await fs.writeFile(moduleFile, moduleContent);
  }

  {
    let publicApiFile = `wisdom_modules/${dashName}/src/public-api.ts`;
    await fs.writeFile(
      publicApiFile,
      `
        import {WisdomInterface} from "common";
        import {${className}Component} from "./lib/${dashName}.component";

        export const wisdomInterface: WisdomInterface = {
          route: {
            path: "${dashName}",
            component: ${className}Component,
          },
          scopes: [],
          translations: {
            de_DE: {},
            en_US: {},
          },
        };
      `.replaceAll(/^ {8}/gm, "").trim() + "\n"
    );
  }

  {
    let wisdomModulesFile = `wisdom.modules.ts`;
    let wisdomModulesContent = await fs.readFile(wisdomModulesFile, "utf8");
    wisdomModulesContent = [
      wisdomModulesContent.trim(),
      `export * as ${camelName} from "${dashName}";`,
      ""
    ].join("\n");
    await fs.writeFile(wisdomModulesFile, wisdomModulesContent);
  }

  await fs.rm(`wisdom_modules/${dashName}/src/lib/${dashName}.component.spec.ts`);
  await fs.rm(`wisdom_modules/${dashName}/src/lib/${dashName}.service.spec.ts`);
  await fs.rm(`wisdom_modules/${dashName}/tsconfig.spec.json`);

  {
    let wisdomConfigFile = `wisdom.config.ts`;
    let wisdomConfigContent = await fs.readFile(wisdomConfigFile, "utf8");
    wisdomConfigContent = wisdomConfigContent.replace(
      "export const sidebar: SideBarEntries = [",
      `
      export const sidebar: SideBarEntries = [
        [
          "${name} Category", "sparkles", [
            ["${name} Component", "library", "${dashName}"]
          ]
        ],
    `.trim().replaceAll(/^ {6}/gm, "")
    );
    await fs.writeFile(wisdomConfigFile, wisdomConfigContent);
  }

  {
    let metaFile = `.meta`;
    let metaContent = await fs.readFile(metaFile, "utf8");
    metaContent = JSON.parse(metaContent);
    metaContent.projects[`./wisdom_modules/${dashName}`] = gitUrl;
    metaContent = JSON.stringify(metaContent, null, 2);
    await fs.writeFile(metaFile, metaContent + "\n");
  }

  await exec(`npx primp -r wisdom_modules/${dashName}`, {shell: true});

  await exec(`ng build ${dashName}`, {shell: true});

})();

function isValidName(name) {
  const nameRegex = /^(?:@[a-zA-Z0-9-*~][a-zA-Z0-9-*._~]*\/)?[a-zA-Z0-9-~][a-zA-Z0-9-._~]*$/;
  return nameRegex.test(name);
}

function isValidGitSSHLink(link) {
  const gitSSHRegex = /^git@[^/\\\s]+:\S+\.git$/i;
  return gitSSHRegex.test(link.trim());
}

async function prompt(message) {
  const {default: inquirer} = await import("inquirer");
  let prompted = await inquirer.prompt({
    type: "input",
    name: "_",
    message
  });

  return prompted._;
}
