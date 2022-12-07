
import { createRouter, createWebHashHistory } from "vue-router";
import Clientes from '../components/Clientes.vue';

const routes = [
{
    path: '/client',
    name:'Clientes',
    component: Clientes
    // component: () => import('../components/Clientes.vue') 
}

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router