// import AboutView from '../views/AboutView.vue';
// import ProfissionalView from '../views/ProfissionalView.vue';
// import AdminEmployeeView from '../views/AdminEmployeeView.vue';
// import AdminNewEmployeeView from '../views/AdminNewEmployeeView.vue';

import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import UserPerfilView from '../views/UserPerfilView.vue';
import AdminNewBookView from '../views/AdminNewBookView.vue';
import AdminPerfilView from '../views/AdminPerfilView.vue';
import LoginView from '../views/LoginView.vue';
import TecDirectorView from '../views/TecDirectorView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/tec-director',
    name: 'tech-director',
    component: TecDirectorView,
  },
  {
    path: '/perfil',
    name: 'perfil',
    component: UserPerfilView,
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminPerfilView,
  },
  {
    path: '/admin/book/new/:id?',
    name: 'admin-new-book',
    component: AdminNewBookView,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: AboutView,
  // },
  // {
  //   path: '/admin/employee',
  //   name: 'admin-employee',
  //   component: AdminEmployeeView,
  // },
  // {
  //   path: '/admin/employee/new/:id?',
  //   name: 'admin-new-employee',
  //   component: AdminNewEmployeeView,
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 };
  },
  routes,
});

router.beforeEach((to, from, next) => {
  // eslint-disable-next-line no-undef
  document.title = `Angimedi | ${to.name.charAt(0).toUpperCase() + to.name.slice(1)}`;
  next();
});

export default router;
