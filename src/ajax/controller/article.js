'use strict';

import Base from './base.js';

export default class extends Base {
    /**
     * index action
     * @return {Promise} []
     */
    indexAction() {
        //auto render template file index_index.html
        return this.display();
    }

    async pageAction() {
        let article = this.model("article");
        let tree = this.model("tree");
        let requests = [];
        let param = xss(this.post());

        let nodeid = getInt(param.nodeid, 1);
        let cp = getInt(param.cp, 1);
        let mp = getInt(param.mp, 20);
        let path = param.path;

        requests.push(article.page("", nodeid, cp, mp, {
            turnpage: true
        }));
        requests.push(tree.pageSister(nodeid)); //子节点
        // requests.push(tree.crumbs(nodeid)); //面包屑

        let result = await Promise.all(requests);
        // let tp = new turnpage({
        //     name: "/" + path + "_" + nodeid +"c{cp}m{mp}",
        //     sum: result[0].count,
        //     mp: mp
        // });
        return this.json({
            news: result[0].msg,
            nodelist: result[1].msg,
            // crumbs: result[2].msg,
            // tp: tp.hunde(cp)
        });
    }

    async getAction() {
        let article = this.model("article");
        let tree = this.model("tree");
        let requests = [];
        let param = xss(this.post());

        let id = getInt(param.id, 1);
        let cp = getInt(param.cp, 1);
        let mp = getInt(param.mp, 20);

        requests.push(article.get(id));
        // requests.push(tree.page(nodeid)); //子节点
        // requests.push(tree.crumbs(nodeid)); //面包屑

        let result = await Promise.all(requests);
        // let tp = new turnpage({
        //     name: "/" + path + "_" + nodeid +"c{cp}m{mp}",
        //     sum: result[0].count,
        //     mp: mp
        // });
        let nodelist = await tree.crumbs(result[0].msg.nodeid);
        return this.json({
            article: result[0].msg,
            nodelist: nodelist.msg,
            // crumbs: result[2].msg,
            // tp: tp.hunde(cp)
        });
    }
}
