<template>
  <div className="home font-mono">
    <home-images-component></home-images-component>
    <div className="h-10"></div>
    <home-about-component></home-about-component>
    <div className="h-10"></div>
    <home-speciality-component></home-speciality-component>
    <div className="h-10"></div>
    <home-recomendation-component></home-recomendation-component>
    <div className="h-10"></div>
  </div>
</template>

<script>
import HomeImagesComponent from '@/components/home/HomeImagesComponent.vue';
import HomeAboutComponent from '@/components/home/HomeAboutComponent.vue';
import HomeSpecialityComponent from '@/components/home/HomeSpecialityComponent.vue';
import HomeRecomendationComponent from '@/components/home/HomeRecomendationComponent.vue';

export default {
  name: 'HomeView',
  components: {
    HomeImagesComponent,
    HomeAboutComponent,
    HomeSpecialityComponent,
    HomeRecomendationComponent,
  },
};
</script>
