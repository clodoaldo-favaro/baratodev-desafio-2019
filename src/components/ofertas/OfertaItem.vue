<template>
	<div>
		<img :src="oferta.imagens[0]" alt="">
		<h3 class="text-lg font-bold mt-2 mb-2">{{ oferta.empresa }}</h3>
		<p class="mb-2"> {{ oferta.descricao }}</p>
		<p class="mb-2 font-bold"> {{ preco }}</p>
		<div class="flex flex-wrap flex-col sm:flex-row sm:justify-between">
			<base-button @click.prevent="addItemToShoppingCart" type="confirm" class="w-full sm:w-max" title="Comprar"></base-button>
			<base-button @click.prevent="goToOfferDetail" type="cancel" title="Detalhes"></base-button>
		</div>
	</div>
</template>

<script>
import BaseButton from '../UI/BaseButton.vue';
export default {
	components: {
		BaseButton
	},
	props: ['oferta'],
	computed: {
		preco() {
			return 'R$ ' + this.oferta.preco.toFixed(2).replace('.', ',');
		}
	},
	methods: {
		addItemToShoppingCart() {
			this.$store.dispatch('carrinho/addItem', this.oferta);
		},
		goToOfferDetail() {
			this.$router.push('/ofertas/' + this.oferta.id);
		}
	}
}

</script>