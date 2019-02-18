import ProductListOne from './components/ProductListOne.vue';
import ProductListTwo from './components/ProductListTwo.vue';
import Todos from './components/Todos.vue';
import Identicon from './components/Identicon.vue';

export const routes = [
    { path: '/', component: Todos },
    { path: '/product1', component: ProductListOne },
    { path: '/product2', component: ProductListTwo },
    { path: '/identicon', component: Identicon },

]