import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

const myV3App = createApp(App)

myV3App.use(store)

myV3App.mount('#app')
