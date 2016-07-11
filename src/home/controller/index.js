'use strict';

import Base from './base.js';

export default class extends Base {
    /**
     * index action
     * @return {Promise} []
     */
    async indexAction() {
        let node = this.model("tree");
        let article = this.model("article");
        let requests = [];
        requests.push(node.page(1));
        requests.push(article.page("", 3, 1, 10));
        requests.push(article.page("", 4, 1, 10));
        requests.push(article.page("", 5, 1, 10));
        requests.push(article.page("", 6, 1, 10));
        requests.push(article.page("", 7, 1, 10));
        requests.push(article.page("", 8, 1, 10));
        requests.push(article.page("", 9, 1, 10));
        requests.push(article.page("", 10, 1, 10));
        let results = await Promise.all(requests);
        console.log(results[1].msg);
        this.assign({
           node: results[0].msg,
           article: results
          //  a2: results[2].msg,
          //  a3: results[3].msg,
          //  a4: results[4].msg,
          //  a5: results[5].msg,
          //  a6: results[6].msg,
          //  a7: results[7].msg,
          //  a8: results[8].msg,
        });
        return this.display();
    }
}
