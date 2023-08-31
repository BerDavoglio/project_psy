<template>
  <div class="admin-perfil-view">
    <div>
      <calendar-component />
      <div className="w-48 p-2 bg-green-300 my-10 mx-auto
      rounded-xl cursor-pointer shadow-xl">
        Adicionar Consulta
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
};
</script>
