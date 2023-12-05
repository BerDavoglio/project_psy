<template>
  <div
    class="about"
    className="font-mono">
    <about-text-component />
    <div className="h-10" />
    <about-infra-component />
    <div className="h-10" />
    <about-history-component />
    <div className="h-10" />
    <about-images-one-component :isCell="isCell" />
    <div>Images da Sede de Curitiba</div>
    <div className="h-10" />
    <about-images-two-component :isCell="isCell" />
    <div>Images da Sede de São José dos Pinhais</div>
    <div className="h-10" />
  </div>
</template>

<script>
import AboutImagesOneComponent from '../components/about/AboutImagesOneComponent.vue';
import AboutImagesTwoComponent from '../components/about/AboutImagesTwoComponent.vue';
import AboutTextComponent from '../components/about/AboutTextComponent.vue';
import AboutHistoryComponent from '../components/about/AboutHistoryComponent.vue';
import AboutInfraComponent from '../components/about/AboutInfraComponent.vue';

export default {
  name: 'AboutView',
  components: {
    AboutImagesOneComponent,
    AboutImagesTwoComponent,
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
