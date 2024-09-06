<!-- eslint-disable vuejs-accessibility/mouse-events-have-key-events -->
<!-- eslint-disable max-len -->
<template>
  <div class="home-speciality-component">
    <div className="w-full pb-10 bg-blue-200">
      <div className="text-xl p-4 font-bold">Especialidades:</div>
      <div
        :className="['justify-evenly max-w-[40rem] m-auto '
          + (isCell ? '' : 'flex flex-row flex-wrap flex-[0 0 25%]')]">
        <home-speciality-box :obj="obj[0]" />
        <home-speciality-box :obj="obj[1]" />
        <home-speciality-box :obj="obj[2]" />
        <home-speciality-box :obj="obj[3]" />
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
        img: 'https://www.infoescola.com/wp-content/uploads/2008/07/psiquiatria_454154401.jpg',
      },
      {
        title: 'Psiquiatria Forense',
        text: 'A Psiquiatria Forense une psiquiatria e leis, aplicando princípios psiquiátricos em questões legais. Psiquiatras forenses dão depoimentos em tribunais, explicando avaliações de saúde mental aos profissionais jurídicos.',
        img: 'https://i0.wp.com/sanarmed.com/wp-content/uploads/2024/03/media-72.jpg?fit=500%2C281&ssl=1',
      },
      {
        title: 'Tratamento de Escetamina',
        text: 'O tratamento de escetamina é indicado para pacientes que sofrem de depressão resistente, o quais já foram submetidos a outros protocolos convencionais de tratamento mas não obtiveram melhora do quadro. A substância pode ser administrada por infusão endovenosa ou spray nasal.',
        img: 'https://madinbrasil.org/wp-content/uploads/2021/12/esketamine.jpeg',
      },
      {
        title: 'Polissonografia',
        text: 'A fim de coletar informações para diagnóstico de distúrbios do sono, a polissonografia é um exame não invasivo que pode corroborar na identificação da apneia obstrutiva, sonambulismo, movimento periódico de pernas, entre outros. A Angimedi o exame de polissonografia portátil, em que o paciente pode fazer no conforto de seu próprio quarto e conseguir resultados mais fidedignos de seu sono.',
        img: 'https://institutodosono.com/wp-content/uploads/2020/12/exame-sono.jpg',
      },
    ],
  }),
};
</script>
