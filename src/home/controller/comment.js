'use strict';

import Base from './base.js';
import tools from '../tools/tools.js';
import upload from '../tools/upload.js';
export default class extends Base {
  /**
   * 获取评论列表
   * @method commentAction
   * @return {[type]}      [description]
   */
  async pageAction() {
    let param = tools.xss(this.post());
    let result = await tools.httpAgent(think.config("api") + "comment/page", "post", "id=" + param.id + "&cp=" + param.cp + "&mp=" + param.mp);
    return this.json(result)
  }

}
