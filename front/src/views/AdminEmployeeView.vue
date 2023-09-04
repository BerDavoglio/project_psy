<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div class="admin-employee-view">
    <div className="mx-auto">
      <div>
        <div className="text-xl font-bold">
          Gerenciamento de Funcionários
        </div>
        <div className="py-2 px-8 m-2 max-w-[56rem] mx-auto rounded-lg cursor-pointer bg-green-400"
             @click="goPage('admin-new-employee')">
          Criar Novo
        </div>
      </div>
      <div v-for="obj in this.list"
           v-bind:key="obj">
        <div className="max-w-[56rem] h-48 bg-blue-200
          rounded-3xl my-4 shadow-xl shadow-black/30
          grid grid-cols-6 mx-auto">
          <img className="m-auto rounded-full h-28 w-28"
               :src="obj.image"
               alt="" />
          <div className="col-span-4 m-2">
            <div>
              <div className="font-bold text-xl">
                {{ obj.name }}
              </div>
              <div className="font-bold">
                {{ obj.speciality }}
              </div>
            </div>
            <text-clamp :text='obj.description'
                        :max-lines='5' />
          </div>
          <div className="flex flex-col place-content-center">
            <div className="py-1 px-8 m-2 rounded-lg cursor-pointer bg-yellow-400"
                 @click="goPage('admin-new-employee')">
              Editar
            </div>
            <div className="py-1 px-8 m-2 rounded-lg cursor-pointer bg-red-400">
              Apagar
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminEmployeeView',
  components: {
  },
  data() {
    return {
      list: [
        {
          name: 'Jorge Gabriel',
          speciality: 'Psiquiatra',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In ea aspernatur voluptatibus itaque illum eaque dolore minima fuga natus! Possimus dignissimos, dolor quos repellat odio commodi totam omnis non eum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis delectus iusto aut accusantium necessitatibus ut voluptas aliquid soluta maiores fuga rerum, illum minima corrupti quasi non id voluptatibus. Dolorem, dolore?',
          image: 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png',
        },
        {
          name: 'Cleiton da Silva',
          speciality: 'Psicologo/Neuropsicologo',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In ea aspernatur voluptatibus itaque illum eaque dolore minima fuga natus! Possimus dignissimos, dolor quos repellat odio commodi totam omnis non eum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis delectus iusto aut accusantium necessitatibus ut voluptas aliquid soluta maiores fuga rerum, illum minima corrupti quasi non id voluptatibus. Dolorem, dolore?',
          image: 'https://img.freepik.com/vetores-premium/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg',
        },
        {
          name: 'Lorante Jus Carpinteira',
          speciality: 'Psicologo',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In ea aspernatur voluptatibus itaque illum eaque dolore minima fuga natus! Possimus dignissimos, dolor quos repellat odio commodi totam omnis non eum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis delectus iusto aut accusantium necessitatibus ut voluptas aliquid soluta maiores fuga rerum, illum minima corrupti quasi non id voluptatibus. Dolorem, dolore?',
          image: 'https://img.freepik.com/vetores-premium/retrato-feminino-foto-de-perfil-de-mulher-avatar-de-cor_81894-6400.jpg?w=2000',
        },
        {
          name: 'Amanda',
          speciality: 'Psiquiatra',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In ea aspernatur voluptatibus itaque illum eaque dolore minima fuga natus! Possimus dignissimos, dolor quos repellat odio commodi totam omnis non eum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis delectus iusto aut accusantium necessitatibus ut voluptas aliquid soluta maiores fuga rerum, illum minima corrupti quasi non id voluptatibus. Dolorem, dolore?',
          image: 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png',
        },
      ],
    };
  },
  methods: {
    goPage(route) {
      this.$router.push({ name: route });
    },
  },
};
</script>
