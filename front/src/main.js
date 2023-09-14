/* eslint-disable camelcase */

import { createApp } from 'vue';

import { createPinia } from 'pinia';
import piniaPluginPersistedState from 'pinia-plugin-persistedstate';

import { OhVueIcon, addIcons } from 'oh-vue-icons';
import {
  GiHamburgerMenu,
  IoCloseSharp,
  BiFacebook,
  BiInstagram,
} from 'oh-vue-icons/icons';

import TextClamp from 'vue3-text-clamp';

import VCalendar from 'v-calendar';
import 'v-calendar/style.css';

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
  .use(VCalendar, {})
  .use(pinia)
  .use(store)
  .use(TextClamp)
  .use(router)
  .mount('#app');
