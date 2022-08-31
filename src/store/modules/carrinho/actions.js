export default {	
	async loadItems(context, _) {
		const response = await fetch('caminho para carrinho no firebase (user id)');
		const responseData = await response.json();

		if (!response.ok) {
		 	const error = new Error(responseData.message || 'Não foi possível carregar os items do carrinho.');
		 	throw error;
		}

		const items = [];
		Object.values(responseData).forEach(item => {
			items.push(item);
		})

		context.commit('setItems', items);
	}
}