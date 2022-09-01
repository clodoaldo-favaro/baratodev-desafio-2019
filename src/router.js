import { createRouter, createWebHistory } from "vue-router";
import OfertasList from './pages/ofertas/OfertasList.vue';
import CarrinhoCompras from './pages/carrinho/CarrinhoCompras.vue';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/', redirect: '/ofertas' },
		{ path: '/ofertas', component: OfertasList },
		{ path: '/carrinho', component: CarrinhoCompras }
	]
});

export default router;