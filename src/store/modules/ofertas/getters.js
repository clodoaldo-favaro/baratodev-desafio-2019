export default {
	ofertas(state) {
		return state.ofertas;
	},
	getOfertaById: (state) => (id) => {
		const oferta = state.ofertas.find(oferta => oferta.id == id);
		return oferta;
	}
}