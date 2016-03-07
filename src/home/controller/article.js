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
      let article =  await tools.httpAgent(this.config("api") + 'article/page', "post", "kw=" + this.post("kw") + "&cp=" + this.post("cp") + "&mp=" + this.post("mp") + "&nodeid=" + this.post("nodeid"));
      return this.json(article);
    }
    /**
     * 获取文章操作
     * @method getAction
     * @return {[type]}  [description]
     */
  getAction() {
    return this.json({
      "state": true,
      "doc": {
        "title": "习近平谈\"新常态\":3个特点 4个机遇 1个挑战",
        "node":1,
        "timg": "http://img5.cache.netease.com/photo/0001/2016-02-25/BGMBK3PB00AO0001.jpg",
        "link":"",
        "source": "网易新闻",
        "brief": "在十八大之后，习总的公开文章和讲话中，“新常态”被提及了160余次。其中阐述最全面的，应该是在2014年亚太经合组织（APEC）工商领导人峰会上，习总的主旨演讲。这之中，习总讲到了“新常态”的 3个特点、4个机遇和1个挑战。",
        "content": "在十八大之后，习总的公开文章和讲话中，“新常态”被提及了160余次。其中阐述最全面的，应该是在2014年亚太经合组织（APEC）工商领导人峰会上，习总的主旨演讲。这之中，习总讲到了“新常态”的 3个特点、4个机遇和1个挑战。在十八大之后，习总的公开文章和讲话中，“新常态”被提及了160余次。<br/>其中阐述最全面的，应该是在2014年亚太经合组织（APEC）工商领导人峰会上，习总的主旨演讲。这之中，习总讲到了“新常态”的 3个特点、4个机遇和1个挑战。",
        "tag":"习近平,网易新闻"
      }
    });
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
  updateAction() {
      return this.json({
        "state": true
      });
    }
    /**
     * 更新文章
     * @method updateAction
     * @return {[type]}     [description]
     */
  createAction() {
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
