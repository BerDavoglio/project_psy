<!-- eslint-disable vuejs-accessibility/mouse-events-have-key-events -->
<!-- eslint-disable max-len -->
<template>
  <div class="home-speciality-component">
    <div className="w-full pb-10 bg-blue-200">
      <div className="text-xl p-4 font-bold">Especialidades:</div>
      <div
        :className="['flex flex-row justify-evenly max-w-[40rem] m-auto '
          + (isCell ? 'flex-col' : 'flex-row')]">
        <home-speciality-box :obj="obj[0]" />
        <home-speciality-box :obj="obj[1]" />
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
        text: 'A Psiquiatria é parte da medicina que estuda e trata transtornos mentais. Seu objetivo principal é oferecer cuidados abrangentes a pessoas com diferentes condições psiquiátricas, desde ansiedade e depressão até transtornos mais complexos como esquizofrenia e bipolaridade.',
        img: '../../assets/images/imagehome2.jpg',
      },
      {
        title: 'Psiquiatria Forense',
        text: 'A Psiquiatria Forense une psiquiatria e leis, aplicando princípios psiquiátricos em questões legais. Psiquiatras forenses dão depoimentos em tribunais, explicando avaliações de saúde mental aos profissionais jurídicos.',
        img: '../../assets/images/imagehome1.jpg',
      },
    ],
  }),
};
</script>
