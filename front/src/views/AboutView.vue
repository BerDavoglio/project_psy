<template>
  <div class="about" className="font-mono">
    <about-text-component></about-text-component>
    <div className="h-10"></div>
    <about-history-component></about-history-component>
    <div className="h-10"></div>
    <about-infra-component></about-infra-component>
    <div className="h-10"></div>
    <home-images-component></home-images-component>
    <div className="h-10"></div>
  </div>
</template>

<script>
import HomeImagesComponent from '@/components/home/HomeImagesComponent.vue';
import AboutTextComponent from '@/components/about/AboutTextComponent.vue';
import AboutHistoryComponent from '@/components/about/AboutHistoryComponent.vue';
import AboutInfraComponent from '@/components/about/AboutInfraComponent.vue';

export default {
  name: 'AboutView',
  components: {
    HomeImagesComponent,
    AboutTextComponent,
    AboutHistoryComponent,
    AboutInfraComponent,
  },
  data() {
    return {};
  },
};
</script>
