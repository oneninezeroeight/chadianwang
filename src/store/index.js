// import Vuex from "vuex";
// import Vue from "vue";
// import axios from 'axios';
// Vue.prototype.$axios = axios;

// Vue.use(Vuex);
// const store = new Vuex.Store({
//     state: {
//         cartlist: []
//     },

//     getters: {
//         cartlength(state) {
//             return state.cartlist.length;
//         }
//     },
//     mutations: {
//         // async cartlist(state, goods) {
//         //     let data = await this.$axios.post("http://localhost:1907/goods/cart", {
//         //         params: {

//         //         }
//         //     });
//         //     state.cartlist = data.data;
//         //     window.console.log(state.cartlist);
//         //     window.console.log(goods);
//         // }
//     },
//     actions: {
//         async cartlist(state, goods) {
//             let data = await this.$axios.post("http://localhost:1907/goods/cart", {
//                 params: {

//                 }
//             });
//             state.cartlist = data.data;
//             window.console.log(state.cartlist);
//             window.console.log(goods);
//         }
//     }


// });

// export default store;