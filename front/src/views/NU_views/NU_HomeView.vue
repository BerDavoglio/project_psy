<template>
  <div className="home font-mono">
    <home-images-component :isCell="isCell" />
    <div className="h-10" />
    <home-about-component />
    <div className="h-10" />
    <home-speciality-component :isCell="isCell" />
    <div className="h-10" />
    <home-recomendation-component :isCell="isCell" />
    <div className="h-10" />
  </div>
</template>

<script>
import HomeImagesComponent from '../components/home/HomeImagesComponent.vue';
import HomeAboutComponent from '../components/home/HomeAboutComponent.vue';
import HomeSpecialityComponent from '../components/home/HomeSpecialityComponent.vue';
import HomeRecomendationComponent from '../components/home/HomeRecomendationComponent.vue';

export default {
  name: 'HomeView',
  components: {
    HomeImagesComponent,
    HomeAboutComponent,
    HomeSpecialityComponent,
    HomeRecomendationComponent,
  },
  data() {
    return {
      isCell: false,
      windowWidth: window.innerWidth,
    };
  },
  methods: {
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
  beforeMount() {
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
