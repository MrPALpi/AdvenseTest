import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import style from './assets/styles.css'

const app = createApp(App);
app.use(store)
.use(router)
.mount('#app')
