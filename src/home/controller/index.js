'use strict';

import Base from './base.js';

export default class extends Base {
    /**
     * index action
     * @return {Promise} []
     */
    async indexAction() {
        let article = this.model("article");
        let gestbook = this.model("guestbook");
        let requests = [];
        requests.push(article.page("", 9, 1, 4)); //大图
        requests.push(article.page("", 15, 1, 12)); //签约
        requests.push(article.page("", 17, 1, 16)); //菜系
        requests.push(gestbook.page("", 1, 20)); //留言

        let result = await Promise.all(requests);
        // console.log(result[0]);
        this.assign({
            datu: result[0].msg,
            qianyue: result[1].msg,
            caixi: result[2].msg,
            gestbook: result[3].msg,
        });

        return this.display();
    }
}
