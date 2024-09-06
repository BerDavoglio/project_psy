<template>
  <div class="home-images-component">
    <div :className="['flex max-w-[55rem] m-auto '] + (isCell ? 'flex-col-reverse' : '')">
      <div :className="['h-fit m-auto ' + (isCell ? 'mt-4' : 'text-right mr-8')]">
        <div class="font-semibold text-xl">Clinica São José dos Pinhais</div>
        <div>Av. das Americanas, 737, Lojas 1, 2 e 3 (Terreo)</div>
        <div>Telefone (WhatsApp): +55 41 99222-1174</div>
        <div className="cursor-pointer mt-2 underline"
             @click="goToWhatsapp">
          <v-icon name="bi-whatsapp" /> Agende uma consulta
        </div>
      </div>
      <div className="max-w-[35rem] m-auto">
        <Carousel :itemsToShow="1"
                  :wrapAround="true"
                  :transition="1000"
                  :autoplay="3000">
          <Slide v-for="image in 1"
                 :key="image">
            <img src="@/assets/images/sjp/1.jpeg"
                 alt=''
                 className="w-[35rem] h-[25rem] bg-blue-400 object-cover" />
          </Slide>
          <Slide v-for="image in 1"
                 :key="image">
            <img src="@/assets/images/sjp/2.jpeg"
                 alt=''
                 className="w-[35rem] h-[25rem] bg-blue-400 object-cover" />
          </Slide>
          <Slide v-for="image in 1"
                 :key="image">
            <img src="@/assets/images/sjp/3.jpeg"
                 alt=''
                 className="w-[35rem] h-[25rem] bg-blue-400 object-cover" />
          </Slide>
          <Slide v-for="image in 1"
                 :key="image">
            <img src="@/assets/images/sjp/4.jpeg"
                 alt=''
                 className="w-[35rem] h-[25rem] bg-blue-400 object-cover" />
          </Slide>
          <Slide v-for="image in 1"
                 :key="image">
            <img src="@/assets/images/sjp/5.jpeg"
                 alt=''
                 className="w-[35rem] h-[25rem] bg-blue-400 object-cover" />
          </Slide>
          <Slide v-for="image in 1"
                 :key="image">
            <img src="@/assets/images/sjp/6.jpeg"
                 alt=''
                 className="w-[35rem] h-[25rem] bg-blue-400 object-cover" />
          </Slide>
        </Carousel>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

export default {
  name: 'SJPComponent',
  components: {
    Carousel,
    Slide,
  },
  props: ['isCell'],
  data: () => ({}),
  methods: {
    goToWhatsapp() {
      window.open('https://wa.me/5541992221174', '_blank');
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
