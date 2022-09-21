import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCartShopping, faTrash, faMoneyBill } from '@fortawesome/free-solid-svg-icons';

import './index.css';
import App from './App.vue';
import router from './router.js';
import store from './store/index.js';

library.add([faCartShopping, faTrash, faMoneyBill]);
const app = createApp(App);
app.use(router);
app.use(store);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
