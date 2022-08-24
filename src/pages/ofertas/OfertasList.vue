<template>
	<div class="container">
		<h2>Ofertas</h2>
	</div>
</template>

<script>
export default {
	data() {
		return {
			ofertas: [
				{
					id: 1, 
					empresa: 'Hotel Long Beach',
					descricao: '2 diárias em quarto com vista para o mar',
					preco: 100.00,
					categoria: 'hotéis',
					imagens: [

					]
				}
			]
		}
	}
}
</script>

<style scoped>
	.container {
		padding: 0 64px;
	}
</style>