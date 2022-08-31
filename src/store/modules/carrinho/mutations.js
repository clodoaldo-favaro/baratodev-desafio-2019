export default {
	setItems(state, payload) {
		state.items = payload;
	},
	addItem(state, payload) {
		debugger;
		state.items.push(payload);
		localStorage.setItem('baratoColetivoShoppingCartItems', JSON.stringify(state.items));
	}
}