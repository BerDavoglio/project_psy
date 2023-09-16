<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div class="admin-perfil-view">
    <div>
      <calendar-component :isCell="isCell" />
      <div className="w-48 p-2 bg-green-300 my-10 mx-auto
      rounded-xl cursor-pointer shadow-xl"
           @click="goPage('admin-new-book')">
        Adicionar Consulta
      </div>
      <div className="w-48 p-2 bg-blue-200 my-10 mx-auto
      rounded-xl cursor-pointer shadow-xl"
           @click="goPage('admin-employee')">
        Gerenciar Funcionários
      </div>
      <div className="w-48 p-2 bg-red-200 my-10 mx-auto
      rounded-xl cursor-pointer shadow-xl"
           @click="useLoginStore().logout(this.$router.push({ name: 'login' }))">
        Logout
      </div>
    </div>
  </div>
</template>

<script setup>
import { useLoginStore } from '../store/store';
</script>

<script>
import CalendarComponent from '../components/calendar/CalendarComponent.vue';

export default {
  name: 'AdminPerfilView',
  components: {
    CalendarComponent,
  },
  data() {
    return {
      isCell: false,
      windowWidth: window.innerWidth,
    };
  },
  methods: {
    goPage(route) {
      this.$router.push({ name: route });
    },
    onResize() {
      this.windowWidth = window.innerWidth;
    },
    verifyResize(i) {
      if (i < 768) {
        return true;
      } return false;
    },
  },
  watch: {
    windowWidth(newWidth) {
      this.isCell = this.verifyResize(newWidth);
    },
  },
  beforeMount() {
    this.isCell = this.verifyResize(window.innerWidth);
    if (useLoginStore().getRole !== 'admin') {
      this.$router.push({ name: 'login' });
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    });
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.onResize);
  },
};
</script>
