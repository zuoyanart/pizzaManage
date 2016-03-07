'use strict';
/**
 * config
 */
export default {
  mail: { //邮箱配置
    smtp: {
      host: 'smtp.163.com',
      port: 465,
      secure: true,
      auth: {
        user: 'huabinglan@163.com',
        pass: 'spnt@#loveworld'
      }
    }
  },
  resource_on: true, //是否开启静态资源解析功能
  resource_reg: /^((static|upload)\/|[^\/]+\.(?!js|html|jpg|png|jpeg)\w+$)/, //判断为静态资源请求的正则
  api: 'http://192.168.1.134:3000/v1/'
};
