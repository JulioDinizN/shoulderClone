import i18next from 'i18next';

import {en, pt} from '../../localize-keys';

export const resources = {en, pt};

export const i18nextOptions = {
  compatibilityJSON: 'v3',
  fallbackLng: 'pt',
  whitelist: Object.keys(resources),
  debug: true,
  ns: 'translation',
  preload: true,
  resources,
  initImmediate: false,
  load: 'languageOnly',
  nonExplicitWhitelist: true,
};

/**
 * @param {string} language format required to convert e.g en_US
 * @return {string} format recognized by i18next e.g en-US
 * ISO language code table http://www.lingoes.net/en/translator/langcode.htm
 */
export const i18nextLanguageFormat = (language: string) => (language ? language.replace(/_/, '-') : '');

/**
 * Translates the key that is passed in as per interpolation for dymanic values
 * @param {string} key String that contains the key of the object to translate
 * @param {Object} interpolation dynamic object to translate
 */
export const translate = (key: string, interpolation: Object = {}) => i18next.t(key, interpolation);

/**
 * ISO format comes language-Country e.g en-US
 * @return {string} only language from the ISO format, e.g 'en'
 */
export const currentLanguage = () => {
  const removeCountryFromISOLanguage = i18next.language.split('-').shift();
  return removeCountryFromISOLanguage;
};

/**
 * i18next resources setted
 * @return {Array} of languages, e.g ['en', 'pt']
 */
export const supportedLanguages = () => i18next.languages;

/**
 * @param {string} language String language key, e.g 'en'
 */
export const changeLanguage = (language: string) => {
  i18next.changeLanguage(language, (err) => {
    if (err) return console.log('something went wrong', err);
  })
};