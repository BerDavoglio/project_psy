<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div class="admin-new-employee-view">
    <div className="w-96 mx-auto mb-20 rounded-xl shadow-2xl p-4">
      <div className="m-10 text-2xl font-bold">Cadastrar novo Funcionário</div>
      <input v-model="doctor.name"
             placeholder="Nome"
             className="w-full h-8 border-2 rounded-sm p-2 mb-2">
      <input v-model="doctor.especiality"
             placeholder="Especialidade"
             className="w-full h-8 border-2 rounded-sm p-2 mb-2">
      <input v-model="doctor.description"
             placeholder="Descrição"
             className="w-full h-8 border-2 rounded-sm p-2 mb-2">
      <input v-model="doctor.image"
             placeholder="Imagem"
             className="w-full h-8 border-2 rounded-sm p-2 mb-2">
      <div className="w-48 p-2 bg-green-200 hover:bg-green-400 my-10 mx-auto
      rounded-xl cursor-pointer shadow-xl"
           @click="goPage('admin-employee')">
        Salvar Funcionário
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminNewEmployeeView',
  components: {
  },
  data() {
    return {
      doctor: {
        name: '',
        especiality: '',
        description: '',
        image: '',
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
