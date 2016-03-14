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
     * page article
     * @method pageAction
     * @return {[type]}   [description]
     */
  async pageAction() {
      let param = tools.xss(this.post());
      let users = await tools.httpAgent(think.config("api") + 'user/page', "post", "cp=" + param.cp + '&mp=' + param.mp + '&kw=' + param.kw);
      return this.json(users);
    }
    /**
     * 获取用户操作
     * @method getAction
     * @return {[type]}  [description]
     */
  async getAction() {
      let user = await tools.httpAgent(this.config("api") + 'user/' + tools.xss(this.post("id")), "get");
      return this.json(user);
    }
    /**
     * 编辑用户
     * @method editAction
     * @return {[type]}   [description]
     */
  editAction() {
      return this.display();
    }
    /**
     * 更新用户
     * @method updateAction
     * @return {[type]}     [description]
     */
  async updateAction() {
      let user = tools.xss(this.post());
      user.id = parseInt(user.id);
      let result = await tools.httpAgent(think.config("api") + 'user', "put", user);
      return this.json(result);
    }
    /**
     * 更新用户
     * @method updateAction
     * @return {[type]}     [description]
     */
  async createAction() {
      let us = this.post();
      let user = await tools.httpAgent(this.config("api") + 'user', "post", us);
      return this.json({
        "state": true
      });
    }
    /**
     * 删除用户
     * @method removeAction
     * @return {[type]}     [description]
     */
  async removeAction() {
      let id = tools.xss(this.post("id")).replace(/,0/, "");
      console.log(id);
      let result = await tools.httpAgent(think.config("api") + 'user', "del", "id=" + id);
      return this.json(result);
    }
    /**
     * 审核用户
     * @method passAction
     * @return {[type]}   [description]
     */
  passAction() {
    return this.json({
      "state": true
    });
  }

}
