<template>
    <div class="col-span-7">{{ item.descricao }}</div>
    <div class="col-span-1">R$ {{ preco }}</div>
    <div class="col-span-1"> {{ item.quantidade }}</div>
    <div class="col-span-2">R$ {{ total }}</div>
    <div class="col-span-1"></div>
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

</style>