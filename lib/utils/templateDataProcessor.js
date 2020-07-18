#!/usr/bin/env node
'use strict';

class TemplateDataProcessor {

  constructor(templateData) {
    this.templateData = templateData;
  }

  getUrl(languageId, templateId) {
    const languageFiltered = this.templateData.filter(data => data.languageId === languageId);
    const templateFiltered = languageFiltered[0].templates.filter(data => data.templateId === templateId);
    return templateFiltered[0].url;
  }

  getExamples(languageId, frameworkId) {
    const languageFileterd = this.templateData.filter(data => data.languageId === languageId);
    return languageFileterd[0].templates.filter(data => data.framework.frameworkId === frameworkId);
  }

  getFrameworks(languageId) {
    const frameworkArray = [];

    const languageFiltered = this.templateData.filter(data => data.languageId === languageId);
    languageFiltered[0].templates.forEach((data) => {
      frameworkArray.push({
        frameworkId: data.framework.frameworkId,
        frameworkName: data.framework.frameworkName
      });
    });
    return  this._removeDuplicates(frameworkArray, 'frameworkId');;
  }

  getLanguages() {
    const languageArray = [];
    this.templateData.forEach((data) => {
      languageArray.push({
        languageId: data.languageId,
        language: data.language
      });
    });
    return this._removeDuplicates(languageArray, 'languageId');
  }

  _removeDuplicates(myArr, prop) {
    return myArr.filter((obj, pos, arr) => {
      return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
    });
  }
}

module.exports = TemplateDataProcessor;
