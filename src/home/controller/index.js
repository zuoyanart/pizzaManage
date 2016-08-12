'use strict';

import Base from './base.js';
import objectid from 'objectid';

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

    async getnodeAction() {
      let node = await httpAgent("http://192.168.1.134:3004/v1/neo4juser/98042", "get");
      return this.json(node);
    }

    async updateAction() {
      let node = await httpAgent("http://192.168.1.134:3004/v1/neo4juser", "put", "key=mail&value=huabinglan@163.com&id=1");
      return this.json(node)
    }

  async createAction() {
    let s = "_id=" + objectid + "&avatar=/avatar.jpg&photo=/photo.jpg&company1="
    let json = {
      "Objid": objectid(),
      "avatar": "/avatar.jpg",
      "photo": "/photo.jpg",
      "city": "郑州"

    };
    let node = await httpAgent("http://192.168.1.134:3004/v1/neo4juser", "post", json);
    return this.json(node)
  }

  async loginAction() {
    let s = "username=2191921092&password=" + sha1("888999" + "H0UK*Lwd");
    let node = await httpAgent("http://192.168.1.134:3004/v1/user/checklogin", "post", s);
    return this.json(node)
  }

  async pathAction() {
    let s = "id=1&cp=1&mp=18";
    let node = await httpAgent("http://192.168.1.134:3004/v1/neo4juser/path", "post", s);
    return this.json(node)
  }
}
