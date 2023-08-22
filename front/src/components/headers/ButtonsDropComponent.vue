<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div  className="bg-gray-200">
    <div className="mx-10" v-if="!isOpen">
      <div :className="['mx-auto py-4 grid max-w-[30rem] '
        + (isCell ? 'grid-cols-1' : 'grid-cols-3')]">
        <div className="
            m-auto cursor-pointer
            hover:bg-gray-300
            active:bg-gray-400
            active:text-white
            w-[10rem]" @click="goPage('home')">
          Home
        </div>
        <div className="
            m-auto cursor-pointer
            hover:bg-gray-300
            active:bg-gray-400
            active:text-white
            w-[10rem]" @click="goPage('about')">
          Sobre
        </div>
        <div className="
            m-auto cursor-pointer
            hover:bg-gray-300
            active:bg-gray-400
            active:text-white
            w-[10rem]" @click="goPage('profissionals')">
          Profissionais
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ButtonsDropComponent',
  props: [
    'isOpen',
    'isCell',
  ],
  methods: {
    goPage(route) {
      this.$router.push({ name: route });
    },
  },
};
</script>
