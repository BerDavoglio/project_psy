<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div>
    <div class="bg-white h-2 w-[85%] mx-auto my-3 rounded-md"></div>
    <div class="text-2xl font-bold">
      Links
    </div>
    <div class="grid grid-cols-1 mx-6">
      <div className="cursor-pointer mt-2" @click="goToLinkedin">
        Link 1
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PartFour',
  methods: {
    goToGoogle() {
      window.open('https://www.google.com', '_blank');
    },
  },
};
</script>
