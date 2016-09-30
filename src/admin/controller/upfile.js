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
        let f = this.file();
        let s = await upload.localImg(f.imgFile);
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
