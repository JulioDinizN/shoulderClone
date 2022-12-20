import {AppRegistry} from 'react-native';
import { initReactI18next } from 'react-i18next';
import i18next from 'i18next';

import App from './App';
import {name as appName} from './app.json';
import { userPhoneLanguage } from './src/localization/utils';
import { i18nextOptions } from './src/localization/services';

i18next
  .use(userPhoneLanguage)
  .use(initReactI18next)
  .init(i18nextOptions);

AppRegistry.registerComponent(appName, () => App);
