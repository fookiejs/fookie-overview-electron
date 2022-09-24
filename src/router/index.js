import {createRouter , createWebHashHistory} from 'vue-router'
import Home from '../view/Home.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            name:"Home",
            path: '/',
            component: Home
        },
    ],
})

export default router