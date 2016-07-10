'use strict';

import Base from './base.js';
export default class extends Base {


    /**
     * page guestbook
     * @method pageAction
     * @return {[type]}   [description]
     */
    async pageAction() {
            let guestbook = await this.model("guestbook").page("", this.post("cp"), this.post("mp"));
            return this.json(guestbook);
        }
        /**
         * 更新文章
         * @method updateAction
         * @return {[type]}     [description]
         */
    async createAction() {
        let up = xss(this.post());
        up.pass = 0;
        up.uid = 0;
        up.createtime = Math.round(new Date().getTime() / 1000);
        up.brief = up.username.replace(/$/g, '') + '$' + up.phone.replace(/$/g, '') + "$" + up.mail.replace(/$/g, '') + "$" + up.addr.replace(/$/g, '');
        // let guestbook = await tools.httpAgent(this.config("api") + 'guestbook', "post", up);
        let guestbook = await this.model("guestbook").create(up);
        return this.json({
            "state": true
        });
    }
}
