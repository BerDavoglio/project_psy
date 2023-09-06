<template>
  <div className="home font-mono">
    <home-images-component  :isCell="this.isCell" :listImages="imagesCuritiba"  />
    <div className="h-10"></div>
    <home-about-component></home-about-component>
    <div className="h-10"></div>
    <home-speciality-component :isCell="this.isCell" />
    <div className="h-10"></div>
    <home-recomendation-component :isCell="this.isCell" />
    <div className="h-10"></div>
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
      imagesCuritiba: [
        '/project_psy/img/2.432c3001.jpeg',
        '/project_psy/img/3.9a214851.jpeg',
        '/project_psy/img/4.951c3b6a.jpeg',
        '/project_psy/img/1.ec59eb24.jpeg',
        '/project_psy/img/5.ef8dbcf1.jpeg',
        '/project_psy/img/6.ca235a71.jpeg',
      ],
    };
  },
  methods: {
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
