/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
import { defineStore } from 'pinia';
import axios from 'axios';

import { toast } from 'vue3-toastify';

export const useLoginStore = defineStore('loginStore', {
  state: () => ({
    token: '',
    role: '',
    perfil: {},
    listPerfilsID: [],
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
    getListPerfilsID() {
      return this.listPerfilsID;
    },
  },
  actions: {
    async requestLogin(email, password, func) {
      try {
        axios
          .post('http://127.0.0.1:3096/jwt/', {
            email,
            password,
          })
          .then((response) => {
            this.token = response.data.token;
          }).then(async () => {
            await this.requestPerfil();
          }).then(async () => {
            await this.requestRole();
          })
          .then(() => {
            if (this.getRole === 'admin') {
              func('admin');
            }
            if (this.getRole === 'user') {
              func('perfil');
            }
          })
          .catch((err) => {
            toast.error(err.response.data.errors, {
              autoClose: 5000,
              position: toast.POSITION.BOTTOM_RIGHT,
            });
          });
        return 0;
      } catch (error) {
        return error;
      }
    },
    async changePoints(obj, points) {
      try {
        axios
          .put(
            `http://127.0.0.1:3096/users/points/${obj.patient_id}`,
            {
              points,
              calendar_id: obj.id,
            },
            { headers: { Authorization: `Bearer ${this.token}` } },
          )
          .then(() => {
            toast.success('Pontos atualizado com sucesso!', {
              autoClose: 5000,
              position: toast.POSITION.BOTTOM_RIGHT,
            });
            window.location.reload();
          })
          .catch((err) => {
            toast.error(err.response.data.errors, {
              autoClose: 5000,
              position: toast.POSITION.BOTTOM_RIGHT,
            });
          });
        return 0;
      } catch (error) {
        return error;
      }
    },
    async createPerfil(obj, func) {
      try {
        axios
          .post(
            'http://127.0.0.1:3096/users/',
            obj,
          ).then(async (response) => {
            this.requestLogin(response.data.email, obj.password, func);
          }).then(() => {
            toast.success('Perfil criado com sucesso!', {
              autoClose: 5000,
              position: toast.POSITION.BOTTOM_RIGHT,
            });
          }).catch((err) => {
            toast.error(err.response.data.errors, {
              autoClose: 5000,
              position: toast.POSITION.BOTTOM_RIGHT,
            });
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
            toast.success('Perfil atualizado com sucesso!', {
              autoClose: 5000,
              position: toast.POSITION.BOTTOM_RIGHT,
            });
            const [per, tok] = response.data;
            this.perfil = per;
            this.token = tok;
            window.location.reload();
          })
          .catch((err) => {
            toast.error(err.response.data.errors, {
              autoClose: 5000,
              position: toast.POSITION.BOTTOM_RIGHT,
            });
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
    async requestPerfilIDNAME() {
      try {
        axios
          .get(
            'http://127.0.0.1:3096/users/idname/',
            { headers: { Authorization: `Bearer ${this.token}` } },
          )
          .then((response) => {
            this.listPerfilsID = response.data;
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
        this.perfil = {};
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
    listProfissionalsIDNAME: [],
  }),
  getters: {
    getList() {
      return this.list;
    },
    getListProfissionalsIDNAME() {
      return this.listProfissionalsIDNAME;
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
    async requestProfissionalsIDNAME() {
      try {
        axios
          .get('http://127.0.0.1:3096/admin/doctors/docidname')
          .then((response) => {
            this.listProfissionalsIDNAME = response.data;
          });
        return 0;
      } catch (error) {
        return error;
      }
    },
    async createProfissional(obj, func) {
      try {
        axios
          .post(
            'http://127.0.0.1:3096/admin/doctors/',
            obj,
            { headers: { Authorization: `Bearer ${useLoginStore().getToken}` } },
          )
          .then(() => {
            func();
          })
          .then(() => {
            toast.success('Profissional criado com sucesso!', {
              autoClose: 5000,
              position: toast.POSITION.BOTTOM_RIGHT,
            });
            this.requestProfissional();
          })
          .catch((err) => {
            toast.error(err.response.data.errors, {
              autoClose: 5000,
              position: toast.POSITION.BOTTOM_RIGHT,
            });
          });
        return 0;
      } catch (error) {
        return error;
      }
    },
    async updateProfissional(id, obj, func) {
      try {
        axios
          .put(
            `http://127.0.0.1:3096/admin/doctors/${id}`,
            obj,
            { headers: { Authorization: `Bearer ${useLoginStore().getToken}` } },
          )
          .then(() => {
            func();
          })
          .then(() => {
            toast.success('Profissional atualizado com sucesso!', {
              autoClose: 5000,
              position: toast.POSITION.BOTTOM_RIGHT,
            });
            this.requestProfissional();
          })
          .catch((err) => {
            toast.error(err.response.data.errors, {
              autoClose: 5000,
              position: toast.POSITION.BOTTOM_RIGHT,
            });
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
            toast.success('Profissional deletado com sucesso!', {
              autoClose: 5000,
              position: toast.POSITION.BOTTOM_RIGHT,
            });
            this.requestProfissional();
          }).then(() => {
            func();
          })
          .catch((err) => {
            toast.error(err.response.data.errors, {
              autoClose: 5000,
              position: toast.POSITION.BOTTOM_RIGHT,
            });
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
    async createCalendar(obj, func) {
      try {
        axios
          .post(
            'http://127.0.0.1:3096/admin/calendars/',
            obj,
            { headers: { Authorization: `Bearer ${useLoginStore().getToken}` } },
          )
          .then(() => {
            func();
          })
          .then(() => {
            this.requestCalendar();
            toast.success('Calendário criado com sucesso!', {
              autoClose: 5000,
              position: toast.POSITION.BOTTOM_RIGHT,
            });
          })
          .catch((err) => {
            toast.error(err.response.data.errors, {
              autoClose: 5000,
              position: toast.POSITION.BOTTOM_RIGHT,
            });
          });
        return 0;
      } catch (error) {
        return error;
      }
    },
    async updateCalendar(id, obj, func) {
      try {
        axios
          .put(
            `http://127.0.0.1:3096/admin/calendars/${id}`,
            obj,
            { headers: { Authorization: `Bearer ${useLoginStore().getToken}` } },
          )
          .then(() => {
            toast.success('Calendário atualizado com sucesso!', {
              autoClose: 5000,
              position: toast.POSITION.BOTTOM_RIGHT,
            });
            this.requestCalendar();
          })
          .then(() => {
            func();
          })
          .catch((err) => {
            toast.error(err.response.data.errors, {
              autoClose: 5000,
              position: toast.POSITION.BOTTOM_RIGHT,
            });
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
            toast.success('Calendário deletado com sucesso!', {
              autoClose: 5000,
              position: toast.POSITION.BOTTOM_RIGHT,
            });
            this.requestCalendar();
          })
          .catch((err) => {
            toast.error(err.response.data.errors, {
              autoClose: 5000,
              position: toast.POSITION.BOTTOM_RIGHT,
            });
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
