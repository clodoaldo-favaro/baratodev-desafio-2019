<template>
	<button class="w-auto h-12 py-2 px-12 rounded-lg font-bold" :class="buttonClass">{{ title }}</button>
</template>

<script>
export default {
	props: ['title', 'type'],
	computed: {
		buttonClass() {
			return this.type === 'confirm' ? 'confirm' : 'cancel';
		}
	}
}
</script>

<style scoped>
	.confirm {
		background-color: var(--black-500);
		color: var(--white-500);
	}

	.confirm:hover {
		background-color: #2C2B26;
	}
	.cancel {
		background-color: var(--white-500);
		color: var(--black-500);
	}
</style>