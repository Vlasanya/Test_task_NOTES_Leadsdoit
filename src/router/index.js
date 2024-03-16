
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomePage.vue';
import Favorites from '../views/FavoritesPage.vue';
import NewNote from '../views/NewNote.vue';
import EditNote from '../views/EditNote.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: Favorites
  },
  {
    path: '/new',
    name: 'NewNote',
    component: NewNote,
  },
  {
    path: '/edit/:id',
    name: 'EditNote',
    component: EditNote,
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
