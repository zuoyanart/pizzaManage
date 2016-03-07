'use strict';

import Base from './base.js';
import config from '../config/config.js';
import mail from '../tools/mail.js';
import superagent from 'superagent';
export default class extends Base {

  /**
   * index action
   * @return {Promise} []
   */
  indexAction(){
    //auto render template file index_index.html
    return this.display();
  }
  /**
   * 发送mail
   * @method mailAction
   * @return {[type]}   [description]
   */
  mailAction() {
    let _self = this;
    superagent.get('http://www.baidu.com').end(function(err, res) {
      if(err) {//发送邮件
        let  ml = new mail();
        ml.sendMail(config.mail.to, '首页响应','网站首页响应失败，请迅速检查').then(function(msg) {
          console.log("asddas");
          console.log(msg);
          _self.end(msg);
        });
      } else {
        _self.success();
      }
    });
  }

  
}
