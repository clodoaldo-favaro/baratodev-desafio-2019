<template>
	<a href="">
		<img :src="oferta.imagens[0]" alt="">
		<h3 class="text-lg font-bold mt-2 mb-2">{{ oferta.empresa }}</h3>
		<p class="mb-2"> {{ oferta.descricao }}</p>
		<p class="mb-2 font-bold"> {{ preco }}</p>
		<base-button @click.prevent="addItemToShoppingCart" type="confirm" title="Comprar"></base-button>
	</a>
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
		}
	}
}

</script>

<style scoped>
	a:hover {
		cursor: pointer;
	}
</style>