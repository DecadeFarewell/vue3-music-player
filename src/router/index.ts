import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/index',
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('../views/home/index.vue'),
  },
  {
    path: '/music-player',
    name: 'MusicPlayer',
    component: () => import('../views/music-player/index.vue'),
  },
  {
    path: '/*',
    name: 'not-found',
    component: () => import('../views/404/index.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
