<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div>
    <div class="bg-white h-2 w-[85%] mx-auto my-3 rounded-md" />
    <div class="text-2xl font-bold">
      Links
    </div>
    <div class="grid grid-cols-1 mx-6">
      <div className="cursor-pointer mt-2" @click="goToInstagram">
        <v-icon name="bi-instagram" /> Instagram
      </div>
      <div className="cursor-pointer mt-2" @click="goToFacebook">
        <v-icon name="bi-facebook" /> Facebook
      </div>
      <div className="cursor-pointer mt-2" @click="goToLinkedin">
        <v-icon name="bi-linkedin" /> LinkedIn
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
    goToLinkedin() {
      window.open('https://www.linkedin.com/company/angimediclinica/', '_blank');
    },
  },
};
</script>
