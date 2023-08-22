<template>
  <div class="home-images-component">
    <div className="w-[50rem] m-auto">
      <Carousel :itemsToShow="1.95" :wrapAround="true" :transition="500">
        <Slide v-for="image in listImages" :key="image">
          <img :src="image" alt='' className="w-96 h-64 bg-blue-400" />
        </Slide>
      </Carousel>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

export default {
  name: 'HomeImagesComponent',
  components: {
    Carousel,
    Slide,
  },
  data: () => ({
    listImages: [
      'https://img.freepik.com/fotos-premium/ilustracao-abstrata-da-psicologia-da-imaginacao-ideal-para-fundos-de-papel-de-parede-generative-ai_893571-1805.jpg?w=2000',
      'https://cdn.wallpapersafari.com/5/78/UEjsAt.jpg',
      'https://e0.pxfuel.com/wallpapers/404/729/desktop-wallpaper-psychology.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmXfmknECyK3RLXVN_ZImIOvUF5P2EqyMd6A&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOH30B1uqFcEsXqmDjhscPEjzJR3s7shqmzA&usqp=CAU',
    ],
  }),
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
