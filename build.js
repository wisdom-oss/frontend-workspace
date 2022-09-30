// Build script, used in `ng build` or in the Dockerfile

const fs = require("fs/promises");
const {promisify} = require("util");
const exec = promisify(require("child_process").exec);

/**
 * Iterate over every directory in the `wisdom_modules` directory and run
 * `ng build` on it.
 *
 * This also makes sure that `common` starts und `core` lasts.
 */
(async() => {
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
