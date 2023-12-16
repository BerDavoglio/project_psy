<!-- eslint-disable max-len -->
<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div class="admin-employee-view">
    <div className="mx-auto">
      <div>
        <div className="text-xl font-bold">
          Gerenciamento de Funcionários
        </div>
        <div
          className="py-2 px-8 m-2 max-w-[56rem] mx-auto rounded-lg cursor-pointer bg-green-400"
          @click="goPage('admin-new-employee')">
          Criar Novo
        </div>
      </div>
      <div
        className="min-h-[16rem]"
        v-if="useProfissionalStore().getList.length > 0">
        <div
          v-for="obj in useProfissionalStore().getList"
          v-bind:key="obj">
          <admin-employee-box
            :obj="obj"
            :isCell="isCell" />
        </div>
      </div>
      <div
        v-else
        className="py-48 font-bold text-2xl">
        Infelizmente, nenhum doutor(a) foi cadastrado!
      </div>
    </div>
  </div>
</template>

<script setup>
import { useProfissionalStore } from '../store/store';
import AdminEmployeeBox from '../components/admin/AdminEmployeeBox.vue';
</script>

<script>
export default {
  name: 'AdminEmployeeView',
  components: {
    AdminEmployeeBox,
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
  async beforeMount() {
    const store = useProfissionalStore();
    await store.requestProfissional();

    this.isCell = this.verifyResize(window.innerWidth);
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
