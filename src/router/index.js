import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home.vue'
import Movie from '../views/movie.vue'
import Book from '../views/book.vue'
import Game from '../views/game.vue'
import Music from '../views/music.vue'
import User from '../views/user.vue'
import NewIt from '../views/newit.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/movie',
    name: 'Movie',
    component: Movie
  },
  {
    path: '/book',
    name: 'Book',
    component: Book
  },
  {
    path: '/game',
    name: 'Game',
    component: Game
  },
  {
    path: '/music',
    name: 'Music',
    component: Music
  },
  {
    path: '/user',
    name: 'User',
    component: User
  },
  {
    path: '/newit',
    name: 'NewIt',
    component: NewIt
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
