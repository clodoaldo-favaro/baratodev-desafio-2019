<template>
<header>
	<h1>
		<router-link to="/ofertas" title="Voltar a home">
			<img src="../../assets/logo.png" alt="">
		</router-link>
	</h1>
	<carrinho-icon></carrinho-icon>
</header>
</template>

<script>
	import CarrinhoIcon from '../carrinho/CarrinhoIcon.vue';
	export default {
		components: {
			CarrinhoIcon
		}
	}
</script>

<style scoped>

header {
	width: 100%;
	height: 5rem;
	color: var(--green-300);
	background-color: var(--green-500);
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 16px 64px;
	position: fixed;
	top: 0;
}

img {
	max-width: 140px;
}

</style>