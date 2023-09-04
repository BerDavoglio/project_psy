<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div class="admin-perfil-view">
    <div>
      <calendar-component />
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
    </div>
  </div>
</template>

<script>
import CalendarComponent from '../components/calendar/CalendarComponent.vue';

export default {
  name: 'AdminPerfilView',
  components: {
    CalendarComponent,
  },
  data() {
    return {
    };
  },
  methods: {
    goPage(route) {
      this.$router.push({ name: route });
    },
  },
};
</script>
