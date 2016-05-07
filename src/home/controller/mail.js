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
        var article = await tools.readFile("/data/host/pizzaManage/app/mochawesome-reports/mochawesome.html");
        let $ = cheerio.load(article, {
            normalizeWhitespace: true,
            xmlMode: true
        });
        if ($(".summary-failures > h1").text() != 0) {
            mail.sendMail("huabinglan@163.com", "mocha单元测试失败", "mocha单元测试失败");
        }
        return this.json({
            "state": true
        });
    }
}
