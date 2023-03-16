import { createStore } from 'vuex'
import {userStore} from "./userStore"
import {eventsStore} from "./eventsStore"
export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    userStore:userStore,
    eventsStore:eventsStore,
  }
})
