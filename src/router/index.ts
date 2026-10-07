import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import RefExampleView from '../views/RefExampleView.vue'
import TutorialView from '../views/TutorialView.vue'
import SlidesView from '../views/SlidesView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView },
    { path: '/refType', component: RefExampleView },
    { path: '/tutorial', component: TutorialView },
    { path: '/slides', component: SlidesView },
  ],
})

export default router
