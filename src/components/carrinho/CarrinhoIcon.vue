<template>
	<router-link to="/carrinho" title="Ver carrinho de compras">
		<font-awesome-icon icon="fa-solid fa-cart-shopping" class="text-xl" />
		<span v-if="itemsCount" class="ml-2 text-xl font-bold">{{ itemsCount }}</span>
	</router-link>
</template>

<script>
	export default {
		methods: {
			loadCartItems() {
				this.$store.dispatch('carrinho/loadItems');
			}
		},
		computed: {
			itemsCount() {
				return this.$store.getters['carrinho/items'].length;
			}
		},
		created() {
			this.loadCartItems();
		}
	}
</script>

<style scoped>
	.fa-cart-shopping {
		color: var(--white-500);
	}
</style>