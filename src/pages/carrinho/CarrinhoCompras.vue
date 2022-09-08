<template>
	<div class="px-1 sm:px-0">
		<h1 class="text-2xl font-bold mb-12 text-center sm:text-left">Carrinho de compras</h1>
		<div v-if="hasItemsCarrinho">
			<ul v-if="isMobile">
				<carrinho-item-card @remove-item="removeItem" v-for="item in itemsCarrinho" :item="item"></carrinho-item-card>
			</ul>
			<div v-else class="carrinho-items-container border-2 w-full shadow-md rounded-md">
				<div class="carrinho-items-header p-2 mb-2 grid grid-cols-12 rounded-md">
					<div class="col-span-7 font-bold">Descrição</div>
					<div class="col-span-1 font-bold">Preço</div>
					<div class="col-span-1 font-bold">Quantidade</div>
					<div class="col-span-2 font-bold">Total</div>
					<div class="col-span-1 font-bold"></div>
				</div>
				<div class="carrinho-items-lista p-2 mb-2 grid grid-cols-12 items-center rounded-md">
					<carrinho-item @remove-item="removeItem" v-for="item in itemsCarrinho" :item="item"></carrinho-item>
				</div>
			</div>
		</div>
		<div v-else>
			<p class="text-center text-xl">Ainda não há items no seu carrinho de compras.</p>
		</div>
	</div>
</template>

<script>
import CarrinhoItemCard from '../../components/carrinho/CarrinhoItemCard.vue';
import CarrinhoItem from '../../components/carrinho/CarrinhoItem.vue';
export default {
	components: {
		CarrinhoItemCard, CarrinhoItem
	},
	data() {
		return {
			isMobile: window.screen.width < 480,
		}
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
		},
		hasItemsCarrinho() {
			const items = this.$store.getters['carrinho/items'];
			return Object.keys(items).length > 0;
		}
	},
	methods: {
		removeItem(itemId) {
			this.$store.dispatch('carrinho/removeItem', { itemId });
		}
	}
}
</script>

<style scoped>
	.carrinho-items-container {
		border-color: var(--gray-100);
	}

	.carrinho-items-header {
		background-color: var(--dark-gray-500);
		color: var(--white-500);
	}
</style>

