import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import numeral from 'numeral'
import dayjs from 'dayjs'
import resources from './resources'

const defaultLocale = 'en'

const setLanguage = (language: string) => {
  i18n.changeLanguage(language)
  dayjs.locale(language)

  // @ts-ignore
  numeral.locale(language)
}

const initLocalization = () => {
  // @ts-ignore
  i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    resources,
    fallbackLng: defaultLocale,
    lng: defaultLocale,
    returnNull: false,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
      bindI18n: 'languageChanged loaded',
      bindStore: 'added removed',
      nsMode: 'default',
    },
  })
  setLanguage(defaultLocale)
}

const getLanguage = () => i18n.language

export { initLocalization, setLanguage, getLanguage }
export default i18n
