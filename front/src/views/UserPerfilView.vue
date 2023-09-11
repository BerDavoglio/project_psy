<template>
  <div class="user-perfil-view">
    <div className="m-auto">
      <div>Usuário: <strong className="text-xl">{{ user.name }}</strong></div>
      <div className="my-4">
        <div>Você tem</div>
        <div className="text-2xl"><strong>{{ conquest.points }}</strong></div>
        <div>pontos</div>
      </div>
      <div className="max-w-[30rem] m-auto">
        <div class="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
          <div class="bg-blue-200 h-4 rounded-full"
               style="width: 30%">
            <div className="text-[0.7rem]">{{ conquest.name }}</div>
          </div>
        </div>
      </div>
      <div className="my-4">
        <div className="w-80 py-6 mx-auto
          flex place-items-center
          rounded-xl shadow-lg shadow-black/30">
          <div className="w-full">
            Conquista Anterior:
            <br />
            <strong className="line-through">{{ listConquest[1].name }}</strong>
            <br />
            <strong className="line-through">{{ listConquest[1].points }}</strong>
          </div>
          <div className="w-full">
            Conquista a Seguir:
            <br />
            <strong>{{ listConquest[2].name }}</strong>
            <br />
            <strong>{{ listConquest[2].points }}</strong>
          </div>
        </div>
      </div>
      <!-- eslint-disable-next-line vuejs-accessibility/click-events-have-key-events -->
      <div @click="showTip = !showTip"
           className="
        underline cursor-pointer
        text-blue-600 hover:text-blue-800">
        Como conseguir pontos?
      </div>
      <div v-if="showTip">
        <div className="w-80 bg-blue-200 mx-auto
          rounded-xl shadow-lg shadow-black/30
          p-4">
          <div className="text-lg font-bold">Para conseguir mais pontos, é necessário:</div>
          <li>Marcar Consultas periodicamente</li>
          <li>Comprar com os Cupons da Clínica</li>
        </div>
      </div>
      <div className="my-4">
        <div>Próxima Consulta:</div>
        <div className="w-72 h-24 bg-blue-200 mx-auto
          flex place-items-center
          rounded-xl shadow-lg shadow-black/30">
          <div className="w-full">Dia: <br /><strong>{{ consulta.date }}</strong></div>
          <div className="w-full">Doutor(a): <br /><strong>{{ consulta.dr }}</strong></div>
        </div>
      </div>
      <div className="mx-auto my-10">
        <div className="text-bold text-xl">Informações do Usuário:</div>
        <div className="max-w-[32rem] bg-blue-200 m-auto rounded-xl p-4">
          <input v-model="user.name"
                 placeholder="Nome"
                 className="w-[90%] h-8 rounded-lg p-2 mb-2">
          <input v-model="user.email"
                 placeholder="E-mail"
                 className="w-[90%] h-8 rounded-lg p-2 mb-2">
          <input v-model="user.address"
                 placeholder="Endereço"
                 className="w-[90%] h-8 rounded-lg p-2 mb-2">
          <input v-model="user.birth"
                 placeholder="Aniversário"
                 className="w-[90%] h-8 rounded-lg p-2 mb-2">
          <input v-model="user.cpf"
                 placeholder="CPF"
                 className="w-[90%] h-8 rounded-lg p-2 mb-2">
          <div className="mx-auto w-36 p-1
            rounded-xl text-white
            cursor-pointer bg-green-500 hover:bg-green-700">
            Salvar
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserPerfilView',
  data() {
    return {
      listConquest: [
        {
          name: 'Conquista 1',
          points: 1000,
        },
        {
          name: 'Conquista 2',
          points: 2000,
        },
        {
          name: 'Conquista 3',
          points: 3000,
        },
        {
          name: 'Conquista 4',
          points: 4000,
        },
        {
          name: 'Conquista 5',
          points: 5000,
        },
      ],
      user: {
        name: 'Joaquina da Silvinha',
        email: 'joaquina123@gmail.com',
        birth: '23/09/1998',
        address: 'Rua AAAAAAAA, 1234',
        cpf: '12312312300',
      },
      conquest: {
        points: 2349,
        name: 'Conquista 2',
      },
      consulta: {
        date: '25/08/2023',
        dr: 'Dra Juliana',
      },
      showTip: false,
    };
  },
};
</script>
