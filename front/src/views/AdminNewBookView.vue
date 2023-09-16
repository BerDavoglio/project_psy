<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div class="admin-new-book-view">
    <div className="w-[100%] max-w-[28rem] mx-auto mb-20 rounded-xl shadow-2xl p-4">
      <div className="m-10 text-2xl font-bold">Cadastrar nova Consulta</div>
      <!-- MUDAR INPUT PARA SELECT/USAR O URL/IDNAME/ -->
      <select v-model="book.patient_id"
              className="w-full h-8 border-2 rounded-sm mb-2">
        <option disabled
                value="">Selecione o Paciente</option>
        <option v-for="option in useLoginStore().getListPerfilsID"
                :value="option.id"
                v-bind:key="option">
          {{ option.name }}
        </option>
      </select>
      <!-- MUDAR INPUT PARA SELECT/USAR O URL/DOCTORSIDNAME/ -->
      <select v-model="book.doctor_id"
              className="w-full h-8 border-2 rounded-sm mb-2">
        <option disabled
                value="">Selecione o Doutor</option>
        <option v-for="option in useProfissionalStore().getListProfissionalsIDNAME"
                :value="option.id"
                v-bind:key="option">
          {{ option.name }}
        </option>
      </select>
      <input v-model="book.description"
             placeholder="Descrição"
             className="w-full h-8 border-2 rounded-sm p-2 mb-2">
      <VueDatePicker v-model="book.date" />
      <div className="w-48 p-2 bg-green-200 hover:bg-green-400 my-10 mx-auto
      rounded-xl cursor-pointer shadow-xl"
           @click="createCalendar()">
        Salvar Consulta
      </div>
    </div>
  </div>
</template>

<script setup>
import VueDatePicker from '@vuepic/vue-datepicker';
import { useCalendarStore, useLoginStore, useProfissionalStore } from '../store/store';
</script>

<script>
import '@vuepic/vue-datepicker/dist/main.css';

export default {
  name: 'AdminNewBookView',
  components: { VueDatePicker },
  data() {
    return {
      book: {
        patient_id: '',
        doctor_id: '',
        date: '',
        description: '',
      },
    };
  },
  methods: {
    async createCalendar() {
      const store = useCalendarStore();
      await store.createCalendar(
        this.book,
        () => {
          this.goPage('admin');
        },
      );
    },
    goPage(route) {
      this.$router.push({ name: route });
    },
  },
  async beforeMount() {
    const storePerfil = useLoginStore();
    await storePerfil.requestPerfilIDNAME();
    const storeProfissional = useProfissionalStore();
    await storeProfissional.requestProfissionalsIDNAME();
  },
};
</script>
