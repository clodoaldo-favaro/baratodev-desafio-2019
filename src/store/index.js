import { createStore } from "vuex";

import ofertasModule from "./modules/ofertas";

const store = createStore({
	modules: {
		ofertas: ofertasModule
	}
});

export default store;