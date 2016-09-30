'use strict';
/**
 * config
 */
export default {
  salt: "!rW3N3pJ*$#",//后台加密使用的盐
  upload: {
    type: "local",//local:上传到本地，qiniu：上传到七牛
    qiniu:{
      key:"",
      secret:""
    }
  }
};
