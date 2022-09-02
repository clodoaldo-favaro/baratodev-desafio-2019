export default {
	setItems(state, payload) {
		state.items = payload;
	},
	addItem(state, payload) {
		state.items.push(payload);
		setLocalStorageItems(state.items);
	},
	removeItem(state, itemId) {
		state.items = state.items.filter(item => item.id !== itemId);
		setLocalStorageItems(state.items);
	},
}
var setLocalStorageItems = (items) => { localStorage.setItem('baratoColetivoShoppingCartItems', JSON.stringify(items)) };