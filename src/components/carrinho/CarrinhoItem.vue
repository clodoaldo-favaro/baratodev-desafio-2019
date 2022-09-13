<template>
    <div class="flex items-center carrinho-item p-2">
        <div class="w-4/12">{{ item.descricao }}</div>
        <div class="w-3/12">R$ {{ preco }}</div>
        <div class="w-2/12"> {{ item.quantidade }}</div>
        <div class="w-2/12">R$ {{ total }}</div>
        <div class="w-1/12">
            <font-awesome-icon @click="$emit('removeItem', item.id)" icon="fa-solid fa-trash" class="text-2xl" title="Remover item do carrinho de compras" />
        </div>
    </div>
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

    .carrinho-item:nth-child(odd) {
		background-color: var(--gray-200);
	}
</style>