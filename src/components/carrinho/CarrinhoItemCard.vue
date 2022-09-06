<template>
	<li class="mb-8 shadow-md border-2 border-solid p-4 rounded-md" tabindex="0">
		<p class="font-bold">{{ item.descricao }}</p>
		<p class="text-sm">Preço: R$ {{ preco }}</p>
		<p class="mt-2">Quantidade: {{ item.quantidade }}</p>
		<div class="flex justify-between items-center">
			<span class="font-bold mt-2">Total: R$ {{ total }}</span>
			<font-awesome-icon @click="$emit('removeItem', item.id)" icon="fa-solid fa-trash" class="mt-2 mb-0 text-2xl" title="Remover item do carrinho de compras" />
		</div>
	</li>
</template>

<script>
	export default {
		props: ['item'],
		computed: {
			preco() {
				return this.item.preco.toFixed(2); 
			},
			total() {
				return (this.item.quantidade * this.item.preco).toFixed(2); 
			}
		}
	}
</script>

<style scoped>
	.fa-trash {
		color: var(--red-600);
		cursor: pointer;
	}

	li {
		border-color: var(--gray-100);
	}

	li:focus-visible {
		outline-color: var(--green-500);
	}
</style>