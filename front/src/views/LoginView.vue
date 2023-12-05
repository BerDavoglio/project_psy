<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div class="login-view">
    <div className="mx-auto my-36">
      <div className="max-w-[32rem] bg-blue-200 m-auto rounded-xl p-4 shadow-2xl">
        <div className="text-bold text-[3rem] m-4">
          {{ isLogin ? 'Login' : 'Cadastrar' }}
        </div>
        <div v-if="isLogin">
          <div className="w-full border-[0.1rem] border-gray-400 bg-white rounded-[0.3rem] mb-2">
            <input
              v-model="email"
              placeholder="E-mail"
              className="h-10 w-full px-3">
          </div>
          <div className="w-full border-[0.1rem] border-gray-400 bg-white rounded-[0.3rem] mb-2">
            <input
              v-model="password"
              placeholder="Senha"
              type='password'
              className="h-10 w-full px-3">
          </div>
        </div>
        <div v-else>
          <div
            className="w-[90%] m-auto mb-2
          border-[0.1rem] border-gray-400 bg-white rounded-[0.3rem]">
            <input
              v-model="user.name"
              placeholder="Nome"
              className="h-10 w-full px-3">
          </div>
          <div
            className="w-[90%] m-auto mb-2
          border-[0.1rem] border-gray-400 bg-white rounded-[0.3rem]">
            <input
              v-model="user.email"
              placeholder="E-mail"
              className="h-10 w-full px-3">
          </div>
          <div
            className="w-[90%] m-auto mb-2
          border-[0.1rem] border-gray-400 bg-white rounded-[0.3rem]">
            <input
              v-model="user.address"
              placeholder="Endereço"
              className="h-10 w-full px-3">
          </div>
          <!-- COLOCAR MASCARA NO CELULAR -->
          <div
            className="w-[90%] m-auto mb-2
          border-[0.1rem] border-gray-400 bg-white rounded-[0.3rem]">
            <input
              v-model="user.cellphone"
              placeholder="Telefone"
              className="h-10 w-full px-3">
          </div>
          <div className="w-[90%] m-auto">
            <VueDatePicker
              v-model="user.birth"
              format="dd/MM/yyyy"
              :enable-time-picker="false"
              input-class-name="h-10 rounded-[0.3rem]
                           border-[0.1rem] border-gray-400" />
          </div>
          <!-- COLOCAR MASCARA NO CPF -->
          <div
            className="w-[90%] m-auto my-2
          border-[0.1rem] border-gray-400 bg-white rounded-[0.3rem]">
            <input
              v-model="user.cpf"
              placeholder="CPF"
              className="h-10 w-full px-3">
          </div>
          <div
            className="w-[90%] m-auto mb-2
          border-[0.1rem] border-gray-400 bg-white rounded-[0.3rem]">
            <input
              v-model="user.password"
              placeholder="Senha"
              type="password"
              className="h-10 w-full px-3">
          </div>
        </div>
        <div className="grid grid-cols-2 mx-10 my-5">
          <div
            className="mx-auto w-24 p-3
            rounded-xl text-white
            cursor-pointer bg-green-500 hover:bg-green-700"
            @click="isLogin ? login() : signin()">
            {{ isLogin ? 'Entrar' : 'Cadastrar' }}
          </div>
          <div
            v-if="isLogin"
            className="mx-auto w-24 p-3
            rounded-xl text-white
            cursor-pointer bg-yellow-500 hover:bg-yellow-700"
            @click="isLogin = !isLogin">
            Registrar
          </div>
          <div
            v-else
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
      user: {
        name: '',
        email: '',
        address: '',
        cellphone: '',
        birth: '',
        cpf: '',
        password: '',
      },
      isLogin: true,
    };
  },
  methods: {
    async login() {
      const store = useLoginStore();
      await store.requestLogin(
        this.email,
        this.password,
        (destiny) => {
          this.goPage(destiny);
        },
      ).then(() => {
        if (store.getRole === 'admin') {
          this.goPage('admin');
        } else if (store.getRole === 'user') {
          this.goPage('perfil');
        }
      });
    },
    async signin() {
      const store = useLoginStore();
      await store.createPerfil(
        this.user,
        (destiny) => {
          this.goPage(destiny);
        },
      );
    },
    goPage(route) {
      this.$router.push({ name: route });
    },
  },
  async beforeMount() {
    const loginStore = useLoginStore();

    if (loginStore.getRole === 'admin') {
      this.goPage('admin');
    } else if (loginStore.getRole === 'user') {
      this.goPage('perfil');
    }
  },
};
</script>

<style>
.dp__theme_light {
  --dp-background-color: #ffffff;
  --dp-text-color: #000000;
  --dp-hover-color: #f3f3f3;
  --dp-hover-text-color: #212121;
  --dp-hover-icon-color: #959595;
  --dp-primary-color: #81c0ff;
  --dp-primary-text-color: #959595;
  --dp-secondary-color: #c0c4cc;
  --dp-border-color: #ddd;
  --dp-menu-border-color: #ddd;
  --dp-border-color-hover: #aaaeb7;
  --dp-disabled-color: #f6f6f6;
  --dp-scroll-bar-background: #f3f3f3;
  --dp-scroll-bar-color: #959595;
  --dp-success-color: #76d275;
  --dp-success-color-disabled: #a3d9b1;
  --dp-icon-color: #959595;
  --dp-danger-color: #ff6f60;
  --dp-highlight-color: rgba(25, 118, 210, 0.1);
}
</style>
