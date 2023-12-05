<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div className="bg-blue-200">
    <div className="mx-10" v-if="!isOpen">
      <div
        :className="['mx-auto py-4 grid max-w-[40rem] '
          + (isCell ? 'grid-cols-1' : 'grid-cols-4')]">
        <div
          className="
            m-auto cursor-pointer
            hover:bg-blue-300
            active:bg-blue-400
            active:text-white
            w-[8rem]"
          @click="goPage('home')">
          Home
        </div>
        <div
          className="
            m-auto cursor-pointer
            hover:bg-blue-300
            active:bg-blue-400
            active:text-white
            w-[8rem]"
          @click="goPage('about')">
          Sobre
        </div>
        <div
          className="
            m-auto cursor-pointer
            hover:bg-blue-300
            active:bg-blue-400
            active:text-white
            w-[8rem]"
          @click="goPage('profissionals')">
          Profissionais
        </div>
        <div
          v-if="useLoginStore().getRole === 'user'"
          className="
            m-auto cursor-pointer
            hover:bg-blue-300
            active:bg-blue-400
            active:text-white
            w-[8rem]"
          @click="goPage('perfil')">
          Perfil
        </div>
        <div
          v-if="useLoginStore().getRole === 'admin'"
          className="
            m-auto cursor-pointer
            hover:bg-blue-300
            active:bg-blue-400
            active:text-white
            w-[8rem]"
          @click="goPage('admin')">
          Perfil Administrativo
        </div>
        <div
          v-if="useLoginStore().getRole === ''"
          className="
            m-auto cursor-pointer
            hover:bg-blue-300
            active:bg-blue-400
            active:text-white
            w-[8rem]"
          @click="goPage('login')">
          Login
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useLoginStore } from '../../store/store';
</script>

<script>
export default {
  name: 'ButtonsDropComponent',
  props: [
    'isOpen',
    'isCell',
  ],
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
