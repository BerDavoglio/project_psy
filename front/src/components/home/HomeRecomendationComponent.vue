<!-- eslint-disable max-len -->
<template>
  <div class="home-recomendation-component">
    <div
      :className="['grid gap-3 max-w-[50rem] m-auto '
        + (isCell ? 'grid-cols-1' : 'grid-cols-2')]">
      <home-recomendation-box :obj="obj[0]" />
      <home-recomendation-box :obj="obj[1]" />
    </div>
  </div>
</template>

<script>
import { useLoginStore } from '../../store/store';
import HomeRecomendationBox from './HomeRecomendationBox.vue';

export default {
  name: 'HomeRecomendationComponent',
  components: {
    HomeRecomendationBox,
  },
  props: ['isCell'],
  data: () => ({
    obj: [
      {
        text: '',
        name: '',
        rate: '',
      },
      {
        text: '',
        name: '',
        rate: '',
      },
    ],
  }),
  async beforeMount() {
    const store = useLoginStore();
    await store.requestViews();

    console.log(store.getReviews);
    if (store.getReviews.length !== 0) {
      this.obj = store.getReviews;
    }
  },
};
</script>
