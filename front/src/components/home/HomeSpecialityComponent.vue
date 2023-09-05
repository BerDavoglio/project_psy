<!-- eslint-disable vuejs-accessibility/mouse-events-have-key-events -->
<!-- eslint-disable max-len -->
<template>
  <div class="home-speciality-component">
    <div className="w-full pb-10 bg-blue-200">
      <div className="text-xl p-4 font-bold">Especialidades:</div>
      <div :className="['grid max-w-[50rem] m-auto '
    + (isCell ? 'grid-cols-1 gap-3' : 'grid-cols-3')]">
        <home-speciality-box :obj="obj[0]"></home-speciality-box>
        <home-speciality-box :obj="obj[1]"></home-speciality-box>
        <home-speciality-box :obj="obj[2]"></home-speciality-box>
      </div>
    </div>
  </div>
</template>

<script>
import HomeSpecialityBox from './HomeSpecialityBox.vue';

export default {
  name: 'HomeSpecialityComponent',
  components: {
    HomeSpecialityBox,
  },
  props: ['isCell'],
  data: () => ({
    obj: [
      {
        title: 'Psiquiatria',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta molestias, aspernatur recusandae, deserunt doloremque quibusdam quos itaque dolorem aperiam ut pariatur nostrum voluptatem assumenda illum nam officiis, error atque. Reiciendis!',
        img: 'https://institutologos.com.br/wp-content/uploads/2016/07/psiquiatria2.jpg',
      },
      {
        title: 'Psicologia',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta molestias, aspernatur recusandae, deserunt doloremque quibusdam quos itaque dolorem aperiam ut pariatur nostrum voluptatem assumenda illum nam officiis, error atque. Reiciendis!',
        img: 'https://blog.aaainovacao.com.br/wp-content/uploads/2022/10/congreso_psicologia_positiva-1280x680-c-default.jpg',
      },
      {
        title: 'Neuropsicologia',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta molestias, aspernatur recusandae, deserunt doloremque quibusdam quos itaque dolorem aperiam ut pariatur nostrum voluptatem assumenda illum nam officiis, error atque. Reiciendis!',
        img: 'https://psicoter.com.br/wp-content/uploads/2021/07/O-que-e-a-Neuropsicologia.png',
      },
    ],
  }),
};
</script>
