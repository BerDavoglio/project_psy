<template>
  <div class="home-images-component">
    <div className="max-w-[50rem] m-auto">
      <Carousel :itemsToShow="(isCell ? 1.15 : 1.95)"
                :wrapAround="true"
                :transition="500">
        <Slide v-for="image in 1"
               :key="image">
          <img src="@/assets/images/cwb/2.jpeg"
               alt=''
               className="w-96 h-[20rem] bg-blue-400 object-cover" />
        </Slide>
        <Slide v-for="image in 1"
               :key="image">
          <img src="@/assets/images/cwb/3.jpeg"
               alt=''
               className="w-96 h-[20rem] bg-blue-400 object-cover" />
        </Slide>
        <Slide v-for="image in 1"
               :key="image">
          <img src="@/assets/images/cwb/4.jpeg"
               alt=''
               className="w-96 h-[20rem] bg-blue-400 object-cover" />
        </Slide>
        <Slide v-for="image in 1"
               :key="image">
          <img src="@/assets/images/cwb/1.jpeg"
               alt=''
               className="w-96 h-[20rem] bg-blue-400 object-cover" />
        </Slide>
        <Slide v-for="image in 1"
               :key="image">
          <img src="@/assets/images/cwb/5.jpeg"
               alt=''
               className="w-96 h-[20rem] bg-blue-400 object-cover" />
        </Slide>
        <Slide v-for="image in 1"
               :key="image">
          <img src="@/assets/images/cwb/6.jpeg"
               alt=''
               className="w-96 h-[20rem] bg-blue-400 object-cover" />
        </Slide>
      </Carousel>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

export default {
  name: 'AboutImagesOneComponent',
  components: {
    Carousel,
    Slide,
  },
  props: ['isCell'],
  data: () => ({}),
};
</script>

<style scoped>
.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active~.carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}
</style>
