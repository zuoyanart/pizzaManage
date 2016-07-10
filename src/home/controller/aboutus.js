'use strict';

import Base from './base.js';

export default class extends Base {
    /**
     * index action
     * @return {Promise} []
     */
    async indexAction() {
        let tree = this.model("tree");
        let requests = [];
        requests.push(tree.get(18));
        requests.push(tree.page(4)); //子节点
        requests.push(tree.crumbs(4)); //面包屑

        let result = await Promise.all(requests);
        this.assign({
            node: result[0].msg,
            nodelist: result[1].msg,
            crumbs: result[2].msg
        });
        return this.display();
    }
    /**
     * index action
     * @return {Promise} []
     */
    async jiyuAction() {
        let tree = this.model("tree");
        let requests = [];
        requests.push(tree.get(19));
        requests.push(tree.page(4)); //子节点
        requests.push(tree.crumbs(4)); //面包屑

        let result = await Promise.all(requests);
        this.assign({
            node: result[0].msg,
            nodelist: result[1].msg,
            crumbs: result[2].msg
        });
        return this.display("index.html");
    }
    /**
     * index action
     * @return {Promise} []
     */
    async dashiAction() {
        let tree = this.model("tree");
        let requests = [];
        requests.push(tree.get(20));
        requests.push(tree.page(4)); //子节点
        requests.push(tree.crumbs(4)); //面包屑

        let result = await Promise.all(requests);
        this.assign({
            node: result[0].msg,
            nodelist: result[1].msg,
            crumbs: result[2].msg
        });
        return this.display("index.html");
    }
}
