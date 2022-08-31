<template>
	<router-link to="/carrinho" title="Ver carrinho de compras">
		<font-awesome-icon icon="fa-solid fa-cart-shopping" class="text-xl" />
	</router-link>
</template>

<script>
	export default {
		methods: {
			loadCartItems() {

			}
		},
		computed: {
			itemsCount() {

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