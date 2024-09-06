<template>
  <div class="home-images-component">
    <c-w-b-component :isCell="isCell"></c-w-b-component>
    <div className="h-10" />
    <s-j-p-component :isCell="isCell"></s-j-p-component>
    <div className="h-10" />
    <s-c-component :isCell="isCell"></s-c-component>
    <div className="h-10" />
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

