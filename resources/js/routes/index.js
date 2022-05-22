import { createWebHashHistory, createRouter } from "vue-router";
import Welcome from '../components/Welcome'
import Increment from '../components/Increment'
const routes = [
    {
        path: '/',
        name: 'home',
        component: Welcome
    },
    {
        path: '/welcome',
        name: 'welcome',
        component: Increment
    }
]

const router = createRouter({
    mode: 'hash',
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  })

export default router