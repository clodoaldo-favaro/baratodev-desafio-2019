<template>
	<h1 class="text-2xl font-bold mb-12">Carrinho de compras</h1>
	<ul>
		<carrinho-item-card v-for="item in itemsCarrinho" :item="item"></carrinho-item-card>
	</ul>
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
				debugger;
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

