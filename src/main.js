import { createApp } from 'vue';

import { bootstrap } from 'bootstrap/dist/js/bootstrap';

import axios from 'axios';
import VueAxios from 'vue-axios';

import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';

// Vee-Validation主要套件
import {
  Field, Form, ErrorMessage, defineRule, configure,
} from 'vee-validate';
// Vee-Validate rules
import AllRules from '@vee-validate/rules';
// Vee-Validate i18n
import { localize, setLocale } from '@vee-validate/i18n';
// import JSON設定黨
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

import App from './App.vue';
import router from './router';

// Vee_validate基本設定
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});

configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true,
});
// 強制設定中文
setLocale('zh_TW');

createApp(App)
  .component('Form', Form)
  .component('Field', Field)
  .component('ErrorMessage', ErrorMessage)
  .component('Loading', Loading)
  .use(bootstrap)
  .use(VueAxios, axios)
  .use(router)
  .mount('#app');
