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
    /**
     * 获取所有子节点
     * @method pageAction
     * @return {[type]}   [description]
     */
  async pageAction() {
    let pid = xss(this.post("pid"));
    // let node = await httpAgent(this.config("api") + 'node/page', "post", "pid=" + this.post("pid"));
    let node = await this.model("tree").page(pid);
    return this.json(node);
  }
  /**
   *  返回所有的节点列表
   * @method pageallAction
   * @return {[type]}      [description]
   */
  async pageallAction() {
    // let node = await httpAgent(this.config("api") + 'node/pageall', "get");
    let node = await this.model("tree").pageall();
    return this.json(node);
  }
  //编辑节点
  editAction() {
    return this.display();
  }

  /**
   * 获取节点操作
   * @method getAction
   * @return {[type]}  [description]
   */
  async getAction() {
    // let node = await httpAgent(this.config("api") + 'node/' + this.post("id"), "get");
    let node = await this.model("tree").get(this.post("id"));
    return this.json(node);
  }

  /**
   * 更新节点
   * @method updateAction
   * @return {[type]}     [description]
   */
  async updateAction() {
    let p = this.post();
    p.id = parseInt(p.id);
    p.weight = parseInt(p.weight);
    p.mgwidth = parseInt(p.mgwidth);
    p.mgheight = parseInt(p.mgheight);
    // let node = await httpAgent(this.config("api") + 'node', "put", p);
    let node = await this.model("tree").nodeUpdate(p);
    if (node.state == true) {
      return this.json({
        "state": true
      });
    } else {
      return this.json({
        "state": false
      });
    }
  }

  /**
   * 更新节点
   * @method updateAction
   * @return {[type]}     [description]
   */
  async createAction() {
    let p = this.post();
    p.pid = parseInt(p.pid);
    p.weight = parseInt(p.weight);
    // let node = await httpAgent(this.config("api") + 'node', "post", p);
    let node = await this.model("tree").create(p);
    if (node.state == true) {
      return this.json({
        "state": true
      });
    } else {
      return this.json({
        "state": false
      });
    }
  }
  /**
   * 是否隐藏菜单
   * @method ishideAction
   * @return {[type]}     [description]
   */
  async ishideAction() {
    let p = this.post();
    let node = await this.model("tree").ishide(p.id, p.ishide);
    return this.json({
      "state": true
    });
  }


}
