<template>
  <div class="about"
       className="font-mono">
    <about-text-component></about-text-component>
    <div className="h-10"></div>
    <about-history-component></about-history-component>
    <div className="h-10"></div>
    <about-infra-component></about-infra-component>
    <div className="h-10"></div>
    <home-images-component :isCell="isCell"
                           :listImages="imagesCuritiba" />
    <div>Images da Sede de Curitiba</div>
    <div className="h-10"></div>
    <home-images-component :isCell="isCell"
                           :listImages="imagesSJP" />
    <div>Images da Sede de São José dos Pinhais</div>
    <div className="h-10"></div>
  </div>
</template>

<script>
import HomeImagesComponent from '../components/home/HomeImagesComponent.vue';
import AboutTextComponent from '../components/about/AboutTextComponent.vue';
import AboutHistoryComponent from '../components/about/AboutHistoryComponent.vue';
import AboutInfraComponent from '../components/about/AboutInfraComponent.vue';

export default {
  name: 'AboutView',
  components: {
    HomeImagesComponent,
    AboutTextComponent,
    AboutHistoryComponent,
    AboutInfraComponent,
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
      imagesSJP: [
        '/project_psy/img/1.99994414.jpeg',
        '/project_psy/img/2.1035141f.jpeg',
        '/project_psy/img/3.435c5c31.jpeg',
        '/project_psy/img/4.eee69d4c.jpeg',
        '/project_psy/img/5.ea97eb8b.jpeg',
        '/project_psy/img/6.99994414.jpeg',
      ],
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
