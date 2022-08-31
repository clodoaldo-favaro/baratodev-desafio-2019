export default {	
	async loadOfertas(context, _) {
		const response = await fetch('https://ofertas-barato-coletivo-default-rtdb.firebaseio.com/ofertas.json');
		const responseData = await response.json();

		if (!response.ok) {
		 	const error = new Error(responseData.message || 'Não foi possível carregar as ofertas.');
		 	throw error;
		}

		const ofertas = [];
		Object.values(responseData).forEach(oferta => {
			ofertas.push(oferta);
		})

		context.commit('setOfertas', ofertas);
	}
}