import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        products: [
            {id: 0, name: 'Banana Skin', price: 20},
            {id: 1, name: 'Shinny Start', price: 30},
            {id: 2, name: 'Green Shells', price: 40},
            {id: 3, name: 'Red Shells', price: 50}
        ],
        todos: []
    },
    getters: {
        saleProducts(state){
            let saleProducts = state.products.map(element => {
                return {
                    name: '**' + element.name + '**',
                    price: element.price/2
                }
            })
            return saleProducts;
        },
        getTodos(state){
            return state.todos;
        }
    },
    mutations: {
        reducePrice(state, payload){
            state.products.forEach( product => {
                product.price -= payload;
            })
        },
        addTodo(state, payload){
            state.todos = [...state.todos, payload];
        },
        removeTodo(state, payload){
            state.todos.splice(state.todos.indexOf(payload), 1);
        }
    },
    actions: {
        reducePrice(context, payload){
            setTimeout(function(){
                context.commit('reducePrice', payload);
            }, 1000)
        },
        addTodo({commit}, payload){
            commit('addTodo', payload)
        },
        removeTodo({commit}, payload){
            commit('removeTodo', payload);
        }
    }
})