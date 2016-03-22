'use strict';

import Base from './base.js';
import tools from '../tools/tools.js';
import upload from '../tools/upload.js';
export default class extends Base {


  async pageAction() {
    let param = tools.xss(this.post());
    let block = await tools.httpAgent(think.config("api") + 'block/page', "post", "kw=" + this.post("kw") + "&cp=" + this.post("cp") + "&mp=" + this.post("mp"));
    return this.json(block)
  }

  async createAction() {
    let param = tools.xss(this.post());
    let block = await tools.httpAgent(think.config("api") + 'block', "post", param);
    return this.json(block)
  }

  async getAction() {
    let param = tools.xss(this.post());
    let block = await tools.httpAgent(think.config("api") + 'block/' + param.id, "get");
    return this.json(block)
  }

  async updateAction() {
    let param = tools.xss(this.post());
    param.id = parseInt(param.id);
    let block = await tools.httpAgent(think.config("api") + 'block', "put", param);
    return this.json(block)
  }

  async removeAction() {
    let param = tools.xss(this.post());
    let block = await tools.httpAgent(think.config("api") + 'block', "del", "id=" + param.id);
    return this.json(block)
  }

}
