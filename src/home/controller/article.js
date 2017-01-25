'use strict';

import Base from './base.js';
import turnpage from "../../common/tools/turnpage.js";

export default class extends Base {
    /**
     * index action
     * @return {Promise} []
     */
    async pageAction() {
            let article = this.model("article");
            let requests = [];
            let param = xss(this.post());

            let nodeid = getInt(param.nodeid, 1);
            let cp = getInt(param.cp, 1);
            let mp = getInt(param.mp, 20);
            let path = param.path;

            requests.push(article.page("", nodeid, cp, mp, {
                turnpage: true
            }));
            // requests.push(tree.page(nodeid)); //子节点
            // requests.push(tree.crumbs(nodeid)); //面包屑

            let result = await Promise.all(requests);
            // let tp = new turnpage({
            //     name: "/" + path + "_" + nodeid +"c{cp}m{mp}",
            //     sum: result[0].count,
            //     mp: mp
            // });
            return this.json({
                news: result[0].msg,
                // nodelist: result[1].msg,
                // crumbs: result[2].msg,
                // tp: tp.hunde(cp)
            });
        }
        /**
         * index action
         * @return {Promise} []
         */
    async imgAction() {
            let path = xss(this.get());
            // let paramArr = path.split('/');

            return this.json({
                state: true,
                msg: path
            });
        }
        /**
         * index action
         * @return {Promise} []
         */
    async nodeAction() {
        let path = xss(this.get());
        // let paramArr = path.split('/');

        return this.json({
            state: true,
            msg: path
        });
    }
}
