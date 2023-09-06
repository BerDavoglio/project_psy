<template>
  <div class="about"
       className="font-mono">
    <about-text-component></about-text-component>
    <div className="h-10"></div>
    <about-history-component></about-history-component>
    <div className="h-10"></div>
    <about-infra-component></about-infra-component>
    <div className="h-10"></div>
    <home-images-component :isCell="isCell" />
    <div>Images da Sede de Curitiba</div>
    <div className="h-10"></div>
    <about-images-component :isCell="isCell" />
    <div>Images da Sede de São José dos Pinhais</div>
    <div className="h-10"></div>
  </div>
</template>

<script>
import HomeImagesComponent from '../components/home/HomeImagesComponent.vue';
import AboutImagesComponent from '../components/about/AboutImagesComponent.vue';
import AboutTextComponent from '../components/about/AboutTextComponent.vue';
import AboutHistoryComponent from '../components/about/AboutHistoryComponent.vue';
import AboutInfraComponent from '../components/about/AboutInfraComponent.vue';

export default {
  name: 'AboutView',
  components: {
    HomeImagesComponent,
    AboutImagesComponent,
    AboutTextComponent,
    AboutHistoryComponent,
    AboutInfraComponent,
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
