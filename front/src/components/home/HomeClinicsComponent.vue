<template>
  <div class="home-images-component">
    <c-w-b-component :isCell="isCell"></c-w-b-component>
    <s-j-p-component :isCell="isCell"></s-j-p-component>
    <s-c-component :isCell="isCell"></s-c-component>
  </div>
</template>

<script>
import CWBComponent from "./HomeClinicsItemComponent/CWBComponent.vue";
import SJPComponent from "./HomeClinicsItemComponent/SJPComponent.vue";
import SCComponent from "./HomeClinicsItemComponent/SCComponent.vue";

export default {
  name: 'HomeImagesComponent',
  props: ['isCell'],
  components: {
    CWBComponent,
    SJPComponent,
    SCComponent,
  },
  data: () => ({}),
};
</script>

