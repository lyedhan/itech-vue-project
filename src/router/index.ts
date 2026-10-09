import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import TutorialView from '../views/TutorialView.vue'
import TutorialView2 from '../views/Tutorial2View.vue'
import SlidesView from '../views/SlidesView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView },
    { path: '/tutorial', component: TutorialView },
    { path: '/tutorial2', component: TutorialView2 },
    { path: '/slides', component: SlidesView },
  ],
})

export default router
