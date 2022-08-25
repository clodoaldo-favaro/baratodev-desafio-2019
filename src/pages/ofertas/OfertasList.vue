<template>
	<div class="container">
		<section v-for="(ofertasPorCategoria, categoria) in ofertas" :key="categoria">
			<h2 class="text-xl font-bold capitalize mb-2 mt-4">{{ categoria }}</h2>
			<ul>
				<li v-for="oferta in ofertasPorCategoria" :key="oferta.id">
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

					]
				},
				{
					id: 3, 
					empresa: 'MariMari Guloseimas',
					descricao: 'Hamburguinhos + Pães Delícia + Hot Dogs p/ até 20 pessoas por R$159!',
					preco: 159.00,
					categoria: 'gastronomia',
					imagens: [

					]
				},
				{
					id: 4, 
					empresa: 'Hotel Platô Lagoinha',
					descricao: 'Diárias para 2 adultos e 1 criança + café a partir de R$199!',
					preco: 199.00,
					categoria: 'hoteis',
					imagens: [

					]
				},
				{
					id: 5, 
					empresa: 'Pousada Nascer do Sol',
					descricao: 'Jeri: 2 diárias para 2 adultos e 1 criança + café da manhã!',
					preco: 204.00,
					categoria: 'hoteis',
					imagens: [

					]
				},
				{
					id: 6, 
					empresa: 'Barraca Atlantidz',
					descricao: '4 opções prato + Pulseira p/ o parque Aquático a partir de R$99,90!',
					preco: 99.90,
					categoria: 'entretenimento',
					imagens: [

					]
				},
				{
					id: 7, 
					empresa: 'Carneiro do Ordones Varjota',
					descricao: 'Parmegiana de Carne Bovina ou Carne de Sol Sertaneja a partir de R$50!',
					preco: 50.00,
					categoria: 'gastronomia',
					imagens: [

					]
				},
				{
					id: 8, 
					empresa: 'Chico do Caranguejo Cumbuco',
					descricao: 'Tilápia ou Escondidinho de Carne de Sol + 2 caipirinhas ou Sirigado!',
					preco: 99.90,
					categoria: 'gastronomia',
					imagens: [

					]
				},
				{
					id: 9, 
					empresa: 'Complexo Turístico Mirante das Gamboas',
					descricao: 'Aracati: Diárias para 2 adultos e 1 criança + café a partir de R$299',
					preco: 299.00,
					categoria: 'hoteis',
					imagens: [

					]
				},
				{
					id: 10, 
					empresa: 'Barraca Atlantidz',
					descricao: '4 opções prato + Pulseira p/ o parque Aquático a partir de R$99,90!',
					preco: 99.90,
					categoria: 'gastronomia',
					imagens: [

					]
				},
				{
					id: 11, 
					empresa: 'Apoena Ecopark',
					descricao: 'Ingresso Conhecer + Visita avião + Casa de Pedra e mais por R$12,90!',
					preco: 12.90,
					categoria: 'entretenimento',
					imagens: [

					]
				},
				{
					id: 12,
					empresa: 'Engenhoca Parque',
					descricao: 'Ingresso + Pulseira aventura de R$84 por R$52,90 no Engenhoca Parque!',
					preco: 52.90,
					categoria: 'entretenimento',
					imagens: [

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
			debugger;
			this.ofertas = ofertas;
		}
	},
	created() {
		this.carregarOfertas();
	}
}
</script>

<style scoped>
	.container {
		padding: 0 64px;
	}
</style>