/**
 * --------------------------------------------------------
 * witch js 工具类，包含前台字符串、cookie、图片缩放，特殊字符过滤等操作
 * @Version 0.5
 * @Author: 左盐(huabinglan@163.com)
 * @Date: 14-2-12 下午3:16
 * --------------------------------------------------------
 */
import "babel-polyfill/dist/polyfill.min.js";
import superagent from 'superagent/superagent';
import vueLayer from 'vue-layer';
import Vue from 'vue';
// const layer = vueLayer(Vue);

var tools = (function() {
    let self = {};
    /**
     * http请求
     * @method httpAgent
     * @param  {[type]}  url    [description]
     * @param  {[type]}  method [description]
     * @param  {[type]}  data   [description]
     * @return {[type]}         [description]
     */
    self.httpAgent = (url, method = 'get', data = '') => {
        // let id = layer.loading(1);
        method = method.toLowerCase();
        if (method == "get" || method == "del") {
            return new Promise(function(resolve, reject) {
                superagent[method].call(this, url).query(data).end(function(err, res) {
                  // layer.close(id);
                    if (err || !res.ok) {
                        reject(err || res.ok);
                    }
                    resolve(res.body);
                });
            });
        } else {
            return new Promise(function(resolve, reject) {
                superagent[method].call(this, url).send(data).end(function(err, res) {
                    // layer.close(id);
                    if (err || !res.ok) {
                        reject(err || res.ok);
                    }
                    resolve(res.body);
                });
            });
        }
    }
    /**
     * 获取随机数
     * @param  {[type]} l [description]
     * @return {[type]}   [description]
     */
    self.randomChar = function(l) { //获取l位随机数
        var x = "0123456789qwertyioplkjhgfsazxcvbnm";
        var tmp = "";
        for (var i = 0; i < l; i++) {
            tmp += x.charAt(Math.ceil(Math.random() * 100000000) % x.length);
        }
        return tmp;
    }
    /**
     * 弹窗获取随机数，防止缓存
     * @return {[type]} [description]
     */
    self.formRandom = function() {
        return new Date().getTime();
    }
    /**
     * 获取字符串长度，区分中英文
     * @param  {[type]} str [description]
     * @return {[type]}     [description]
     */
    self.getCharLen = function(str) { //获取字符串长度，区分中英文
        return str.replace(/[^\x00-\xff]/g, "rr").length;
    }

    self.subStr = function(s, l, st) { //截取字符串，区分中英文
        var T = false;
        if (tools.getCharLen(s) > l) {
            st = st ? st : '';
            l -= tools.getCharLen(st);
            var S = escape(s);
            var M = S.length;
            var r = '';
            var C = 0;
            for (var i = 0; i < M; i++) {
                if (C < l) {
                    var t = S.charAt(i);
                    if (t == '%') {
                        t = S.charAt(i + 1);
                        if (t == 'u') {
                            r += S.substring(i, i + 6);
                            C += 2;
                            i += 5;
                        } else {
                            r += S.substring(i, i + 3);
                            C++;
                            i += 2;
                        }
                    } else {
                        r += t;
                        C++;
                    }
                } else {
                    T = true;
                    break;
                }
            }
        }
        return T ? unescape(r) + st : s;
    }

    self.getPara = function(name) { //获取url的参数
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return '';
    }

    self.subTime = function(time1, time2) { //计算时间差time2-time1，返回时间差的毫秒数
        var t1 = new Date(time1),
            t2;
        if (time2 == undefined) {
            t2 = new Date(); //当前时间
        } else {
            t2 = new Date(time2);
        }
        return (t2.getTime() - t1.getTime()) / 1000; //时间差的秒数
    }

    //时间格式化
    self.formatTime = function(fmt) { // (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
        // (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
        var t = new Date();
        var o = {
            "M+": t.getMonth() + 1, //月份
            "d+": t.getDate(), //日
            "h+": t.getHours(), //小时
            "m+": t.getMinutes(), //分
            "s+": t.getSeconds(), //秒
            "q+": Math.floor((t.getMonth() + 3) / 3), //季度
            "S": t.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (t.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }
    /**
     * 根据objectid获取时间
     * @param  {[type]} ObjectId [description]
     * @param  {[type]} fmt      [description]
     * @return {[type]}          [description]
     */
    self.getObjectIdTime = function(ObjectId, fmt) {
        var time = parseInt(ObjectId.substring(0, 8), 16);
        var t = new Date(time * 1000);
        var o = {
            "M+": t.getMonth() + 1, //月份
            "d+": t.getDate(), //日
            "h+": t.getHours(), //小时
            "m+": t.getMinutes(), //分
            "s+": t.getSeconds(), //秒
            "q+": Math.floor((t.getMonth() + 3) / 3), //季度
            "S": t.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (t.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }
    /**
     * 获取cookie
     * @param  {[type]} c    [description]
     * @param  {[type]} name [description]
     * @return {[type]}      [description]
     */
    self.getCookie = function(name) {
        var v = "0";
        var t = document.cookie;
        var us = t.split(';');
        for (var i = 0; i < us.length; i++) {
            if ((us[i].split('=')[0]).trim() == name) {
                v = decodeURIComponent(us[i].split('=')[1]);
                break;
            }
        }
        return v;
    }
    //设置cookie，不推荐使用，请在服务器端设置cookie，如需本地存储，请使用本地化存储插件pizza.ui.store.js
    self.setCookie = function(c, s, d) {
        var v = c + '=' + s;
        v += d ? '; max-age=' + (d * 24 * 60 * 60) : '';
        document.cookie = v + ";path=/";
    }
    return self;

}());

module.exports = tools;
