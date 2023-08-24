import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ProfissionalView from '../views/ProfissionalView.vue';
import UserPerfilView from '../views/UserPerfilView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/profissionals',
    name: 'profissionals',
    component: ProfissionalView,
  },
  {
    path: '/perfil',
    name: 'perfil',
    component: UserPerfilView,
  },
  {
    path: '/admin',
    name: 'admin',
    component: UserPerfilView,
  },
  {
    path: '/login',
    name: 'login',
    component: UserPerfilView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `Angimed | ${to.name.charAt(0).toUpperCase() + to.name.slice(1)}`;
  next();
});

export default router;
