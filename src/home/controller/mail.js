'use strict';

import Base from './base.js';
import mail from '../tools/mail.js';
import tools from '../tools/tools.js';
import cheerio from 'cheerio';
export default class extends Base {

    /**
     * index action
     * @return {Promise} []
     */
    async indexAction() {
        let _self = this;
        var webObj = this.get("object");
        var article = await tools.readFile("/data/host/pizzaManage/app/mochawesome-reports/mochawesome.html");
        let $ = cheerio.load(article, {
            normalizeWhitespace: true,
            xmlMode: true
        });
        if ($(".summary-failures > h1").text() != 0) {
            var ml =new mail();
            ml.sendMail("490526801@qq.com", webObj + "mocha单元测试失败", webObj + "mocha单元测试失败").then(function(msg) {
                console.log("msg=" + msg);
                _self.end(msg);
            });
        } else {
            return this.json({
                "state": "true"
            });
        }
    }
}
