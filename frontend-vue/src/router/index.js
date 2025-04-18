import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Home from '../views/Home.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
