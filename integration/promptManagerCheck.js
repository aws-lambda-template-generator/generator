const { promptManager } = require('../lib/utils/promptManager');

const languagePrompt =
`
Select a language
1) TypeScript
2) JavaScript
3) Python
(default is 1): `;

const testMain = async() => {
  const language = await promptManager(languagePrompt);
  console.log(`Language selected: ${language}`);
};

testMain();
