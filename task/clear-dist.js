const fs = require('fs-extra');

fs.emptyDir('dist')
  .then(() => console.log('Clear dist/'))
  .catch(err => console.error(err));
