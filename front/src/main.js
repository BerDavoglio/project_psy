/* eslint-disable import/no-unresolved */
/* eslint-disable camelcase */

import { createApp } from 'vue';

import { createPinia } from 'pinia';
import piniaPluginPersistedState from 'pinia-plugin-persistedstate';

import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import { OhVueIcon, addIcons } from 'oh-vue-icons';
import {
  GiHamburgerMenu,
  IoCloseSharp,
  BiFacebook,
  BiInstagram,
} from 'oh-vue-icons/icons';

import Vue3Toasity from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

import router from './router';
import store from './store/store';

import './assets/tailwind.css';
import 'vuetify/styles';

import App from './App.vue';

const pinia = createPinia();
pinia.use(piniaPluginPersistedState);

const vuetify = createVuetify({
  components,
  directives,
});

addIcons(
  GiHamburgerMenu,
  IoCloseSharp,
  BiFacebook,
  BiInstagram,
);

createApp(App).component('v-icon', OhVueIcon)
  .use(pinia)
  .use(store)
  .use(
    Vue3Toasity,
    {
      autoClose: 3000,
    },
  )
  .use(router)
  .use(vuetify)
  .component('VueDatePicker', VueDatePicker)
  .mount('#app');
