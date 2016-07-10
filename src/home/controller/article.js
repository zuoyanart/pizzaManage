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
        let art = await article.get(getInt(param.id));
        // console.log(art);
        requests.push(tree.pageSister(art.msg.nodeid)); //子节点
        requests.push(tree.crumbs(art.msg.nodeid)); //面包屑

        let result = await Promise.all(requests);
        // console.log(result[0].msg);
        this.assign({
            news: art.msg,
            nodelist: result[0].msg,
            crumbs: result[1].msg
        });
        return this.display();
    }
}
