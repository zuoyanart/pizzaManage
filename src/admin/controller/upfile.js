'use strict';

import Base from './base.js';
import upload from '../../common/tools/upload.js';
export default class extends Base {
    /**
     * 上传
     * @method uploadAction
     * @return {[type]}     [description]
     */
    async localAction() {
        let tree = this.model("tree");
        let node = await tree.get(this.cookie("nodeid"));
        console.log(node);
        let mgOption = {};
        if(node.state && node.msg.mgwidth && node.msg.mgwidth > 0) {
          mgOption.width = node.msg.mgwidth;
          mgOption.height = node.msg.mgheight;
        }
        console.log(mgOption.length);
        let f = this.file();
        let s = await upload.localImg(f.imgFile, mgOption);
        if (s != '') {
            return this.json({
                "error": 0,
                "url": s
            });
        } else {
            return this.json({
                "error": 1,
                "message": "上传失败"
            });
        }
    }
}
