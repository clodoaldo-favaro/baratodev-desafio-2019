<template>
	<a href="">
		<img :src="oferta.imagens[0]" alt="">
		<h3>{{ oferta.empresa }}</h3>
		<p> {{ oferta.descricao }}</p>
		<p> {{ oferta.preco }}</p>
		<button>Comprar</button>
	</a>
</template>

<script>
export default {
	props: ['oferta']
}

</script>

<style scoped>
	a:hover {
		cursor: pointer;
	}
</style>