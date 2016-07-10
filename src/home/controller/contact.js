'use strict';

import Base from './base.js';

export default class extends Base {
    /**
     * index action
     * @return {Promise} []
     */
    async indexAction() {
      let tree = this.model("tree");
      let requests = [];
      requests.push(tree.get(10));
      requests.push(tree.page(10)); //子节点
      requests.push(tree.crumbs(10)); //面包屑

      let result = await Promise.all(requests);
      this.assign({
          node: result[0].msg,
          nodelist: result[1].msg,
          crumbs: result[2].msg
      });
      return this.display();
    }
}
