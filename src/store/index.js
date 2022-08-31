import { createStore } from "vuex";

import ofertasModule from "./modules/ofertas";
import carrinhoModule from "./modules/carrinho";

const store = createStore({
	modules: {
		ofertas: ofertasModule,
		carrinho: carrinhoModule
	}
});

export default store;