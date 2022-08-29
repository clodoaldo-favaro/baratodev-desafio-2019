<template>
	<div class="main-container">
		<section v-for="(ofertasPorCategoria, categoria) in ofertas" :key="categoria">
			<h2 class="text-2xl font-bold capitalize mb-4 mt-4">{{ categoria }}</h2>
			<ul class="flex flex-wrap justify-between">
				<li class="min-w-364 my-4" v-for="oferta in ofertasPorCategoria" :key="oferta.id">
					<oferta-item :oferta="oferta"></oferta-item>
				</li>
			</ul>
		</section>

	</div>
</template>

<script>
import OfertaItem from '../../components/ofertas/OfertaItem.vue';
export default {
	components: {
		OfertaItem
	},
	data() {
		return {
			ofertas: {}
		}
	},
	methods: {
		carregarCategorias() {
			this.categorias = {
				'entretenimento': 0,
				'hoteis': 0,
				'gastronomia': 0
			}
		},
		carregarOfertas() {
			const ofertasFetched = [
				{
					id: 1, 
					empresa: 'Hotel Long Beach',
					descricao: 'Canoa Quebrada: 2 Diárias em quarto Luxo ou Standard a partir de R$350',
					preco: 350.00,
					categoria: 'hoteis',
					imagens: [
						'https://static.baratocoletivo.com.br/2022/0530/oferta_16539447543936_1.jpeg',
						'https://static.baratocoletivo.com.br/2022/0530/g_c1b7b461f4.jpg',
						'https://static.baratocoletivo.com.br/2022/0530/g_4d17226fc1.jpg',
						'https://static.baratocoletivo.com.br/2022/0530/g_d08b2c73ae.jpg'
					]
				},
				{
					id: 2, 
					empresa: 'Acqua Beach Cumbuco',
					descricao: 'Cumbuco: 2 Passaportes para o Parque Aquático + Almoço!',
					preco: 109.90,
					categoria: 'entretenimento',
					imagens: [
						'https://static.baratocoletivo.com.br/2022/0817/oferta_16607588013556_1.jpg',
						'https://static.baratocoletivo.com.br/2022/0817/g_79cf939265.jpg',
						'https://static.baratocoletivo.com.br/2022/0817/g_a71c557d12.jpg',
						'https://static.baratocoletivo.com.br/2022/0817/g_042211e1f5.jpg'
					]
				},
				{
					id: 3, 
					empresa: 'MariMari Guloseimas',
					descricao: 'Hamburguinhos + Pães Delícia + Hot Dogs p/ até 20 pessoas por R$159!',
					preco: 159.00,
					categoria: 'gastronomia',
					imagens: [
						'https://static.baratocoletivo.com.br/2022/0701/oferta_16566447387664_oferta%202.jpg',
						'https://static.baratocoletivo.com.br/2022/0701/g_818383bdaf.jpg',
						'https://static.baratocoletivo.com.br/2022/0701/g_6b7de14840.jpg',
						'https://static.baratocoletivo.com.br/2022/0701/g_64e1e12b7c.jpg'
					]
				},
				{
					id: 4, 
					empresa: 'Hotel Platô Lagoinha',
					descricao: 'Diárias para 2 adultos e 1 criança + café a partir de R$199!',
					preco: 199.00,
					categoria: 'hoteis',
					imagens: [
						'https://static.baratocoletivo.com.br/2022/0728/oferta_16590375678390_1.jpeg',
						'https://static.baratocoletivo.com.br/2022/0728/g_a964d91cc0.jpg',
						'https://static.baratocoletivo.com.br/2022/0728/g_bde82e9a90.jpg',
						'https://static.baratocoletivo.com.br/2022/0728/g_f84f3de208.jpg'
					]
				},
				{
					id: 5, 
					empresa: 'Pousada Nascer do Sol',
					descricao: 'Jeri: 2 diárias para 2 adultos e 1 criança + café da manhã!',
					preco: 204.00,
					categoria: 'hoteis',
					imagens: [
						'https://static.baratocoletivo.com.br/2022/0107/oferta_16415828277023_1.jpg',
						'https://static.baratocoletivo.com.br/2022/0107/g_97c1915249.jpg',
						'https://static.baratocoletivo.com.br/2022/0107/g_ed539765dd.jpg',
						'https://static.baratocoletivo.com.br/2022/0107/g_e43f909778.jpg'
					]
				},
				{
					id: 6, 
					empresa: 'Barraca Atlantidz',
					descricao: '4 opções prato + Pulseira p/ o parque Aquático a partir de R$99,90!',
					preco: 99.90,
					categoria: 'entretenimento',
					imagens: [
						'https://static.baratocoletivo.com.br/2022/0818/oferta_16608359622866_1.jpg',
						'https://static.baratocoletivo.com.br/2022/0818/g_26d37d5c4b.jpg',
						'https://static.baratocoletivo.com.br/2022/0818/g_95722eb713.jpg',
						'https://static.baratocoletivo.com.br/2022/0818/g_c795630068.jpg'
					]
				},
				{
					id: 7, 
					empresa: 'Carneiro do Ordones Varjota',
					descricao: 'Parmegiana de Carne Bovina ou Carne de Sol Sertaneja a partir de R$50!',
					preco: 50.00,
					categoria: 'gastronomia',
					imagens: [
						'https://static.baratocoletivo.com.br/2022/0607/oferta_16546192043752_1.jpg',
						'https://static.baratocoletivo.com.br/2022/0607/g_865f0acb38.jpg',
						'https://static.baratocoletivo.com.br/2022/0607/g_d7c0f6763a.jpg',
						'https://static.baratocoletivo.com.br/2022/0607/g_e0487c0574.jpg',
						'https://static.baratocoletivo.com.br/2022/0607/g_7f6cedea9c.jpg'
					]
				},
				{
					id: 8, 
					empresa: 'Chico do Caranguejo Cumbuco',
					descricao: 'Tilápia ou Escondidinho de Carne de Sol + 2 caipirinhas ou Sirigado!',
					preco: 99.90,
					categoria: 'gastronomia',
					imagens: [
						'https://static.baratocoletivo.com.br/2021/0715/oferta_16263784448290_destaque.jpg',
						'https://static.baratocoletivo.com.br/2021/0715/g_b9d3d1dd2a.jpg',
						'https://static.baratocoletivo.com.br/2021/0715/g_92f7efceb9.jpg',
						'https://static.baratocoletivo.com.br/2021/0715/g_42690dee83.jpg',
						'https://static.baratocoletivo.com.br/2021/0715/g_c8a0b8d4d6.jpg'
					]
				},
				{
					id: 9, 
					empresa: 'Complexo Turístico Mirante das Gamboas',
					descricao: 'Aracati: Diárias para 2 adultos e 1 criança + café a partir de R$299',
					preco: 299.00,
					categoria: 'hoteis',
					imagens: [
						'https://static.baratocoletivo.com.br/2022/0823/oferta_16612642352199_oferta_15819610059735_destaque.jpg',
						'https://static.baratocoletivo.com.br/2022/0823/g_bf256c8d0d.jpg',
						'https://static.baratocoletivo.com.br/2022/0823/g_beadbe4012.jpg',
						'https://static.baratocoletivo.com.br/2022/0823/g_43c9bd3653.jpg',
						'https://static.baratocoletivo.com.br/2022/0823/g_dc8e51a41c.jpg'
					]
				},
				{
					id: 10, 
					empresa: 'La Pasta Ristorante - Parquelândia',
					descricao: 'Rodízio Completo de Massas, Pizzas e Esfirras de R$49,90 por R$42,90',
					preco: 42.90,
					categoria: 'gastronomia',
					imagens: [
						'https://static.baratocoletivo.com.br/2022/0620/oferta_16557464339289_capadddd.jpg',
						'https://static.baratocoletivo.com.br/2022/0620/g_c1d7ec5fbd.jpg',
						'https://static.baratocoletivo.com.br/2022/0620/g_e3c8f8b89d.jpg',
						'https://static.baratocoletivo.com.br/2022/0620/g_47bf49c978.jpg',
						'https://static.baratocoletivo.com.br/2022/0620/g_0918bbfede.jpg'
					]
				},
				{
					id: 11, 
					empresa: 'Apoena Ecopark',
					descricao: 'Ingresso Conhecer + Visita avião + Casa de Pedra e mais por R$12,90!',
					preco: 12.90,
					categoria: 'entretenimento',
					imagens: [
						'https://static.baratocoletivo.com.br/2022/0802/oferta_16594625705760_apoena.jpg',
						'https://static.baratocoletivo.com.br/2022/0607/g_29c6ae5804.jpg',
						'https://static.baratocoletivo.com.br/2022/0607/g_f0de30fa08.jpg',
						'https://static.baratocoletivo.com.br/2022/0607/g_9e81208c6a.jpg',
						'https://static.baratocoletivo.com.br/2022/0607/g_451d0e5e6f.jpg'
					]
				},
				{
					id: 12,
					empresa: 'Engenhoca Parque',
					descricao: 'Ingresso + Pulseira aventura de R$84 por R$52,90 no Engenhoca Parque!',
					preco: 52.90,
					categoria: 'entretenimento',
					imagens: [
						'https://static.baratocoletivo.com.br/2022/0805/oferta_16597237586014_1.jpg',
						'https://static.baratocoletivo.com.br/2022/0805/g_c89d70916f.jpg',
						'https://static.baratocoletivo.com.br/2022/0805/g_8bd183ed95.jpg',
						'https://static.baratocoletivo.com.br/2022/0805/g_6a2a52da58.jpg',
						'https://static.baratocoletivo.com.br/2022/0805/g_ad19ad9fcf.jpg'
					]
				},
				{
					id: 13,
					empresa: 'Estilo Praia',
					descricao: 'Tilápia completa + 02 Águas de Coco + 01 pulseira de acesso à piscina por R$69,90',
					preco: 69.90,
					categoria: 'gastronomia',
					imagens: [
						'https://static.baratocoletivo.com.br/2022/0819/oferta_16609315185658_Novo%20Projetooo%20%281%29.jpg',
						'https://static.baratocoletivo.com.br/2022/0819/g_0103e87a70.jpg',
						'https://static.baratocoletivo.com.br/2022/0819/g_84350f0c3c.jpg',
						'https://static.baratocoletivo.com.br/2022/0819/g_f8af51a0a6.jpg',
						'https://static.baratocoletivo.com.br/2022/0819/g_dbb47d105b.jpg'
					]
				}
			];

			const ofertas = {};

			ofertasFetched.forEach((oferta) => {
				if (!(oferta.categoria in ofertas)) {
					ofertas[oferta.categoria] = [];
				}
				ofertas[oferta.categoria].push(oferta);
			});
			this.ofertas = ofertas;
		}
	},
	created() {
		this.carregarOfertas();
	}
}
</script>

<style scoped>
	.main-container {
		padding: 0 8px;
		margin: 6rem 0;
	}

	li {
		max-width: 100%;
	}

	@media screen and (min-width: 640px) {
		.main-container {
			padding: 0 64px;
		}
		
		li {
			max-width: 22%;
		}
	}
</style>