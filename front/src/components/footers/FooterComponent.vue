<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->

<template>
  <div>
    <div :className="[
      'bg-black w-full pt-10 grid text-white '
      + (this.windowWidth > 768 ? 'grid-cols-3' : 'grid-cols-1')]">
      <part-one></part-one>
      <part-three></part-three>
      <part-four></part-four>
    </div>
  </div>
  <div class="bg-black w-full text-white pb-4">
    <div>© Direitos reservados</div>
  </div>
</template>

<script>
import PartOne from './PartOne.vue';
import PartThree from './PartThree.vue';
import PartFour from './PartFour.vue';

export default {
  name: 'FooterComponent',
  components: {
    PartOne,
    PartThree,
    PartFour,
  },
  data() {
    return {
      windowWidth: window.innerWidth,
    };
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    },
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
