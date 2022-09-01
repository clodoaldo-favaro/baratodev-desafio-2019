<template>
	<li class="mb-12">
		<p>{{ item.descricao }}</p>
		<p>{{ preco }}</p>
		<p>{{ item.quantidade }}</p>
		<p> {{ total }}</p>
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