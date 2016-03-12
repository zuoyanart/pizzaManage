'use strict';

import Base from './base.js';
import tools from '../tools/tools.js';
import upload from '../tools/upload.js';
export default class extends Base {

  /**
   * index action
   * @return {Promise} []
   */
  indexAction() {
      //auto render template file index_index.html
      return this.display();
    }
    /**
     * page article
     * @method pageAction
     * @return {[type]}   [description]
     */
  async pageAction() {
      let article = await tools.httpAgent(this.config("api") + 'article/page', "post", "kw=" + this.post("kw") + "&cp=" + this.post("cp") + "&mp=" + this.post("mp") + "&nodeid=" + this.post("nodeid"));
      console.log(article);
      return this.json(article);
    }
    /**
     * 获取文章操作
     * @method getAction
     * @return {[type]}  [description]
     */
  async getAction() {
      let article = await tools.httpAgent(this.config("api") + 'article/' + parseInt(this.post("id")), "get");
      return this.json(article);
    }
    /**
     * 编辑文章
     * @method editAction
     * @return {[type]}   [description]
     */
  editAction() {
      return this.display();
    }
    /**
     * 更新文章
     * @method updateAction
     * @return {[type]}     [description]
     */
  async updateAction() {
      let up = this.post();
      up.nodeid = parseInt(up.nodeid);
      up.pass = parseInt(up.pass);
      up.reco = parseInt(up.reco);
      up.id = parseInt(up.id);
      let article = await tools.httpAgent(this.config("api") + 'article', "put", up);
      console.log(article);
      return this.json({
        "state": true
      });
    }
    /**
     * 更新文章
     * @method updateAction
     * @return {[type]}     [description]
     */
  async createAction() {
      let up = this.post();
      up.nodeid = parseInt(up.nodeid);
      up.pass = parseInt(up.pass);
      up.reco = parseInt(up.reco);
      up.uid = parseInt(this.cookie("id"));
      let article = await tools.httpAgent(this.config("api") + 'article', "post", up);
      return this.json({
        "state": true
      });
    }
    /**
     * 删除文章
     * @method removeAction
     * @return {[type]}     [description]
     */
  removeAction() {
      return this.json({
        "state": true
      });
    }
    /**
     * 审核文章
     * @method passAction
     * @return {[type]}   [description]
     */
  passAction() {
    return this.json({
      "state": true
    });
  }

}
