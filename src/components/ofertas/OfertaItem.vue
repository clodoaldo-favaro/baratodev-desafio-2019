<template>
	<a href="">
		<img :src="oferta.imagens[0]" alt="">
		<h3 class="text-lg font-bold mt-2">{{ oferta.empresa }}</h3>
		<p> {{ oferta.descricao }}</p>
		<p> {{ preco }}</p>
		<base-button type="confirm" title="Comprar"></base-button>
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
			return 'R$ ' + this.oferta.preco.toFixed(2);
		}
	}
}

</script>

<style scoped>
	a:hover {
		cursor: pointer;
	}
</style>