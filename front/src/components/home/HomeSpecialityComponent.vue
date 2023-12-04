<!-- eslint-disable vuejs-accessibility/mouse-events-have-key-events -->
<!-- eslint-disable max-len -->
<template>
  <div class="home-speciality-component">
    <div className="w-full pb-10 bg-blue-200">
      <div className="text-xl p-4 font-bold">Especialidades:</div>
      <div :className="['flex flex-row justify-evenly max-w-[40rem] m-auto '
    + (isCell ? 'flex-col' : 'flex-row')]">
        <home-speciality-box :obj="obj[0]"></home-speciality-box>
        <home-speciality-box :obj="obj[1]"></home-speciality-box>
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
        img: 'https://www.infoescola.com/wp-content/uploads/2008/07/psiquiatria_454154401.jpg',
      },
      {
        title: 'Psiquiatria Forense',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta molestias, aspernatur recusandae, deserunt doloremque quibusdam quos itaque dolorem aperiam ut pariatur nostrum voluptatem assumenda illum nam officiis, error atque. Reiciendis!',
        img: 'https://eephcfmusp.org.br/portal/online/wp-content/uploads/sites/2/2023/09/Imagem3.png',
      },
    ],
  }),
};
</script>
