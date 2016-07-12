'use strict';
import mail from 'nodemailer';
import smtpTransport from 'nodemailer-smtp-transport';

export default class {
  /**
   * 发送邮件
   * @method sendMail
   * @param  {[type]} to    接收邮箱
   * @param  {[type]} title 邮件标题
   * @param  {[type]} html  邮件内容
   * @return {[type]}       [description]
   */
  sendMail(to, title, html) {
    console.log(think.config("mail").smtp);
    let transporter = mail.createTransport(smtpTransport(think.config("mail").smtp));
    let mailOption = {
      from: 'huabinglan@163.com',
      to: to,
      subject: title,
      html: html
    }
    transporter.sendMail(mailOption, function(err, info){
      console.log(err);
      console.log(info);
    })
    // let fn = think.promisify(transporter.sendMail, transporter);
    // return fn(mailOption);
  }
}
