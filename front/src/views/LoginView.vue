<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div class="login-view">
    <div className="mx-auto my-36">
      <div className="w-[32rem] bg-blue-200 m-auto rounded-xl p-4">
        <div className="text-bold text-[3rem] m-4">
          {{ isLogin ? 'Login' : 'Cadastrar' }}
        </div>
        <div v-if="isLogin">
          <input v-model="email"
                 placeholder="E-mail"
                 className="w-[90%] h-10 rounded-lg p-2 mb-2">
          <input v-model="password"
                 placeholder="Senha"
                 className="w-[90%] h-10 rounded-lg p-2 mb-2">
        </div>
        <div v-else>
          <input v-model="user.name"
                 placeholder="Nome"
                 className="w-[90%] h-10 rounded-lg p-2 mb-2">
          <input v-model="user.email"
                 placeholder="E-mail"
                 className="w-[90%] h-10 rounded-lg p-2 mb-2">
          <input v-model="user.birth"
                 placeholder="Data de Nascimento"
                 className="w-[90%] h-10 rounded-lg p-2 mb-2">
          <input v-model="user.convenio"
                 placeholder="Convênio"
                 className="w-[90%] h-10 rounded-lg p-2 mb-2">
          <input v-model="user.password"
                 placeholder="Senha"
                 className="w-[90%] h-10 rounded-lg p-2 mb-2">
        </div>
        <div className="grid grid-cols-2 mx-20 my-5">
          <div className="mx-auto w-36 p-3
            rounded-xl text-white
            cursor-pointer bg-green-500 hover:bg-green-700"
            @click="login()">
            {{ isLogin ? 'Entrar' : 'Cadastrar' }}
          </div>
          <div v-if="isLogin"
               className="mx-auto w-36 p-3
            rounded-xl text-white
            cursor-pointer bg-yellow-500 hover:bg-yellow-700"
               @click="isLogin = !isLogin">
            Registrar
          </div>
          <div v-else
               className="mx-auto w-36 p-3
            rounded-xl text-white
            cursor-pointer bg-yellow-500 hover:bg-yellow-700"
               @click="isLogin = !isLogin">
            Login
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPerfilView',
  data() {
    return {
      email: '',
      password: '',
      user: {
        name: '',
        email: '',
        password: '',
        birth: '',
        convenio: '',
      },
      isLogin: true,
    };
  },
  methods: {
    login() {
      if (this.email === 'user@gmail.com') {
        this.goPage('perfil');
      } else if (this.email === 'admin@gmail.com') {
        this.goPage('admin');
      }
    },
    goPage(route) {
      this.$router.push({ name: route });
    },
  },
};
</script>
