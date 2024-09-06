
<template>
  <div class="home-images-component">
    <div :className="['flex max-w-[55rem] m-auto '] + (isCell ? 'flex-col' : '')">
      <div className="max-w-[35rem] m-auto">
        <img src="@/assets/images/sc/1.jpeg"
             alt=''
             className="w-[35rem] h-[25rem] bg-blue-400 object-cover" />
        <div @click="goTo" className="">designed by pressfoto - Freepik.com</div>
      </div>
      <div :className="['h-fit m-auto ' + (isCell ? 'mt-4' : 'text-left ml-8')]">
        <div class="font-semibold text-xl">Clinica Santa Catarina</div>
        <div>Somente atendimentos online</div>
        <div>Telefone (WhatsApp): +55 47 9102-6106</div>
        <div className="cursor-pointer mt-2 underline"
             @click="goToWhatsapp">
          <v-icon name="bi-whatsapp" /> Agende uma consulta
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

export default {
  name: 'SCComponent',
  components: {
    Carousel,
    Slide,
  },
  props: ['isCell'],
  data: () => ({}),
  methods: {
    goTo() {
      window.open('https://br.freepik.com', '_blank');
    },
    goToWhatsapp() {
      window.open('https://wa.me/554791026106', '_blank');
    },
  },
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

