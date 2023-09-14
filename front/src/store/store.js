/* eslint-disable import/prefer-default-export */
import { defineStore } from 'pinia';
import axios from 'axios';

export const useLoginStore = defineStore('loginStore', {
  state: () => ({
    token: '',
    role: '',
    perfil: {},
  }),
  getters: {
    getToken() {
      return this.token;
    },
    getRole() {
      return this.role;
    },
    getPerfil() {
      return this.perfil;
    },
  },
  actions: {
    async requestLogin(email, password) {
      try {
        axios
          .post('http://127.0.0.1:3096/jwt/', {
            email,
            password,
          })
          .then((response) => {
            this.token = response.data.token;
          }).then(() => {
            this.requestRole();
          }).then(() => {
            this.requestPerfil();
          });
        return 0;
      } catch (error) {
        return error;
      }
    },
    async updatePerfil(obj) {
      try {
        axios
          .put(
            'http://127.0.0.1:3096/users/',
            obj,
            { headers: { Authorization: `Bearer ${this.token}` } },
          )
          .then((response) => {
            const [per, tok] = response.data;
            this.perfil = per;
            this.token = tok;
            window.location.reload();
          })
          .catch((err) => {
            console.log(err);
          });
        return 0;
      } catch (error) {
        return error;
      }
    },
    async requestRole() {
      try {
        axios
          .get(
            'http://127.0.0.1:3096/users/role',
            { headers: { Authorization: `Bearer ${this.token}` } },
          )
          .then((response) => {
            this.role = response.data;
          });
        return 0;
      } catch (error) {
        return error;
      }
    },
    async requestPerfil() {
      try {
        axios
          .get(
            'http://127.0.0.1:3096/users',
            { headers: { Authorization: `Bearer ${this.token}` } },
          )
          .then((response) => {
            this.perfil = response.data;
          });
        return 0;
      } catch (error) {
        return error;
      }
    },
    async logout(func) {
      try {
        this.token = '';
        this.role = '';
        func();
        return 0;
      } catch (error) {
        return error;
      }
    },
  },
  persist: true,
});

export const useProfissionalStore = defineStore('profissionalStore', {
  state: () => ({
    list: [],
  }),
  getters: {
    getList() {
      return this.list;
    },
  },
  actions: {
    async requestProfissional() {
      try {
        axios
          .get('http://127.0.0.1:3096/admin/doctors/')
          .then((response) => {
            this.list = response.data;
          });
        return 0;
      } catch (error) {
        return error;
      }
    },
    async updateProfissional(obj, func) {
      try {
        axios
          .put(
            `http://127.0.0.1:3096/admin/doctors/${obj.id}`,
            obj,
            { headers: { Authorization: `Bearer ${useLoginStore().getToken}` } },
          )
          .then(() => {
            this.requestProfissional();
          }).then(() => {
            func();
          })
          .catch((err) => {
            console.log(err);
          });
        return 0;
      } catch (error) {
        return error;
      }
    },
    async deleteProfissional(obj, func) {
      try {
        axios
          .delete(
            `http://127.0.0.1:3096/admin/doctors/${obj.id}`,
            { headers: { Authorization: `Bearer ${useLoginStore().getToken}` } },
          )
          .then(() => {
            this.requestProfissional();
          }).then(() => {
            func();
          })
          .catch((err) => {
            console.log(err);
          });
        return 0;
      } catch (error) {
        return error;
      }
    },
  },
  persist: true,
});

export const useCalendarStore = defineStore('calendarStore', {
  state: () => ({
    list: [],
  }),
  getters: {
    getList() {
      return this.list;
    },
  },
  actions: {
    async requestCalendar() {
      try {
        axios
          .get(
            'http://127.0.0.1:3096/admin/calendars/',
            { headers: { Authorization: `Bearer ${useLoginStore().getToken}` } },
          )
          .then((response) => {
            this.list = response.data;
          });
        return 0;
      } catch (error) {
        return error;
      }
    },
    async updateCalendar(obj) {
      try {
        axios
          .put(
            `http://127.0.0.1:3096/admin/calendars/${obj.id}`,
            obj,
            { headers: { Authorization: `Bearer ${useLoginStore().getToken}` } },
          )
          .then(() => {
            this.requestCalendar();
          })
          .catch((err) => {
            console.log(err);
          });
        return 0;
      } catch (error) {
        return error;
      }
    },
    async deleteCalendar(obj) {
      try {
        axios
          .delete(
            `http://127.0.0.1:3096/admin/calendars/${obj.id}`,
            { headers: { Authorization: `Bearer ${useLoginStore().getToken}` } },
          )
          .then(() => {
            this.requestCalendar();
          })
          .catch((err) => {
            console.log(err);
          });
        return 0;
      } catch (error) {
        return error;
      }
    },
  },
  persist: true,
});

export const useConquestStore = defineStore('conquestStore', {
  state: () => ({
    list: [],
  }),
  getters: {
    getList() {
      return this.list;
    },
  },
  actions: {
    async requestConquest() {
      try {
        axios
          .get(
            'http://127.0.0.1:3096/conquests/',
            { headers: { Authorization: `Bearer ${useLoginStore().getToken}` } },
          )
          .then((response) => {
            this.list = response.data;
          });
        return 0;
      } catch (error) {
        return error;
      }
    },
  },
  persist: true,
});
