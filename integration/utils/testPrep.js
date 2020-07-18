const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');

const testPrep = () => {
  const rootDir = path.join(__dirname, '../../');
  const testDataDir = rootDir + 'testData';
  if (fs.existsSync(testDataDir)) {
    console.log('Deleting existing testData directory...');
    rimraf.sync(testDataDir);
    console.log('Creating a blank testData directory...');
    fs.mkdirSync(testDataDir);
  } else {
    console.log('Creating a blank testData directory...');
    fs.mkdirSync(testDataDir);
  }
};

module.exports = {
  testPrep
};
