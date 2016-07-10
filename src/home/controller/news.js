'use strict';

import Base from './base.js';
import turnpage from "../../common/tools/turnpage.js";

export default class extends Base {
    /**
     * index action
     * @return {Promise} []
     */
    async indexAction() {
        let article = this.model("article");
        let tree = this.model("tree");
        let requests = [];
        let param = xss(this.get());


        requests.push(article.page("", 25, getInt(param.cp, 1), getInt(param.mp, 20), {
            turnpage: true
        }));
        requests.push(tree.page(6)); //子节点
        requests.push(tree.crumbs(6)); //面包屑

        let result = await Promise.all(requests);
        let tp = new turnpage({
            name: "/news/index",
            sum: result[0].count,
            mp: 20
        });
        this.assign({
            news: result[0].msg,
            nodelist: result[1].msg,
            crumbs: result[2].msg,
            tp: tp.hunde(getInt(param.cp, 1))
        });

        return this.display("index.html");
    }

    async hangyeAction() {
        let article = this.model("article");
        let tree = this.model("tree");
        let requests = [];
        let param = xss(this.get());

        requests.push(article.page("", 26, getInt(param.cp, 1), getInt(param.mp, 20), {
            turnpage: true
        }));
        requests.push(tree.page(6)); //子节点
        requests.push(tree.crumbs(6)); //面包屑

        let result = await Promise.all(requests);
        let tp = new turnpage({
            name: "/news/hangye",
            sum: result[0].count,
            mp: 20
        });
        this.assign({
            news: result[0].msg,
            nodelist: result[1].msg,
            crumbs: result[2].msg,
            tp: tp.hunde(getInt(param.cp, 1))
        });
        return this.display("index.html");
    }

    async zhaopinAction() {
        let article = this.model("article");
        let tree = this.model("tree");
        let requests = [];
        let param = xss(this.get());

        requests.push(article.page("", 27, getInt(param.cp, 1), getInt(param.mp, 20), {
            turnpage: true
        }));
        requests.push(tree.page(6)); //子节点
        requests.push(tree.crumbs(6)); //面包屑

        let result = await Promise.all(requests);
        let tp = new turnpage({
            name: "/news/zhaopin",
            sum: result[0].count,
            mp: 20
        });
        this.assign({
            news: result[0].msg,
            nodelist: result[1].msg,
            crumbs: result[2].msg,
            tp: tp.hunde(getInt(param.cp, 1))
        });

        return this.display("index.html");
    }
    async yuangongAction() {
        let article = this.model("article");
        let tree = this.model("tree");
        let requests = [];
        let param = xss(this.get());

        requests.push(article.page("", 28, getInt(param.cp, 1), getInt(param.mp, 20), {
            turnpage: true
        }));
        requests.push(tree.page(6)); //子节点
        requests.push(tree.crumbs(6)); //面包屑

        let result = await Promise.all(requests);
        let tp = new turnpage({
            name: "/news/yuangong",
            sum: result[0].count,
            mp: 20
        });
        this.assign({
            news: result[0].msg,
            nodelist: result[1].msg,
            crumbs: result[2].msg,
            tp: tp.hunde(getInt(param.cp, 1))
        });

        return this.display("index.html");
    }



}
