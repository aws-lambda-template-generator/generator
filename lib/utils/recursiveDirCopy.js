const copy = require('recursive-copy');
const fs = require('fs');

const recursiveDirCopy = async(srcPath, destPath) => {
  const options = {
    dot: true
  };
  return new Promise((resolve, reject) => {
    copy(srcPath, destPath, options, function(error, results) {
      if (error) {
        console.error('Copy failed: ' + error);
        reject(false);
      } else {
        console.info('Copied ' + results.length + ' files');
        if (fs.existsSync('.npmignore') && !fs.existsSync('.gitignore')) {
          console.log('Creating .gitignore file...');
          fs.renameSync('.npmignore', '.gitignore');
        };
        resolve(true);
      }
    });
  });
};

module.exports = {
  recursiveDirCopy
};
