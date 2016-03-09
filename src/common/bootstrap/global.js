/**
 * this file will be loaded before server started
 * you can define global functions used in controllers, models, templates
 */

/**
 * use global.xxx to define global functions
 *
 * global.fn1 = function(){
 *
 * }
 */
import tools from '../../home/tools/tools.js';
import config from '../config/config.js';

   global.articles = async function(promises) {
    let result = await Promise.all(promises);
    return result;
  }

  global.pageArticle = (nodeid, kw, cp, mp) => {
    return tools.httpAgent(config.api + 'article/page', "post", "kw=" + kw + "&cp=" + cp + "&mp=" + mp + "&nodeid=" + nodeid);
  }
