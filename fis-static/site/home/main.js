import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import layer from 'vue-layer';

Vue.use(VueRouter);
Vue.prototype.$layer = layer(Vue);

const about = resolve => require(['./pages/about.vue'], resolve);
const news = resolve => require(['./pages/news.vue'], resolve); //实现懒加载


const routes = [{
    path: '/',
    component: require("./pages/index.vue")
}, {
    path: '/:path-:nodeid(\\d+)-:mp(\\d+)list',//普通列表页
    component: news
}, {
    path: '/:path-:nodeid(\\d+)-:mp(\\d+)list/:cp(\\d+)',//普通列表页
    component: news
},{
    path: '/:path-:nodeid(\\d+)node',//节点型列表页
    component: about
},{
    path: '/:path-:nodeid(\\d+)-:mp(\\d+)img',//图片列表页
    component: news
},{
    path: '/:path-:nodeid(\\d+)-:mp(\\d+)img\:cp(\\d+)',//图片列表页
    component: news
},{
    path: '/content-:id(\\d+)',//正文页
    component: news
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
