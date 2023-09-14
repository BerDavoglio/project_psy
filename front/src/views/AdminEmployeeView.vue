<!-- eslint-disable max-len -->
<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div class="admin-employee-view">
    <div className="mx-auto">
      <div>
        <div className="text-xl font-bold">
          Gerenciamento de Funcionários
        </div>
        <div className="py-2 px-8 m-2 max-w-[56rem] mx-auto rounded-lg cursor-pointer bg-green-400"
             @click="goPage('admin-new-employee')">
          Criar Novo
        </div>
      </div>
      <div v-if="useProfissionalStore().getList.length > 0">
        <div v-for="obj in useProfissionalStore().getList"
             v-bind:key="obj">
          <div :className="['max-w-[56rem] bg-blue-200 rounded-3xl my-4 shadow-xl shadow-black/30 grid mx-auto ' +
            (isCell ? 'grid-cols-1' : 'grid-cols-6')]">
            <img className="m-auto rounded-full h-28 w-28"
                 :src="obj.image"
                 alt="" />
            <div :className="['m-2 ' + (isCell ? '' : 'col-span-4')]">
              <div>
                <div className="font-bold text-xl">
                  {{ obj.name }}
                </div>
                <div className="font-bold">
                  {{ obj.specialization }}
                </div>
              </div>
              <text-clamp :text='obj.description'
                          :max-lines='5' />
            </div>
            <div className="flex flex-col place-content-center">
              <div className="py-1 px-8 m-2 rounded-lg cursor-pointer bg-yellow-400"
                   @click="goPage('admin-new-employee')">
                Editar
              </div>
              <div className="py-1 px-8 m-2 rounded-lg cursor-pointer bg-red-400"
                   @click="useProfissionalStore().deleteProfissional(obj)">
                Apagar
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else
           className="py-48 font-bold text-2xl">
        Infelizmente, nenhum doutor(a) foi cadastrado!
      </div>
    </div>
  </div>
</template>

<script setup>
import { useProfissionalStore } from '../store/store';
</script>

<script>
export default {
  name: 'AdminEmployeeView',
  components: {
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
      console.log(i);
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
