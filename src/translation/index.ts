import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import numeral from 'numeral';
import {LocaleConfig} from 'react-native-calendars';
import moment from 'moment';
import 'moment/locale/vi';
import dayjs from 'dayjs';
import * as resources from './resources';
import localeConfig from './localeConfig';

// @ts-ignore
const trans = (...args) => i18n.t(...args) as any;

const setLanguage = (language: string) => {
  i18n.changeLanguage(language);
  moment.locale(language);
  dayjs.locale(language);
  moment;

  // @ts-ignore
  numeral.register('locale', language, localeConfig[language]);
  numeral.locale(language);

  // @ts-ignore
  LocaleConfig.locales[language] = localeConfig[language];
  LocaleConfig.defaultLocale = language;
};

const initLocalization = () => {
  const defaultLocale = 'vi';
  // @ts-ignore
  i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    resources,
    fallbackLng: defaultLocale,
    lng: defaultLocale,
    react: {
      wait: false,
      bindI18n: 'languageChanged loaded',
      bindStore: 'added removed',
      nsMode: 'default',
    },
  });
  setLanguage(defaultLocale);
};

const getLanguage = () => i18n.language;

export {i18n, initLocalization, setLanguage, getLanguage};
export default trans;
