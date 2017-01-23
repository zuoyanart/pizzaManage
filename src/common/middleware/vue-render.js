'use strict';
/**
 * middleware
 */
// import Vue from 'vue';
global.Vue = require('vue')
import vueServerRenderer from 'vue-server-renderer';
process.env.VUE_ENV = 'server'; // // 配置 vue 的环境变量，告诉 vue 是服务端渲染，就不会做耗性能的 dom-diff 操作了
import path from 'path';
const renderer = require('vue-server-renderer').createRenderer();
import fs from 'fs';
const jsdom     = require('jsdom').jsdom
//...
global.document = jsdom('<!doctype html><html><body></body></html>', { url: 'http://localhost' });
global.window   = document.defaultView;
global.navigator = window.navigator;
global.define = function(id, f) {f()};


export default class extends think.middleware.base {
        /**
         * 初始化 配置参数
         * @param {HTTP} http http object
         * @return {undefined}
         */

        init(http) {
            super.init(http);
            let defaultOption = {
                extension: '.vue',
                'root_path': 'component',
                'lower_name': true,
                'left_delimiter': '{',
                'right_delimiter': '}',
                'rootElement': '<App></App>',
                'replace': true
            };

            this.option = think.extend(defaultOption, this.config('vue_render'));

            if (this.option.jsx) {
                require('node-jsx').install({
                    extension: this.option.extension
                });
            }
        }

        async renderToString(app) {
            var renderPromise = think.promisify(renderer.renderToString, renderer);
            return renderPromise(app);
        }

        renderToString1(code, options) {
            // let renderer1 = require('vue-server-renderer').createBundleRenderer(code);
            // let renderPromise = think.promisify(renderer1.renderToString, renderer1);
            // return renderPromise(options);

            let renderPromise = new Promise(function(resolve, reject) {
                let renderer1 = require('vue-server-renderer').createBundleRenderer(code);
                renderer1.renderToString(code, function(err, html) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(html);
                    }
                });
            });
            return renderPromise;
        }

        async parse(content, data) {

            // let scriptArea = content.match(/<script.*id=['"]ssr["'].*>[\w\W]*<\/script>/gim);
            let scriptArea = content.match(/<script.*id=['"]ssr["'].*>[\w\W]*<\/script>/gim);
            if (scriptArea) {
                scriptArea = scriptArea[0].match(/src=[\'\"]?([^\'\"]*)[\'\"]?/i);
                let appPath = think.RESOURCE_PATH + scriptArea[1];
                console.log(appPath);
                // console.log(require(appPath));
                let app = require(appPath);
                // console.log("app" + app);

                // let code = fs.readFileSync(appPath, 'utf8');
                // code = code.replace('define('site/home/app1.vue', function(require, exports, module) {', '');
                // code = code.substring(0, code.length - 3);
                // const bundleRenderer = vueServerRenderer.createBundleRenderer(code);

                try {
                    let appExt = Vue.extend(app);
                    let result = await this.renderToString(new appExt(data));

                        // let result = await this.renderToString1(app,{
                        //   // title:"asd655868"
                        // });
                        //
                        return content.replace('<div id="app"></div>', result);
                    }
                    catch (e) {
                        console.error(e);
                        return this.http.fail(500, 'Server Error');;
                    }
                } else {
                    return content;
                }
            }

            stream() {
                // 流式响应保留
            }

            /**
             * run
             * @return {} []
             */
            async run(content) {
              this.tVar = this.http._view.tVar;
              this.data = this.tVar;
              delete this.data["_"];
              delete this.data["controller"];
              delete this.data["config"];
              delete this.data["http"];

              // console.log(this.http._view.tVar);
              // console.log(this.data);
                try {
                    let result = await this.parse(content, {
                      data: this.data
                    });
                    return result;
                } catch (e) {
                    console.error(e);
                    return this.http.fail(500, 'Server Error');
                }

            }
        }
