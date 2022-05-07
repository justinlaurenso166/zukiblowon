import { createApp } from 'vue'
import App from './App.vue'
import "../src/assets/css/style.css"
import Router from "../src/router/index"

createApp(App).use(Router).mount('#app')