import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './src/App.vue';
import Author from './src/Author.vue';

Vue.use(VueRouter);

Vue.component('author', Author);

const Foo = { template: "<div>foo</div>" }
const Bar = { template: '<div>bar</div>' }

const routes = [
  { path: '/', component: App },
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
];

const router = new VueRouter({
  routes
});

debugger;
console.log('Message');

new Vue({
  router,
  el: '#app'
});
