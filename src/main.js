import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import store from './store/index';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [{path: '/oauth/callback', component: AuthHandler s}]
});


new Vue({
    store: store,
    render: h=>h(App)
}).$mount('#app');