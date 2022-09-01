<template>
	<li class="mb-12">
		<p>{{ item.descricao }}</p>
		<p>{{ preco }}</p>
		<p>{{ item.quantidade }}</p>
		<p> {{ total }}</p>
		<font-awesome-icon icon="fa-solid fa-trash" class="text-xl" title="Remover item do carrinho de compras" />
	</li>
</template>

<script>
	export default {
		props: ['item'],
		computed: {
			preco() {
				return 'R$ ' + this.item.preco.toFixed(2); 
			},
			total() {
				return 'R$ ' + (this.item.quantidade * this.item.preco).toFixed(2); 
			}
		}
	}
</script>

<style scoped>
	.fa-trash {
		color: var(--red-600);
		cursor: pointer;
	}
</style>