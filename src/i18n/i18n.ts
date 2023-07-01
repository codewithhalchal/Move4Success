// import 'intl-pluralrules';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from 'i18next';
import { useEffect } from 'react';
import {initReactI18next} from 'react-i18next';
import { store } from '../redux/store';
import {en} from './translation'
import {th} from './translation'

// const resources = {
//   en: {
//     translation: en,
//   },
//   th: {
//     translation: th,
//   },
// };

const langg = store.getState().language.lang;


// console.log(langg,"language")

const setLang = (lang?:string) => {
  // console.log('setLang ****** ', lang)
  i18n.use(initReactI18next).init({
    // lng: I18nManager.isRTL ? 'ar' : lang,
    lng: lang || 'en',
    fallbackLng: 'en',
    resources: {
      en: en,
      th: th,
    },
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });
}

(async() => {
	const lang = await AsyncStorage.getItem('lang') 
  setLang(lang || 'en')
})();


export default i18n;
