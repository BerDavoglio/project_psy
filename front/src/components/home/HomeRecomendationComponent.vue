<!-- eslint-disable max-len -->
<template>
  <div class="home-recomendation-component">
    <div className="grid grid-cols-2 w-[50rem] m-auto">
      <home-recomendation-box :obj="obj[0]"></home-recomendation-box>
      <home-recomendation-box :obj="obj[1]"></home-recomendation-box>
    </div>
  </div>
</template>

<script>
import HomeRecomendationBox from './HomeRecomendationBox.vue';

export default {
  name: 'HomeRecomendationComponent',
  components: {
    HomeRecomendationBox,
  },
  data: () => ({
    obj: [
      {
        title: 'Recomendação 1',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores aliquid voluptates nesciunt? Cupiditate consequuntur in nesciunt! Nam unde, vitae vero possimus voluptatum, voluptatem officia nisi ex tempore cum, expedita quisquam!',
        name: 'Joaninha123, Google Ads',
      },
      {
        title: 'Recomendação 2',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione architecto rerum porro repudiandae ullam. Tempora sunt eligendi, vel fugiat magni tenetur ullam animi nam, aspernatur iure placeat repudiandae error saepe?',
        name: 'LittleJohn, Facebook',
      },
    ],
  }),
};
</script>
