<template>
  <div class="profissional-view">
    <div className="text-2xl font-bold">Profissionais:</div>
    <div v-for="(obj, index) in listObj"
         :key="obj"
         className="font-mono">
      <profissional-box-component :obj="obj"
                                  :i="index"
                                  :isCell="isCell" />
    </div>
  </div>
</template>

<script>
import ProfissionalBoxComponent from '../components/profissional/ProfissionalBoxComponent.vue';

export default {
  nome: 'ProfissionalView',
  components: {
    ProfissionalBoxComponent,
  },
  data() {
    return {
      listObj: [
        {
          img: 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png',
          name: 'Jorge Gabriel',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In ea aspernatur voluptatibus itaque illum eaque dolore minima fuga natus! Possimus dignissimos, dolor quos repellat odio commodi totam omnis non eum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis delectus iusto aut accusantium necessitatibus ut voluptas aliquid soluta maiores fuga rerum, illum minima corrupti quasi non id voluptatibus. Dolorem, dolore?',
        },
        {
          img: 'https://img.freepik.com/vetores-premium/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg',
          name: 'Cleiton da Silva',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In ea aspernatur voluptatibus itaque illum eaque dolore minima fuga natus! Possimus dignissimos, dolor quos repellat odio commodi totam omnis non eum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis delectus iusto aut accusantium necessitatibus ut voluptas aliquid soluta maiores fuga rerum, illum minima corrupti quasi non id voluptatibus. Dolorem, dolore?',
        },
        {
          img: 'https://img.freepik.com/vetores-premium/retrato-feminino-foto-de-perfil-de-mulher-avatar-de-cor_81894-6400.jpg?w=2000',
          name: 'Lorante Jus Carpinteira',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In ea aspernatur voluptatibus itaque illum eaque dolore minima fuga natus! Possimus dignissimos, dolor quos repellat odio commodi totam omnis non eum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis delectus iusto aut accusantium necessitatibus ut voluptas aliquid soluta maiores fuga rerum, illum minima corrupti quasi non id voluptatibus. Dolorem, dolore?',
        },
        {
          img: 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png',
          name: 'Amanda',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In ea aspernatur voluptatibus itaque illum eaque dolore minima fuga natus! Possimus dignissimos, dolor quos repellat odio commodi totam omnis non eum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis delectus iusto aut accusantium necessitatibus ut voluptas aliquid soluta maiores fuga rerum, illum minima corrupti quasi non id voluptatibus. Dolorem, dolore?',
        },
      ],
      isCell: false,
      windowWidth: window.innerWidth,
    };
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    },
    verifyResize(i) {
      console.log(i);
      if (i < 768) {
        return true;
      } return false;
    },
  },
  watch: {
    windowWidth(newWidth) {
      this.isCell = this.verifyResize(newWidth);
    },
  },
  beforeMount() {
    this.isCell = this.verifyResize(window.innerWidth);
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    });
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.onResize);
  },
};
</script>
