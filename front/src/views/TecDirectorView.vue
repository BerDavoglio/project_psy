<template>
  <div class="profissional-view"
       className="font-mono">
    <div className="max-w-[40rem] px-2 m-auto">
      <div :className="['flex ' + (isCell ? 'flex-col' : '')]">
        <div :className="['' + (isCell ? 'm-auto' : '')]">
          <img src="@/assets/images/dra_gisele.jpg"
               alt=''
               className="w-[15rem] h-[20rem] bg-blue-400 object-cover" />
        </div>
        <div>
          <div className="text-2xl font-bold">
            Dra. Gisele Romagna (Diretora Técnica):
          </div>
          <div className="text-justify max-w-[27rem]">
            <div className="my-2 pl-4">
              <span style="font-size: 0.1px; margin-right: 2rem;">
                .
              </span>A trajetória da Dra. Gisele Romagna Stocco (CRM: 16278/PR), psiquiatra graduada pela Universidade
              Federal do Paraná e especialista em Medicina Forense, está marcada por uma busca incansável para fornecer
              um cuidado
              integral e personalizado para cada pessoa que busca ajuda na Angimedi.
            </div>
          </div>
        </div>
      </div>
      <div className="text-2xl font-bold">
        Equipe Médica:
      </div>
      <div className="text-justify">
        <div className="my-2">
          <span style="font-size: 0.1px; margin-right: 2rem;">
            .
          </span>O objetivo central da Equipe Angimedi é garantir que cada paciente encontre não apenas o tratamento
          adequado
          para suas necessidades psiquiátricas, mas também um ambiente acolhedor e de apoio, onde se sintam
          compreendidos
          e valorizados.
        </div>
        <div className="my-2">
          <span style="font-size: 0.1px; margin-right: 2rem;">
            .
          </span>Assim, a história da Angimedi Clínica Médica é moldada por um compromisso constante com a excelência no
          atendimento psiquiátrico, impulsionado pelo desejo genuíno de fazer a diferença na vida daqueles que buscam
          ajuda para superar seus desafios mentais e emocionais.
        </div>
      </div>
    </div>
    <div className="h-10" />
  </div>
</template>

<script>
export default {
  name: 'TecDirectorView',

  data() {
    return {
      isCell: false,
      windowWidth: window.innerWidth,
    };
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    },
    verifyResize(i) {
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
  async beforeMount() {
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
