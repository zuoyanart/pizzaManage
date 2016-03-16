'use strict';

import fs from 'fs';
import superagent from 'superagent';
import crypto from 'crypto';
import xssFilter from 'xss';


export default class {
  /**
   * 读取文件
   * @method readFile
   * @param  {[type]} filePath 文件路径
   * @return {[Promise]}          [description]
   */
  static readFile(filePath) {
      return new Promise(function(resolve, reject) {
        fs.readFile(filePath, function(err, data) {
          if (err) {
            reject(err);
          }
          resolve(data);
        });
      });
    }
    /**
     * 写入文件
     * @method writeFile
     * @param  {[type]}  filePath [description]
     * @param  {[type]}  data     [description]
     * @return {[type]}           [description]
     */
  static writeFile(filePath, data) {
      return new Promise(function(resolve, reject) {
        fs.writeFile(filePath, data, function(err) {
          if (err) {
            reject(err);
          }
          resolve("true");
        });
      });
    }
    /**
     * http请求
     * @method httpAgent
     * @param  {[type]}  url    [description]
     * @param  {[type]}  method [description]
     * @param  {[type]}  data   [description]
     * @return {[type]}         [description]
     */
  static httpAgent(url, method, data) {
    data = data ? data : "";
    var method = method.toLowerCase();
    if (method == "get" || method == "del") {
      return new Promise(function(resolve, reject) {
        superagent[method].call(this, url).query(data).end(function(err, res) {
          if (err || !res.ok) {
            reject(err || res.ok);
          }
          resolve(res.body);
        });
      });
    } else {
      return new Promise(function(resolve, reject) {
        superagent[method].call(this, url).send(data).end(function(err, res) {
          if (err || !res.ok) {
            reject(err || res.ok);
          }
          resolve(res.body);
        });
      });
    }
  }

  /**
   * http请求
   * @method httpAgent
   * @param  {[type]}  url    [description]
   * @param  {[type]}  method [description]
   * @param  {[type]}  data   [description]
   * @return {[type]}         [description]
   */
static httpSpider(url, method, data) {
  data = data ? data : "";
  var method = method.toLowerCase();
  if (method == "get" || method == "del") {
    return new Promise(function(resolve, reject) {
      superagent[method].call(this, url).query(data).end(function(err, res) {
        if (err || !res.ok) {
          reject(err || res.ok);
        }
        resolve(res.text);
      });
    });
  } else {
    return new Promise(function(resolve, reject) {
      superagent[method].call(this, url).send(data).end(function(err, res) {
        if (err || !res.ok) {
          reject(err || res.ok);
        }
        resolve(res.text);
      });
    });
  }
}
  /**
   * sha1加密
   * @param str 将加密的字符串
   * @returns {*}
   */
  static sha1(str) {
      return crypto.createHash('sha1').update(str).digest('hex');
    }
    /**
     * xss过滤
     * @method xssFomat
     * @param  {[type]} str [description]
     * @return {[type]}     [description]
     */
  static xss(str) {
    if (typeof(str) == "object") { //处理json
      let json = {};
      for (var key in str) {
        json[key] = xssFilter(str[key]);
      }
      return json;
    } else {
      return xssFilter(str);
    }
  }

}
