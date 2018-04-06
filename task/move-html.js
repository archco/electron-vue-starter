const globOrigin = require('glob');
const fs = require('fs-extra');
const path = require('path');

/**
 * Glob promise.
 * 
 * @param {string} pattern 
 * @param {any} options 
 * @returns {Promise.<Array<String>, Error>}
 */
function glob(pattern, options) {
  return new Promise((resolve, reject) => {
    globOrigin(pattern, options, (err, files) => {
      err === null ? resolve(files) : reject(err);
    });
  });
}

(async function () {
  // remove old html files.
  const oldFiles = await glob('dist/*.html');
  oldFiles.forEach(async f => await fs.remove(f));

  // copy html files.
  const files = await glob('src/renderer/*.html');
  files.forEach(async f => {
    const dest = `dist/${path.parse(f).base}`;
    await fs.copy(f, dest);
    console.log(`Copy ${f} to ${dest}.`);
  });
})();
