import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import numeral from 'numeral'
import dayjs from 'dayjs'
import * as resources from './resources'

const defaultLocale = 'en'

// @ts-ignore
const trans = (...args) => i18n.t(...args) as any

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
    react: {
      wait: false,
      bindI18n: 'languageChanged loaded',
      bindStore: 'added removed',
      nsMode: 'default',
    },
  })
  setLanguage(defaultLocale)
}

const getLanguage = () => i18n.language

export { i18n, initLocalization, setLanguage, getLanguage }
export default trans
