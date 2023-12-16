/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
import { defineStore } from 'pinia';
import axios from 'axios';

import { toast } from 'vue3-toastify';

const urlBase = 'http://195.35.40.70:3096';

export const useLoginStore = defineStore('loginStore', {
  state: () => ({
    token: '',
    role: '',
    perfil: {},
    listPerfilsID: [],
    reviews: [],
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
    getReviews() {
      return this.reviews;
    },
  },
  actions: {
    async requestLogin(email, password) {
      try {
        axios
          .post(`${urlBase}/jwt/`, {
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
              this.$router.push({ name: 'admin' });
            }
            if (this.getRole === 'user') {
              this.$router.push({ name: 'perfil' });
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
            `${urlBase}/users/points/${obj.patient_id}`,
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
    async createPerfil(obj) {
      try {
        axios
          .post(
            `${urlBase}/users/`,
            obj,
          ).then(async (response) => {
            this.requestLogin(response.data.email, obj.password);
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
            `${urlBase}/users/`,
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
            `${urlBase}/users/role`,
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
            `${urlBase}/users`,
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
            `${urlBase}/users/idname/`,
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
    async logout() {
      try {
        this.token = '';
        this.role = '';
        this.perfil = {};
        this.$router.push({ name: 'login' });
        return 0;
      } catch (error) {
        return error;
      }
    },
    async requestViews() {
      try {
        axios
          .get(
            `${urlBase}/users/reviews/`,
          )
          .then((response) => {
            this.reviews = response.data;
          });
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
          .get(`${urlBase}/admin/doctors/`)
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
          .get(`${urlBase}/admin/doctors/docidname`)
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
            `${urlBase}/admin/doctors/`,
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
            `${urlBase}/admin/doctors/${id}`,
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
            `${urlBase}/admin/doctors/${obj.id}`,
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
            `${urlBase}/admin/calendars/`,
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
            `${urlBase}/admin/calendars/`,
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
            `${urlBase}/admin/calendars/${id}`,
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
            `${urlBase}/admin/calendars/${obj.id}`,
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
            `${urlBase}/conquests/`,
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
