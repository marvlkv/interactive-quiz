import { createRouter, createWebHistory } from 'vue-router'
import StartPage from '../components/StartPage.vue'
import InfoPage from '../components/InfoPage.vue'
import QuizPage from '../components/QuizPage.vue'
import ResultPage from '../components/ResultPage.vue'

const routes = [
  { path: '/', component: StartPage },
  { path: '/info', component: InfoPage },
  { path: '/quiz', component: QuizPage },
  { path: '/result', component: ResultPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router