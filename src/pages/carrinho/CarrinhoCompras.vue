<template>
	<div class="px-1 sm:px-0">
		<h1 class="text-2xl font-bold mb-12 text-center sm:text-left">Carrinho de compras</h1>
		<ul>
			<carrinho-item-card v-for="item in itemsCarrinho" :item="item"></carrinho-item-card>
		</ul>
	</div>
</template>

<script>
import CarrinhoItemCard from '../../components/carrinho/CarrinhoItemCard.vue';
export default {
	components: {
		CarrinhoItemCard
	},
	computed: {
		itemsCarrinho() {
			const itemsAgrupados = {};
			const items = this.$store.getters['carrinho/items'];

			items.forEach((item) => {
				if (!(item.id in itemsAgrupados)) {
					itemsAgrupados[item.id] = {
						quantidade: 0,
						...item
					}
				}
				itemsAgrupados[item.id]['quantidade']++;
			});
			return itemsAgrupados;
		}
	}
}
</script>

