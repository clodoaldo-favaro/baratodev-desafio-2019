import { createRouter, createWebHistory } from "vue-router";
import OfertasList from './pages/ofertas/OfertasList.vue';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/', redirect: '/ofertas' },
		{ path: '/ofertas', component: OfertasList }
	]
});

export default router;