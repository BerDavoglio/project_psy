<!-- eslint-disable max-len -->
<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div>
    <div
      :className="['py-4 bg-blue-200 '
        + (isCell ? 'grid-cols-1' : 'grid-cols-2 ')
        + (isOpen ? '' : 'drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]')]">
      <div>
        <div :className="['text-2xl grid ' + (isCell ? 'grid-cols-1' : 'grid-cols-3')]">
          <div :className="['my-auto m-auto ' + (isCell ? '' : 'col-start-2')]">
            <img
              alt=""
              className="max-h-[2.5rem] cursor-pointer"
              src="../../assets/images/logo.png"
              @click="this.$router.push({ name: `home` });" />
          </div>
          <div className="cursor-pointer">
            <v-icon @click="openMenu" name="gi-hamburger-menu" scale="2" v-if="!isOpen" />
            <v-icon @click="openMenu" name="io-close-sharp" scale="2" v-if="isOpen" />
          </div>
        </div>
      </div>
    </div>
    <div className="bg-blue-200">
      <div v-if="isOpen" className="w-[70%] h-[1px] bg-black m-auto" />
    </div>
    <buttons-drop-component :isOpen="!isOpen" :isCell="isCell" />
    <div :className="['w-100 h-[0.1px] bg-black m-auto ']" />
  </div>
</template>

<script>
import ButtonsDropComponent from './ButtonsDropComponent.vue';

export default {
  name: 'HeaderComponent',
  components: {
    ButtonsDropComponent,
  },
  data() {
    return {
      isCell: false,
      isOpen: false,
      isCenter: 1,
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
    openMenu() {
      this.isOpen = !this.isOpen;
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
