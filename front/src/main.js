/* eslint-disable camelcase */

import { createApp } from 'vue';

import { OhVueIcon, addIcons } from 'oh-vue-icons';
import {
  GiHamburgerMenu,
  IoCloseSharp,
} from 'oh-vue-icons/icons';

import Maska from 'maska';

import router from './router';
import store from './store';

import './assets/tailwind.css';

import App from './App.vue';

addIcons(
  GiHamburgerMenu,
  IoCloseSharp,
);

createApp(App).component('v-icon', OhVueIcon)
  .use(Maska)
  .use(store)
  .use(router)
  .mount('#app');
