'use strict';

import Base from './base.js';
import turnpage from "../../common/tools/turnpage.js";

export default class extends Base {
    /**
     * index action
     * @return {Promise} []
     */
    async indexAction() {
      let path = xss(this.get());
      // let paramArr = path.split('/');

      return this.json({
        state:true,
        msg: path
      });

        // let article = this.model("article");
        // let tree = this.model("tree");
        // let requests = [];
        // let param = xss(this.get());
        //
        //
        // requests.push(article.page("", 25, getInt(param.cp, 1), getInt(param.mp, 20), {
        //     turnpage: true
        // }));
        // requests.push(tree.page(6)); //子节点
        // requests.push(tree.crumbs(6)); //面包屑
        //
        // let result = await Promise.all(requests);
        // let tp = new turnpage({
        //     name: path + "_" + nodeid +"c{cp}m{mp}",
        //     sum: result[0].count,
        //     mp: 20
        // });
        // this.assign({
        //     news: result[0].msg,
        //     nodelist: result[1].msg,
        //     crumbs: result[2].msg,
        //     tp: tp.hunde(getInt(param.cp, 1))
        // });
        //
        // return this.display("index.html");
    }
    /**
     * index action
     * @return {Promise} []
     */
    async imgAction() {
      let path = xss(this.get());
      // let paramArr = path.split('/');

      return this.json({
        state:true,
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
        state:true,
          msg: path
      });
    }
}
