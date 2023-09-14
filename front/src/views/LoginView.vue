<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div class="login-view">
    <div className="mx-auto my-36">
      <div className="max-w-[32rem] bg-blue-200 m-auto rounded-xl p-4">
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
        <div className="grid grid-cols-2 mx-10 my-5">
          <div className="mx-auto w-24 p-3
            rounded-xl text-white
            cursor-pointer bg-green-500 hover:bg-green-700"
               @click="login()">
            {{ isLogin ? 'Entrar' : 'Cadastrar' }}
          </div>
          <div v-if="isLogin"
               className="mx-auto w-24 p-3
            rounded-xl text-white
            cursor-pointer bg-yellow-500 hover:bg-yellow-700"
               @click="isLogin = !isLogin">
            Registrar
          </div>
          <div v-else
               className="mx-auto w-24 p-3
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

<script setup>
import { useLoginStore } from '../store/store';
</script>

<script>
export default {
  name: 'LoginPerfilView',
  data() {
    return {
      email: '',
      password: '',
      isLogin: true,
    };
  },
  methods: {
    async login() {
      const store = useLoginStore();
      await store.requestLogin(this.email, this.password);
      if (store.getRole === 'admin') {
        this.$router.push({ name: 'admin' });
      }
      if (store.getRole === 'user') {
        this.$router.push({ name: 'perfil' });
      }
    },
    goPage(route) {
      this.$router.push({ name: route });
    },
  },
};
</script>
