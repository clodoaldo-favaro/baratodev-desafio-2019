export default {
	items(state) {
		return state.items;
	},
	groupedItems(state) {
		const groupedItems = {};
		const items = state.items;

		items.forEach((item) => {
			if (!(item.id in groupedItems)) {
				groupedItems[item.id] = {
					quantidade: 0,
					...item
				}
			}
			groupedItems[item.id]['quantidade']++;
		});
		return groupedItems;
	}
}