'use strict';

import Base from './base.js';
import turnpage from "../../common/tools/turnpage.js";

export default class extends Base {
    /**
     * index action
     * @return {Promise} []
     */
    async indexAction() {
        let tree = this.model("tree");
        let requests = [];
        requests.push(tree.get(21));
        requests.push(tree.page(5)); //子节点
        requests.push(tree.crumbs(5)); //面包屑

        let result = await Promise.all(requests);
        this.assign({
            node: result[0].msg,
            nodelist: result[1].msg,
            crumbs: result[2].msg
        });
        return this.display();
    }

    async zhanshiAction() {
        let article = this.model("article");
        let tree = this.model("tree");
        let requests = [];
        let param = xss(this.get());

        requests.push(article.page("", 22, getInt(param.cp, 1), getInt(param.mp, 20), {
            turnpage: true
        }));
        requests.push(tree.page(5)); //子节点
        requests.push(tree.crumbs(5)); //面包屑

        let result = await Promise.all(requests);
        let tp = new turnpage({
            name: "/pinpai/zhanshi",
            sum: result[0].count,
            mp: 20
        });
        this.assign({
            news: result[0].msg,
            nodelist: result[1].msg,
            crumbs: result[2].msg,
            tp: tp.hunde(getInt(param.cp, 1))
        });


        return this.display("vi.html");
    }

    async shiwuAction() {
        let article = this.model("article");
        let tree = this.model("tree");
        let requests = [];
        let param = xss(this.get());

        requests.push(article.page("", 23, getInt(param.cp, 1), getInt(param.mp, 20), {
            turnpage: true
        }));
        requests.push(tree.page(5)); //子节点
        requests.push(tree.crumbs(5)); //面包屑

        let result = await Promise.all(requests);
        let tp = new turnpage({
            name: "/pinpai/shiwu",
            sum: result[0].count,
            mp: 20
        });
        this.assign({
            news: result[0].msg,
            nodelist: result[1].msg,
            crumbs: result[2].msg,
            tp: tp.hunde(getInt(param.cp, 1))
        });

        return this.display("vi.html");
    }
    async viAction() {
        let article = this.model("article");
        let tree = this.model("tree");
        let requests = [];
        let param = xss(this.get());

        requests.push(article.page("", 24, getInt(param.cp, 1), getInt(param.mp, 20), {
            turnpage: true
        }));
        requests.push(tree.page(5)); //子节点
        requests.push(tree.crumbs(5)); //面包屑

        let result = await Promise.all(requests);
        let tp = new turnpage({
            name: "/pinpai/vi",
            sum: result[0].count,
            mp: 20
        });
        this.assign({
            news: result[0].msg,
            nodelist: result[1].msg,
            crumbs: result[2].msg,
            tp: tp.hunde(getInt(param.cp, 1))
        });

        return this.display("vi.html");
    }



}
