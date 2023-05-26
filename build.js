// Build script, used in `ng build` or in the Dockerfile

const fs = require("fs/promises");
const {promisify} = require("util");
const exec = promisify(require("child_process").exec);

// reads in .env file for processing
require('dotenv').config();

const envVars = ["OIDC_AUTHORITY", "OIDC_CLIENT_ID"];

/**
 * Iterate over every directory in the `wisdom_modules` directory and run
 * `ng build` on it.
 *
 * This also makes sure that `common` starts und `core` lasts.
 */
(async() => {
  console.info("ENV");
  for (let env of envVars) if (!process.env[env]) {
      console.error(`Environment variable "${env}" is not set`);
      process.exit(1);
  }
  let filtered_env = Object.fromEntries(
    Object
      .entries(process.env)
      .filter(([k, v]) => envVars.includes(k))
  );
  let env_content = `export default ${JSON.stringify(filtered_env, null, 2)}`;
  await fs.writeFile("./env.ts", env_content, "utf-8");

  let entries = await fs.readdir("./wisdom_modules");
  let wisdomModules = entries.filter(n => n !== "core" && n !== "common");
  for (let m of ["common", wisdomModules, "core"].flat()) {
    console.info("BUILD " + m.toUpperCase());
    let {stdout, stderr} = await exec("ng build " + m);
    console.log(stdout);
    console.error(stderr);
  }
  console.info("BUILD DONE!");
})();
