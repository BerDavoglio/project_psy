import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ProfissionalView from '../views/ProfissionalView.vue';
import UserPerfilView from '../views/UserPerfilView.vue';
import AdminEmployeeView from '../views/AdminEmployeeView.vue';
import AdminNewEmployeeView from '../views/AdminNewEmployeeView.vue';
import AdminNewBookView from '../views/AdminNewBookView.vue';
import AdminPerfilView from '../views/AdminPerfilView.vue';
import LoginView from '../views/LoginView.vue';

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
    component: AdminPerfilView,
  },
  {
    path: '/admin/employee',
    name: 'admin-employee',
    component: AdminEmployeeView,
  },
  {
    path: '/admin/book/new/:id?',
    name: 'admin-new-book',
    component: AdminNewBookView,
  },
  {
    path: '/admin/employee/new/:id?',
    name: 'admin-new-employee',
    component: AdminNewEmployeeView,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 };
  },
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `Angimedi | ${to.name.charAt(0).toUpperCase() + to.name.slice(1)}`;
  next();
});

export default router;
