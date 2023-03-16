import { createRouter, createWebHistory } from 'vue-router'
import Auth from '../views/AuthPage.vue'
import EventsPage from '../views/EventsPage.vue'
import AddEventPage from '../views/AddEventPage'
import store from '../store/index.js'
const routes = [
  {
    path: '/',
    component: Auth,
    meta:{auth:false}
  },
  {
    path: '/auth',
    component: Auth,
    name: 'auth',
    meta:{auth:false}
  },
  {
    path: '/events',
    component: EventsPage,
    meta:{auth:true}
  },
  {
    path: '/newevent',
    component: AddEventPage,
    meta:{auth:true}
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from, next) => {
  if(!store._modules.root._children.userStore.state.name && to.meta.auth){
    next({name:'auth'});
  }
  else{
    next();
  }
 

})

export default router
