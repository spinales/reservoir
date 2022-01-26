import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from "./router"
import '@themesberg/flowbite';


createApp(App).use(router).mount('#app')