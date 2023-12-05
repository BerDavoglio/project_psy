<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div class="admin-new-book-view">
    <div className="w-[100%] max-w-[28rem] mx-auto mb-20 rounded-xl shadow-2xl p-4">
      <div className="m-10 text-2xl font-bold">Cadastrar nova Consulta</div>
      <!-- MUDAR INPUT PARA SELECT/USAR O URL/IDNAME/ -->
      <div className="w-full border-[0.1rem] border-gray-400 rounded-[0.3rem] mb-2">
        <select
          v-model="book.patient_id"
          className="h-10 w-full px-3">
          <option
            disabled
            value="">Selecione o Paciente</option>
          <option
            v-for="option in useLoginStore().getListPerfilsID"
            :value="option.id"
            v-bind:key="option">
            {{ option.name }}
          </option>
        </select>
      </div>
      <!-- MUDAR INPUT PARA SELECT/USAR O URL/DOCTORSIDNAME/ -->
      <div className="w-full border-[0.1rem] border-gray-400 rounded-[0.3rem] mb-2">
        <select
          v-model="book.doctor_id"
          className="h-10 w-full px-3">
          <option
            disabled
            value="">Selecione o Doutor</option>
          <option
            v-for="option in useProfissionalStore().getListProfissionalsIDNAME"
            :value="option.id"
            v-bind:key="option">
            {{ option.name }}
          </option>
        </select>
      </div>
      <div className="w-full border-[0.1rem] border-gray-400 rounded-[0.3rem] mb-2">
        <input
          v-model="book.description"
          placeholder="Descrição"
          className="h-10 w-full px-3">
      </div>
      <VueDatePicker v-model="book.date" />
      <div
        className="w-48 p-2 bg-green-200 hover:bg-green-400 my-10 mx-auto
      rounded-xl cursor-pointer shadow-xl"
        @click="createEditCalendar()">
        Salvar Consulta
      </div>
    </div>
  </div>
</template>

<script setup>
import VueDatePicker from '@vuepic/vue-datepicker';
import { useCalendarStore, useLoginStore, useProfissionalStore } from '../store/store';
import '@vuepic/vue-datepicker/dist/main.css';
</script>

<script>
export default {
  name: 'AdminNewBookView',
  components: { VueDatePicker },
  params: ['id'],
  data() {
    return {
      book: {
        patient_id: (this.$route.params.id
          // eslint-disable-next-line eqeqeq
          ? useCalendarStore().getList.find((obj) => obj.id == this.$route.params.id).patient_id
          : ''),
        doctor_id: (this.$route.params.id
          // eslint-disable-next-line eqeqeq
          ? useCalendarStore().getList.find((obj) => obj.id == this.$route.params.id).doctor_id
          : ''),
        date: (this.$route.params.id
          // eslint-disable-next-line eqeqeq
          ? useCalendarStore().getList.find((obj) => obj.id == this.$route.params.id).date
          : ''),
        description: (this.$route.params.id
          // eslint-disable-next-line eqeqeq
          ? useCalendarStore().getList.find((obj) => obj.id == this.$route.params.id).description
          : ''),
      },
    };
  },
  methods: {
    async createEditCalendar() {
      const store = useCalendarStore();

      if (this.$route.params.id) {
        await store.updateCalendar(
          this.$route.params.id,
          this.book,
          () => {
            this.goPage('admin');
          },
        );
      } else {
        await store.createCalendar(
          this.book,
          () => {
            this.goPage('admin');
          },
        );
      }
    },
    goPage(route) {
      this.$router.push({ name: route });
    },
  },
  async beforeMount() {
    await useLoginStore().requestPerfilIDNAME();
    await useProfissionalStore().requestProfissionalsIDNAME();
    await useCalendarStore().requestCalendar();
  },
};
</script>
