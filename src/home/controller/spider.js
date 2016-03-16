'use strict';

import Base from './base.js';
import tools from '../tools/tools.js';
import cheerio from 'cheerio';
export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  async indexAction() {
      let json = {
        "state": true
      };
      let msg = [];
      let jsonItem = {};
      let param = tools.xss(this.post());
      let article = await tools.httpSpider("http://www.henanjianye.cn/jianyeftweb/website/newsList.htm" + "?page=" + param.cp , "get");
      // console.log(article);
      let $ = cheerio.load(article, {
        normalizeWhitespace: true,
        xmlMode: true
      });
      $(".list").find("li").each(function(index, elem) {
        let o = $(this);
        jsonItem = {};
        jsonItem.id = o.find("a").attr("href").split("&id=")[1];
        jsonItem.title = o.find("h3").text();
        jsonItem.timg = o.find("img").attr("src");
        jsonItem.bref = o.find(".detailBlock > p").text();
        jsonItem.createtime = o.find(".time").text();
        jsonItem.comment = o.find(".readCount").text();
        msg.push(jsonItem);
      });
      json.msg = msg;
      return this.json(json);
    }
    /**
     * page article
     * @method pageAction
     * @return {[type]}   [description]
     */
  async pageAction() {
    let json = {
      "state": true
    };
    let msg = [];
    let jsonItem = {};
    let param = tools.xss(this.post());
    let article = await tools.httpAgent("http://www.henanjianye.cn/jianyeftweb/website/newsList.htm" + "?page=" + cp + "&cid=", "get");
    let $ = cheerio.load(article, {
      normalizeWhitespace: true,
      xmlMode: true
    });
    $(".list").find("li").each(function(index, elem) {
      let o = $(this);
      jsonItem = {};
      jsonItem.id = o.find("a").attr("href").split("&id")[1];
      jsonItem.title = o.find("a").text();
      jsonItem.timg = o.fond("img").attr("src");
      jsonItem.bref = o.find(".detailBlock").html();
      jsonItem.createtime = o.find(".time").text();
      jsonItem.comment = o.find(".readCount").text();
      msg.push(jsonItem);
    });
    return this.json(json);
  }
}
