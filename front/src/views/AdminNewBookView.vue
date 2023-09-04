<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div class="admin-new-book-view">
    <div className="w-96 mx-auto mb-20 rounded-xl shadow-2xl p-4">
      <div className="m-10 text-2xl font-bold">Cadastrar nova Consulta</div>
      <input v-model="book.patient"
             placeholder="Paciente"
             className="w-full h-8 border-2 rounded-sm p-2 mb-2">
      <input v-model="book.doctor"
             placeholder="Doutor(a)"
             className="w-full h-8 border-2 rounded-sm p-2 mb-2">
      <input v-model="book.description"
             placeholder="Descrição"
             className="w-full h-8 border-2 rounded-sm p-2 mb-2">
      <VueDatePicker v-model="book.date" />
      <div className="w-48 p-2 bg-green-200 hover:bg-green-400 my-10 mx-auto
      rounded-xl cursor-pointer shadow-xl"
           @click="goPage('admin')">
        Salvar Consulta
      </div>
    </div>
  </div>
</template>

<script>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

export default {
  name: 'AdminNewBookView',
  components: { VueDatePicker },
  data() {
    return {
      book: {
        patient: '',
        doctor: '',
        date: '',
        description: '',
      },
    };
  },
  methods: {
    goPage(route) {
      this.$router.push({ name: route });
    },
  },
};
</script>
