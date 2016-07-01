define('admin/module', function(require, exports, module) {

  /**
   * 模块相关操作
   * @method
   * @param  {[type]} function( [description]
   * @return {[type]}           [description]
   */
  'use strict';
  
  var block = (function () {
      var $ = require('jquery');
      var tools = require('pizzatools');
      var common = require('common/common');
      var my = {};
      var options = {
          url: '/admin/block/',
          tpl: "<%for(var i=0,ll=data.length; i<ll; i++) { %>\r\n  <li>\r\n    <label class=\"checkgroup\">\r\n      <input type=\"checkbox\" id=\"block_<%= data[i].id%>\" name=\"checkall\"><label for=\"block_<%= data[i].id%>\" class=\"check-all\"></label>\r\n    </label>\r\n    <a href=\"javascript:void(0);\"><%= data[i].title%></a>\r\n    <span><a href=\"/admin/block/edit?id=<%= data[i].id%>\">编辑</a><i class=\"remove\">删除</i></span>\r\n  </li>\r\n<%}%>\r\n",
          cp: 1,
          mp: 20
      };
      var isScroll = true;
  
      /**
       * 初始化执行函数
       * @method function
       * @return {[type]} [description]
       */
      my.init = function () {
          eventBind(); //绑定所有交互操作
          page(1); //
          scrollEvent(); //绑定滚动条事件
          common.checkAll('#checkall'); //checkall
          common.kwSearch('#searchkw', function () {
              page(1);
          });
      };
      /**
       * 编辑模块
       * @method function
       * @param  {[type]} obj [description]
       * @return {[type]}     [description]
       */
      my.get = function () {
          var id = tools.getPara("id");
          if (id == "") {
              return;
          }
          $.ajax({
              url: options.url + 'get',
              data: 'id=' + id,
              success: function success(msg) {
                  if (msg.state == true) {
                      for (var key in msg.msg) {
                          $('#' + key).val(msg.msg[key]);
                      }
                      editor.html(msg.msg.content);
                  }
              }
          });
      };
      /**
       * 编辑模块
       * @method function
       * @param  {[type]} obj [description]
       * @return {[type]}     [description]
       */
      my.edit = function (obj) {
          $(".form").pizzaValidate({
              'fields': {
                  '#title': {
                      'must': true,
                      'minLength': 5,
                      'maxLength': 48,
                      focusMsg: "请输入标题",
                      errMsg: '标题不能为空或标题必须在5-48个字符之间'
                  }
              },
              ajaxFun: function ajaxFun(data) {
                  var id = tools.getPara("id");
                  var op = "create";
                  if (id != "") {
                      op = "update";
                      data += "&id=" + id;
                  }
                  data += '&content=' + editor.html();
                  $.ajax({
                      url: options.url + op,
                      data: data,
                      success: function success(msg) {
                          if (msg.state == true) {
                              history.back();
                          }
                      }
                  });
              }
          });
      };
      /**
       * 获取模块列表
       * @method page
       * @return {[type]} [description]
       */
      function page(cp, mp) {
          if (cp) {
              options.cp = cp;
          }
          $.ajax({
              url: options.url + 'page',
              data: 'cp=' + options.cp + '&mp=' + options.mp + '&kw=' + $.trim($('#searchkw').val()),
              success: function success(msg) {
                  var s = new EJS({
                      text: options.tpl
                  }).render({
                      data: msg.msg
                  });
  
                  if (cp == 1) {
                      $('#list').html(s);
                  } else {
                      $('#list').append(s);
                  }
                  options.cp += 1;
                  isScroll = true;
              }
          });
      }
      /**
       * 操作事件绑定
       * @method eventBind
       * @return {[type]}  [description]
       */
      function eventBind() {
          $('#list').on('click', 'li > span > i', function () {
              var cl = $(this).attr('class');
              console.log(cl);
              if (cl) {
                  action[cl].call(this, $(this));
              }
          });
          $('#main > div.menu').on('click', 'em', function () {
              var cl = $(this).attr('class');
              if (cl) {
                  action[cl].call(this, $(this));
              }
          });
      }
      /**
       * 滚动条滚动事件
       * @method scrollEvent
       * @return {[type]}    [description]
       */
      function scrollEvent() {
          $(window).scroll(function () {
              var docHeight = document.body.scrollHeight;
              var scrollTop = 0; //滚动条高度
              if (document.documentElement && document.documentElement.scrollTop) {
                  scrollTop = document.documentElement.scrollTop;
              } else if (document.body) {
                  scrollTop = document.body.scrollTop;
              }
              var bottomHeight = docHeight - scrollTop - $(window).height();
              //console.log(bottomHeight);
              //console.log(isScroll);
              if (bottomHeight < 100 && isScroll == true) {
                  page();
                  isScroll = false;
              }
          });
      }
      /////action
      var action = {};
      /**
       *
       * @method remove
       * @return {[type]} [description]
       */
      action.remove = function (obj) {
          var id = common.getCheckId(obj);
          if (id == '0') {
              return;
          }
          layer.confirm("确定要删除该模块吗？", {
              icon: 3,
              title: '警告'
          }, function (index) {
              $.ajax({
                  url: options.url + 'remove',
                  data: 'id=' + id,
                  success: function success(msg) {
                      if (msg.state == true) {
                          var ids = id.split(',');
                          layer.close(index);
                          for (var i = 0, ll = ids.length; i < ll; i++) {
                              $('#block_' + ids[i]).parent().parent().remove();
                          }
                      }
                  }
              });
          });
      };
  
      return my;
  })();
  
  module.exports = block;
  //# sourceMappingURL=/static/site/admin/module.js.map
  

});
