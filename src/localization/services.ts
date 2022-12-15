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