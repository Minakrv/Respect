import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from '../Locales/en/translation.json';
import translationFA from '../Locales/fa/translation.json';

const resources = {
  en: {
    translation: translationEN
  },
  fa: {
    translation: translationFA
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fa', 
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;