<template>
    <div class="table-row">
        <div class="table-cell p-2 mb-2">{{ item.descricao }}</div>
        <div class="table-cell">R$ {{ preco }}</div>
        <div class="table-cell"> {{ item.quantidade }}</div>
        <div class="table-cell">R$ {{ total }}</div>
        <div class="table-cell">
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

    .table-row:last-child .table-cell:first-child {
        border-bottom-left-radius: 0.375rem;
    }

    .table-row:last-child .table-cell:last-child {
        border-bottom-right-radius: 0.375rem;
    }
</style>