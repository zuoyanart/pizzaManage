import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import layer from 'vue-layer';

Vue.use(VueRouter);
Vue.prototype.$layer = layer(Vue);

const node = resolve => require(['./pages/node.vue'], resolve);
const list = resolve => require(['./pages/list.vue'], resolve); //实现懒加载
const content = resolve => require(['./pages/content.vue'], resolve); //实现懒加载


const routes = [{
    path: '/',
    component: require("./pages/index.vue")
}, {
    path: '/:path-:nodeid(\\d+)-:mp(\\d+)list',//普通列表页
    component: list
}, {
    path: '/:path-:nodeid(\\d+)-:mp(\\d+)list/:cp(\\d+)',//普通列表页
    component: list
},{
    path: '/:path-:nodeid(\\d+)node',//节点型列表页
    component: node
},{
    path: '/:path-:nodeid(\\d+)-:mp(\\d+)img',//图片列表页
    component: list
},{
    path: '/:path-:nodeid(\\d+)-:mp(\\d+)img\:cp(\\d+)',//图片列表页
    component: list
},{
    path: '/content/:id(\\d+)',//正文页
    component: content
}];


const router = new VueRouter({
    mode: 'history',
    routes
});

// router.beforeEach(function () {
//   window.prerenderReady = false;
// });
// router.afterEach(function (transition) {
//   window.document.title = transition.to.title || 'Default page title';
//   window.prerenderReady = true;
// });

const app = new Vue({
    el: '#app',
    render: h => h(App),
    router //使用路由器
});
