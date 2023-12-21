<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div class="admin-new-employee-view">
    <div className="w-[100%] max-w-[28rem] mx-auto mb-20 rounded-xl shadow-2xl p-4">
      <div className="m-10 text-2xl font-bold">
        {{ $route.params.id ? 'Editar Funcionário' : 'Cadastrar novo Funcionário' }}
      </div>
      <div className="w-full border-[0.1rem] border-gray-400 rounded-[0.3rem] mb-2">
        <input
          v-model="name"
          placeholder="Nome"
          className="h-10 w-full px-3">
      </div>
      <div className="h-[40px] mb-2">
        <v-select
          v-model="specialization"
          density="compact"
          :items="['Psiquiatria', 'Psiquiatria Forense']"
          variant="outlined" />
      </div>
      <div className="w-full border-[0.1rem] border-gray-400 rounded-[0.3rem] mb-2">
        <input
          v-model="description"
          placeholder="Descrição"
          className="h-10 w-full px-3">
      </div>
      <div>
        <input
          placeholder="Imagem (URL)"
          type="file"
          @change="onFileSelected"
          className="w-full border-[0.1rem] border-gray-400 rounded-[0.3rem] mb-2 h-10 px-3">
      </div>
      <div
        className="w-48 p-2 bg-green-200 hover:bg-green-400 my-10 mx-auto
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
  components: {},
  data() {
    return {
      selectedFile: null,
      name: '',
      specialization: 'Especialidade',
      description: '',
    };
  },
  methods: {
    async createEditDoc() {
      const store = useProfissionalStore();

      const formData = new FormData();
      formData.append('image', this.selectedFile);
      formData.append('name', this.name);
      formData.append('specialization', this.specialization);
      formData.append('description', this.description);

      if (this.$route.params.id) {
        await store.updateProfissional(
          this.$route.params.id,
          formData,
          () => {
            this.goPage('admin-employee');
          },
        );
      } else {
        await store.createProfissional(
          formData,
          () => {
            this.goPage('admin-employee');
          },
        );
      }
    },
    goPage(route) {
      this.$router.push({ name: route });
    },
    onFileSelected(event) {
      // eslint-disable-next-line prefer-destructuring
      this.selectedFile = event.target.files[0];
    },
  },
  beforeMount() {
    if (this.$route.params.id) {
      const list = useProfissionalStore().getList;
      // eslint-disable-next-line eqeqeq
      const doct = list.find((obj) => obj.id == this.$route.params.id);

      this.name = doct.name;
      this.specialization = doct.specialization;
      this.description = doct.description;
    }
  },
};
</script>
