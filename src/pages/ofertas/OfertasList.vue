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
			error: null,
			isLoading: false
		}
	},
	computed: {
		ofertas() {
			const ofertas = this.$store.getters['ofertas/ofertas'];
			const ofertasPorCategoria = {};

			ofertas.forEach((oferta) => {
				if (!(oferta.categoria in ofertasPorCategoria)) {
					ofertasPorCategoria[oferta.categoria] = [];
				}
				ofertasPorCategoria[oferta.categoria].push(oferta);
			});
			return ofertasPorCategoria;
		}
	},
	methods: {
		async loadOfertas() {
			this.isLoading = true;
			try {
				await this.$store.dispatch('ofertas/loadOfertas');
			} catch (error) {
				this.error = error.message || 'Não foi possível carregar as ofertas!';
			}
			this.isLoading = false;
		}
	},
	created() {
		this.loadOfertas();
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