'use strict';

import Base from './base.js';
import tools from "../../home/tools/tools.js"

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
     * 登录操作
     * @method loginAction
     * @return {[type]}    [description]
     */
  async loginAction() {
      var user = await tools.httpAgent(this.config("api") + 'user/login', "post", "username=" + this.post("name") + "&password=" + this.post("password"));
      console.log(user);
      if (user.state == true) {
        this.http.cookie("username", "左盐");
        console.log("set cookie");
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
     * 退出登录
     * @method loginoutAction
     * @return {[type]}       [description]
     */
  loginoutAction() {
    return this.json({
      "state": true
    });
  }
}
