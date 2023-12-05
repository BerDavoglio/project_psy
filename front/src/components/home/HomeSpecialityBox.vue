<!-- eslint-disable max-len -->
<!-- eslint-disable vuejs-accessibility/mouse-events-have-key-events -->
<template>
  <div>
    <div
      @mouseover="hover = true"
      @mouseleave="hover = false"
      className="w-56 h-80 m-auto
            shadow-xl shadow-black/30
            text-white mt-2">
      <div
        v-if="hover == false"
        :style="{ backgroundImage: `url(${this.obj.img})` }"
        className="
          rounded-md w-full h-full text-2xl
          flex place-items-center justify-center font-bold uppercase
          bg-cover bg-no-repeat bg-center">
        {{ this.obj.title }}
      </div>
      <div v-if="hover == true" className="bg-white text-black p-3 w-full h-full rounded-md">
        <div className="text-2xl font-bold">
          {{ this.obj.title }}
        </div>
        <div class="text-center text-sm mt-3">
          {{ this.obj.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeSpecialityBox',
  props: ['obj'],
  data: () => ({
    hover: false,
  }),
};
</script>
