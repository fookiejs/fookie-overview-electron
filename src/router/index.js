import {createRouter , createWebHashHistory} from 'vue-router'
import Home from '../view/Home.vue'
import Login from '../view/Login.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            name:"home",
            path: '/api',
            component: Home
        },
        {
            name:"login",
            path: '/login',
            component: Login
        },
    ],
})

export default router