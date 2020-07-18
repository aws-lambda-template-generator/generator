const path = require('path');
const { testPrep } = require('./utils/testPrep');
// const { templateGenerator } = require('../lib/templateGenerator');
const download = require('download-git-repo');

const templatePaths = {
  typescript: 'mydatahack/typescript-lambda-serverless-boilerplate',
  javascript: path.join(__dirname, '../templates/js-simple-api')
};

const outputPath = path.join(__dirname, '../testData');

describe('templateGenerator.js', () => {
  beforeEach(() => {
    testPrep();
  });
  it('should copy typescript template correctly', async() => {
    // await templateGenerator('1', templatePaths, outputPath);
    await download(templatePaths.typescript, outputPath, (err) => {
      console.log(err ? `Error: ${err}` : 'Download Success!');
    });
  });
});
