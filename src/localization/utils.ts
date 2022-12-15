import { NativeModules, Platform } from 'react-native';

import { i18nextLanguageFormat } from './services';

/**
 * use NativeModules to get devide languages
 * both iOS and Android, default format is language_Country e.g en_US
 * @return {string} language
 */
const deviceLanguage = Platform.OS === 'ios'
  ? NativeModules.SettingsManager.settings.AppleLocale
  : NativeModules.I18nManager.localeIdentifier;

/**
 * Language setted on user's phone
 * @return {string} language in ISO format recognized for most i18n libraries e.g en-US
 */
export const userPhoneLanguage = {
  init: Function.prototype,
  type: 'languageDetector',
  detect: () => i18nextLanguageFormat(deviceLanguage),
  cacheUserLanguage: Function.prototype,
};