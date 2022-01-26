import { createRouter, createWebHistory } from "vue-router"
import Home from './pages/Home.vue'
import Clients from './pages/Clients.vue'
import Resume from './pages/Resume.vue'
import Bookings from './pages/Bookings.vue'
import Add from './pages/Add.vue'
import Update from './pages/Update.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/clients', component: Clients },
    { path: '/resume', component: Resume },
    { path: '/booking', component: Bookings },
    { path: '/add', component: Add },
    { path: '/update', component: Update },
]
    
const router = createRouter({
    history : createWebHistory(),
    routes : routes
})
    
export default router;
