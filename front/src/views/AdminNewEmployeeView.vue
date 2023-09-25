<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div class="admin-new-employee-view">
    <div className="w-[100%] max-w-[28rem] mx-auto mb-20 rounded-xl shadow-2xl p-4">
      <div className="m-10 text-2xl font-bold">Cadastrar novo Funcionário</div>
      <input v-model="doctor.name"
             placeholder="Nome"
             className="w-full h-8 border-2 rounded-sm p-2 mb-2">
      <!-- MUDAR INPUT PARA SELECT -->
      <input v-model="doctor.specialization"
             placeholder="Especialidade"
             className="w-full h-8 border-2 rounded-sm p-2 mb-2">
      <input v-model="doctor.description"
             placeholder="Descrição"
             className="w-full h-8 border-2 rounded-sm p-2 mb-2">
      <input v-model="doctor.image"
             placeholder="Imagem (URL)"
             className="w-full h-8 border-2 rounded-sm p-2 mb-2">
      <div className="w-48 p-2 bg-green-200 hover:bg-green-400 my-10 mx-auto
      rounded-xl cursor-pointer shadow-xl"
           @click="createEditDoc()">
        Salvar Funcionário
      </div>
    </div>
  </div>
</template>

<script setup>
import { useProfissionalStore } from '../store/store';
</script>

<script>
export default {
  name: 'AdminNewEmployeeView',
  params: ['id'],
  components: {
  },
  data() {
    return {
      doctor: {
        name: (this.$route.params.id
          // eslint-disable-next-line eqeqeq
          ? useProfissionalStore().getList.find((obj) => obj.id == this.$route.params.id).name
          : ''),
        specialization: (this.$route.params.id
          // eslint-disable-next-line eqeqeq, max-len
          ? useProfissionalStore().getList.find((obj) => obj.id == this.$route.params.id).specialization
          : ''),
        image: (this.$route.params.id
          // eslint-disable-next-line eqeqeq
          ? useProfissionalStore().getList.find((obj) => obj.id == this.$route.params.id).image
          : ''),
        description: (this.$route.params.id
          // eslint-disable-next-line eqeqeq, max-len
          ? useProfissionalStore().getList.find((obj) => obj.id == this.$route.params.id).description
          : ''),
      },
    };
  },
  methods: {
    async createEditDoc() {
      const store = useProfissionalStore();

      if (this.$route.params.id) {
        await store.updateProfissional(
          this.$route.params.id,
          this.doctor,
          () => {
            this.goPage('admin-employee');
          },
        );
      } else {
        await store.createProfissional(
          this.doctor,
          () => {
            this.goPage('admin-employee');
          },
        );
      }
    },
    goPage(route) {
      this.$router.push({ name: route });
    },
  },
};
</script>
