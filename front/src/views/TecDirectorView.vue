2<template>
  <div class="profissional-view">
    <div className="text-2xl font-bold">
      Profissionais:
    </div>
  </div>
</template>

<script>
export default {
  name: 'TecDirectorView',

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
  async beforeMount() {
    this.isCell = this.verifyResize(window.innerWidth);

    const store = useProfissionalStore();
    await store.requestProfissional();
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
