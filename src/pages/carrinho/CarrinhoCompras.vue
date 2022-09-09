<template>
	<div class="px-1 sm:px-0">
		<h1 class="text-2xl font-bold mb-12 text-center sm:text-left">Carrinho de compras</h1>
		<div v-if="hasItemsCarrinho">
			<ul v-if="isMobile">
				<carrinho-item-card @remove-item="removeItem" v-for="item in itemsCarrinho" :key="item.id" :item="item"></carrinho-item-card>
			</ul>
			<div v-else class="table w-full carrinho-items-container border-2 w-full shadow-lg">
				<div class="table-header-group carrinho-items-header">
					<div class="table-row">
						<div class="table-cell col-span-7 p-2 mb-4 font-bold rounded-tl-md">Descrição</div>
						<div class="table-cell col-span-1 font-bold">Preço</div>
						<div class="table-cell col-span-1 font-bold">Quantidade</div>
						<div class="table-cell col-span-2 font-bold">Total</div>
						<div class="table-cell col-span-1 font-bold rounded-tr-md"></div>
					</div>
				</div>
				<div class="table-row-group carrinho-items-lista">
					<transition-group name="item-carrinho">
						<carrinho-item @remove-item="removeItem" v-for="item in itemsCarrinho" :key="item.id" :item="item"></carrinho-item>
					</transition-group>
				</div>
			</div>
		</div>
		<div v-else>
			<p class="text-center">Ainda não há items no seu carrinho de compras.</p>
			<div class="text-center mt-4">
				<router-link class="link-ofertas text-xl font-bold" to="/ofertas" title="Voltar para página de ofertas">Clique aqui para verificar nossas ofertas</router-link>
			</div>
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
		border: none;
	}

	.carrinho-items-header {
		background-color: var(--dark-gray-500);
		color: var(--white-500);
	}

	.link-ofertas {
		color: var(--link);
	}

	.carrinho-items-lista .table-row:nth-child(even) {
		background-color: var(--gray-200);
	}

	.item-carrinho-leave-from {
		opacity: 1;
	}

	.item-carrinho-leave-active,
	.item-carrinho-move {
		transition: all 1s ease-in;
	}

	.item-carrinho-leave-to {
		opacity: 0;
	}

	.item-carrinho-leave-active {
		position: absolute;
	}

</style>

