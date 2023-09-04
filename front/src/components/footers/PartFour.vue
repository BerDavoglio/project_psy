<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div>
    <div class="bg-white h-2 w-[85%] mx-auto my-3 rounded-md"></div>
    <div class="text-2xl font-bold">
      Links
    </div>
    <div class="grid grid-cols-1 mx-6">
      <div className="cursor-pointer mt-2" @click="goToInstagram">
        <v-icon name="bi-instagram"></v-icon> Instagram
      </div>
      <div className="cursor-pointer mt-2" @click="goToFacebook">
        <v-icon name="bi-facebook"></v-icon> Facebook
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PartFour',
  methods: {
    goToInstagram() {
      window.open('https://www.instagram.com/angimediclinica/', '_blank');
    },
    goToFacebook() {
      window.open('https://www.facebook.com/AngimediClinicaMedica', '_blank');
    },
  },
};
</script>
