import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import layer from 'vue-layer';

Vue.use(VueRouter);
Vue.prototype.$layer = layer;

const news = resolve => require(['./pages/news.vue'], resolve);//实现懒加载

const routes = [{
    path: '/admin',
    component: require("./pages/index.vue")
}, {
    path: '/news',
    component: news,
    // redirect: "/component/button",
    // children: [{
    //     path: "button",
    //     component: require("./pages/button.vue")
    // }]
}];

const router = new VueRouter({
    routes
});

const app = new Vue({
    el: '#app',
    render: h => h(App),
    router //使用路由器
});
