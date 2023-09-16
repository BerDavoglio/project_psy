/* eslint-disable camelcase */

import { createApp } from 'vue';

import { createPinia } from 'pinia';
import piniaPluginPersistedState from 'pinia-plugin-persistedstate';

import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

import { OhVueIcon, addIcons } from 'oh-vue-icons';
import {
  GiHamburgerMenu,
  IoCloseSharp,
  BiFacebook,
  BiInstagram,
} from 'oh-vue-icons/icons';

import TextClamp from 'vue3-text-clamp';

import Vue3Toasity from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

import router from './router';
import store from './store/store';

import './assets/tailwind.css';

import App from './App.vue';

const pinia = createPinia();
pinia.use(piniaPluginPersistedState);

addIcons(
  GiHamburgerMenu,
  IoCloseSharp,
  BiFacebook,
  BiInstagram,
);

createApp(App).component('v-icon', OhVueIcon)
  .use(pinia)
  .use(store)
  .use(TextClamp)
  .use(
    Vue3Toasity,
    {
      autoClose: 3000,
    },
  )
  .use(router)
  .component('VueDatePicker', VueDatePicker)
  .mount('#app');
