import Vue from 'vue';

Vue.use(VeeValidate)
Vue.use(VueRouter)

import router from './Routing/routing.js';
import store from './Store/store.js';

new Vue({
    el: '#app',
    router: router,
    store,
    data: {},
    mounted() {
        // load all necessary data before load
        //store.dispatch('loadData')
    }
});