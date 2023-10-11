const child_process = require("child_process");
const fs = require("fs/promises");
const {promisify} = require("util");
const exec = promisify(require("child_process").exec);
const {strings} = require("@angular-devkit/core");
const chalkImport = import("chalk");
const inquirerImport = import("inquirer");

(async () => {
  const {default: chalk} = await chalkImport;

  try {
    await exec("git diff --quiet && git diff --cached --quiet");
  }
  catch (e) {
    if (!e.stdout.length && e.code) {
      console.log(chalk.redBright([
        "The workspace needs to be a clean working tree.",
        "Commit your code first."
      ].join("\n")))
      process.exit(1);
    }

    console.log(chalk.redBright("Make sure you have git installed."));
    process.exit(1);
  }

  console.log(chalk.yellow("Provide a name for your module."));
  console.log(chalk.yellow("It needs to be a valid identifier."));

  let name;
  let nameIsValid = false;
  while (!nameIsValid) {
    name = await prompt("module name");
    nameIsValid = isValidName(name);
  }

  let dashName = strings.dasherize(name);
  let className = strings.classify(name);
  let camelName = strings.camelize(name);

  console.log(chalk.yellow("Provide the git url for your new module."));
  console.log(chalk.yellow("The url needs to be a valid git ssh link."));
  console.log(chalk.yellow(
    "A typical ssh link looks like: git@<hostname>:<username>/<repository>.git"
  ));

  let gitUrl;
  let gitUrlIsValid = false;
  while (!gitUrlIsValid) {
    gitUrl = await prompt("git url");
    gitUrlIsValid = isValidGitSSHLink(gitUrl);
  }

  try {
    console.log(chalk.greenBright("Generating") + " the library...");
    await exec(`ng generate library "${name}"`, {shell: true});
  }
  catch (e) {
    console.error(chalk.redBright("Could not generate library:"));
    console.error(chalk.redBright(e.message));

    console.log(chalk.green("Rolling back changes..."));
    try {
      await exec("git reset --hard HEAD");
    }
    catch (e) {
      console.error(chalk.redBright("Could not reset git head."));
      console.error(chalk.redBright(e.message));
      console.log(chalk.yellow("Try to rollback via `git reset --hard HEAD`."));
    }
    
    process.exit(1);
  }

  try {
    {
      console.log(chalk.greenBright("Updating") + " library module...");
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
      console.log(chalk.greenBright("Updating") + " public-api.ts...");
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
      console.log(chalk.greenBright("Updating") + " wisdom.modules.ts...");
      let wisdomModulesFile = `wisdom.modules.ts`;
      let wisdomModulesContent = await fs.readFile(wisdomModulesFile, "utf8");
      wisdomModulesContent = [
        wisdomModulesContent.trim(),
        `export * as ${camelName} from "${dashName}";`,
        ""
      ].join("\n");
      await fs.writeFile(wisdomModulesFile, wisdomModulesContent);
    }

    console.log(chalk.greenBright("Deleting") + " unused files...");
    await fs.rm(`wisdom_modules/${dashName}/src/lib/${dashName}.component.spec.ts`);
    await fs.rm(`wisdom_modules/${dashName}/src/lib/${dashName}.service.spec.ts`);
    await fs.rm(`wisdom_modules/${dashName}/tsconfig.spec.json`);

    {
      console.log(chalk.greenBright("Updating") + " wisdom.config.ts...");
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
      console.log(chalk.greenBright("Updating") + " .meta...");
      let metaFile = `.meta`;
      let metaContent = await fs.readFile(metaFile, "utf8");
      metaContent = JSON.parse(metaContent);
      metaContent.projects[`./wisdom_modules/${dashName}`] = gitUrl;
      metaContent = JSON.stringify(metaContent, null, 2);
      await fs.writeFile(metaFile, metaContent + "\n");
    }

    console.log(chalk.greenBright("Primping") + " module...");
    await exec(`npx primp -r wisdom_modules/${dashName}`, {shell: true});

    console.log(`\nRun ${chalk.cyan("npm run build")} to build your new module.`);
  }
  catch (e) {
    console.error(chalk.redBright("An error occurred:"));
    console.error(chalk.redBright(e.message));
    console.log(chalk.green("Rolling back changes..."));

    try {
      await fs.rmdir(`wisdom_modules/${dashName}`);
    }
    catch (e) {
      console.error(chalk.redBright("Could not delete generated module."));
      console.error(chalk.redBright(e.message));
      console.log(chalk.yellow(
        `Remove wisdom_modules/${dashName} for a clean rollback.`
      ));
    }

    try {
      await exec("git reset --hard HEAD");
    }
    catch (e) {
      console.error(chalk.redBright("Could not reset git head."));
      console.error(chalk.redBright(e.message));
      console.log(chalk.yellow("Try to rollback via `git reset --hard HEAD`."));
    }

    process.exit(1);
  }

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
  const {default: inquirer} = await inquirerImport;
  const {default: chalk} = await chalkImport;
  let prompted = await inquirer.prompt({
    type: "input",
    name: "_",
    message,
    transformer: input => chalk.gray(input)
  });

  return prompted._;
}
