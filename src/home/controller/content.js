'use strict';

import Base from './base.js';

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
        let art; //文章
        if (param.preview && this.cookie("username")) { //模版预览
            art = await article.getPreview(getInt(param.id));//执行预览
        } else {
            art = await article.get(getInt(param.id));
        }

        if (!art.msg.nodeid) {
            return this.json({
                state: false,
                msg: "文章不存在"
            });
        }
        requests.push(tree.pageSister(art.msg.nodeid)); //子节点
        requests.push(tree.crumbs(art.msg.nodeid)); //面包屑
        let result = await Promise.all(requests);
        this.assign({
            news: art.msg,
            nodelist: result[0].msg,
            crumbs: result[1].msg
        });
        return this.display();
    }
    /**
     * index action
     * @return {Promise} []
     */
    async photoAction() {
        let article = this.model("article");
        let tree = this.model("tree");
        let requests = [];
        let param = xss(this.get());
        let art; //文章
        if (param.preview && this.cookie("username")) { //模版预览
            art = await article.getPreview(getInt(param.id));//执行预览
        } else {
            art = await article.get(getInt(param.id));
        }

        if (!art.msg.nodeid) {
            return this.json({
                state: false,
                msg: "文章不存在"
            });
        }
        requests.push(tree.pageSister(art.msg.nodeid)); //子节点
        requests.push(tree.crumbs(art.msg.nodeid)); //面包屑
        let result = await Promise.all(requests);
        this.assign({
            news: art.msg,
            nodelist: result[0].msg,
            crumbs: result[1].msg
        });
        return this.display();
    }
    /**
     * index action
     * @return {Promise} []
     */
    async videoAction() {
        let article = this.model("article");
        let tree = this.model("tree");
        let requests = [];
        let param = xss(this.get());
        let art; //文章
        if (param.preview && this.cookie("username")) { //模版预览
            art = await article.getPreview(getInt(param.id));//执行预览
        } else {
            art = await article.get(getInt(param.id));
        }

        if (!art.msg.nodeid) {
            return this.json({
                state: false,
                msg: "文章不存在"
            });
        }
        requests.push(tree.pageSister(art.msg.nodeid)); //子节点
        requests.push(tree.crumbs(art.msg.nodeid)); //面包屑
        let result = await Promise.all(requests);
        this.assign({
            news: art.msg,
            nodelist: result[0].msg,
            crumbs: result[1].msg
        });
        return this.display();
    }
}
