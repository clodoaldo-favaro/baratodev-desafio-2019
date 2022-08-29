export default {
	async loadOfertas(context, payload) {
		const response = await fetch('');
		const responseData = await response.json();

		if (!response.ok) {
			const error = new Error(responseData.message || 'Não foi possível carregar as ofertas.');
			throw error;
		}

		const ofertas = [];
		for (const key in responseData) {
			const oferta = {
				id: key
			};
			ofertas.push(oferta);
		}

		context.commit('setOfertas', ofertas);
	}
}