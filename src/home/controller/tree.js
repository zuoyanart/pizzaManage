'use strict';

import Base from './base.js';
import tools from '../tools/tools.js';
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
     * 获取所有子节点
     * @method pageAction
     * @return {[type]}   [description]
     */
  async pageAction() {
    let pid = this.post("pid");
    var node = await tools.httpAgent(this.config("api") + 'node/page', "post", "pid=" + this.post("pid"));

    return this.json(node);
  }

  editAction() {
    return this.display();
  }

  /**
   * 获取文章操作
   * @method getAction
   * @return {[type]}  [description]
   */
  async getAction() {
     var node = await tools.httpAgent(this.config("api") + 'node/' + this.post("id"), "get");
     return this.json(node);
  }

  /**
   * 更新文章
   * @method updateAction
   * @return {[type]}     [description]
   */
  async updateAction() {
    var p = this.post();
    p.pid = parseInt(p.pid);
    var node = await tools.httpAgent(this.config("api") + 'node', "put", p);
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
    var p = this.post();
    p.pid = parseInt(p.pid);
    console.log(p);
     var node = await tools.httpAgent(this.config("api") + 'node', "post", p);
     console.log(node);
    return this.json({
      "state": true
    });
  }


}
