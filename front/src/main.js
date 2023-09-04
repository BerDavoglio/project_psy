/* eslint-disable camelcase */

import { createApp } from 'vue';

import { OhVueIcon, addIcons } from 'oh-vue-icons';
import {
  GiHamburgerMenu,
  IoCloseSharp,
} from 'oh-vue-icons/icons';

import TextClamp from 'vue3-text-clamp';

import VCalendar from 'v-calendar';
import 'v-calendar/style.css';

import router from './router';
import store from './store';

import './assets/tailwind.css';

import App from './App.vue';

addIcons(
  GiHamburgerMenu,
  IoCloseSharp,
);

createApp(App).component('v-icon', OhVueIcon)
  .use(VCalendar, {})
  .use(TextClamp)
  .use(store)
  .use(router)
  .mount('#app');
