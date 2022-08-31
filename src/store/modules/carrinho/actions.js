export default {	
	async loadItems(context, _) {
		let items = localStorage.getItem('baratoColetivoShoppingCartItems');
		
		if (!items) {
			items = [];
			//TODO carregar ofertas do usuário
			// const response = await fetch('caminho para carrinho no firebase (user id)');
			// const responseData = await response.json();
	
			// if (!response.ok) {
			// 	 const error = new Error(responseData.message || 'Não foi possível carregar os items do carrinho.');
			// 	 throw error;
			// }
	
			// Object.values(responseData).forEach(item => {
			// 	items.push(item);
			// })
		} else {
			items = JSON.parse(items);
		}

		context.commit('setItems', items);
	},
	addItem(context, payload) {
		context.commit('addItem', payload);
	}
}