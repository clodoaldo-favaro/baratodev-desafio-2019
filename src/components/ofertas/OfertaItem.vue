<template>
	<a href="">
		<img :src="oferta.imagens[0]" alt="">
		<h3 class="text-lg font-bold mt-2">{{ oferta.empresa }}</h3>
		<p> {{ oferta.descricao }}</p>
		<p> {{ preco }}</p>
		<button>Comprar</button>
	</a>
</template>

<script>
export default {
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