<template>
	<button class="flex justify-center items-center h-12 py-2 px-12 rounded-lg font-bold" :class="buttonClass">
		<font-awesome-icon v-if="type === 'payment'" class="mr-2" icon="fa-solid fa-money-bill" />
		<span>{{ title }}</span>
	</button>
</template>

<script>
export default {
	props: ['title', 'type'],
	computed: {
		buttonClass() {
			return this.type || 'confirm';
		}
	}
}
</script>

<style scoped>
	.confirm, .payment {
		background-color: var(--black-500);
		color: var(--white-500);
	}

	.confirm:hover {
		background-color: var(--dark-gray-500);
	}

	.cancel {
		background-color: var(--green-300);
		color: var(--black-500);
		border: 1px solid var(--black-500);
	}

	.cancel:hover {
		background-color: var(--green-400);
	}
</style>