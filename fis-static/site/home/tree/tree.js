/**
 * 模块相关操作
 * @method
 * @param  {[type]} function( [description]
 * @return {[type]}           [description]
 */
var tree = (function() {
  var $ = require('jquery');
  var tools = require('pizzatools');
  var common = require('common/common');
  var my = {};
  var options = {
    url: '/home/tree/',
    tpl: __inline('../ejs/tree.ejs')
  };

  /**
   * 初始化执行函数
   * @method function
   * @return {[type]} [description]
   */
  my.init = function() {
      eventBind(); //绑定所有交互操作
      page(1);
    }
    /**
     * 编辑模块
     * @method function
     * @param  {[type]} obj [description]
     * @return {[type]}     [description]
     */
  my.get = function() {
      var id = tools.getPara("id");
      if (id == "") {
        return;
      }
      $.ajax({
        url: options.url + 'get',
        data: 'id=' + id,
        success: function(msg) {
          console.log(msg.state == true);
          if (msg.state == true) {
            for (var key in msg.msg) {
              $('#' + key).val(msg.msg[key]);
            }
            editor.html(msg.msg.brief);
          }
        }
      });
    }
    /**
     * 编辑模块
     * @method function
     * @param  {[type]} obj [description]
     * @return {[type]}     [description]
     */
  my.edit = function(obj) {
      $(".form").pizzaValidate({
        'fields': {
          '#name': {
            'must': true,
            'minLength': 2,
            'maxLength': 48,
            focusMsg: "请输入标题",
            errMsg: '标题不能为空或标题必须在2-48个字符之间'
          },
          '#link': {
            'must': false,
            'minLength': 5,
            'maxLength': 150,
            focusMsg: "请输入自定义链接(非必填)",
            errMsg: '自定义链接须在5-150个字符之间'
          }

        },
        ajaxFun: function(data) {
          var id = tools.getPara("id");
          var pid = tools.getPara('pid');
          var op = "create";
          if (id != "") {
            op = "update";
            data += '&id=' + id;
          } else {
            data += '&pid=' + pid;
          }
          data += '&brief=' + editor.html()
          $.ajax({
            url: options.url + op,
            data: data,
            success: function(msg) {
              if (msg.state == true) {
                history.back();
              }
            }
          });
        }
      });
    }
    /**
     * 获取模块列表
     * @method page
     * @return {[type]} [description]
     */
  function page(pid) {
    var o = $('#' + pid);
    $.ajax({
      url: options.url + 'page',
      data: 'pid=' + pid,
      success: function(msg) {
        var s = options.tpl({
          "data": msg.msg
        });
        o.after(s);
      }
    });
  }
  /**
   * 操作事件绑定
   * @method eventBind
   * @return {[type]}  [description]
   */
  function eventBind() {
    $('#treelist').on('click', 'li > i', function() {
      var o = $(this);
      var cl = o.attr('class');
      var oparent = o.parent();
      var id = oparent.attr('id');
      var subli = $('.pid' + id);

      if (cl.indexOf('icon-add') > -1) { //展开子集
        o.removeClass('icon-add').addClass('icon-sub');
        if (subli.length > 0) {
          subli.removeClass('display');
        } else {
          page(id);
        }
      } else { //缩回子集
        o.removeClass('icon-sub').addClass('icon-add');
        displaySubNode(oparent,'hide');
      }
    });
  }
  /**
   * 显示或者隐藏所有子节点
   * @method displaySubNode
   * @param  {[type]}       pidObj [description]
   * @return {[type]}              [description]
   */
  function displaySubNode(pidObj, isdisplay) {
    var node = pidObj.nextAll();
    var nodepath = pidObj.attr('path');
    var subnode;
    var action = {};
    action.show = function(obj) {
      console.log(obj);
      obj.removeClass('display');
    }
    action.hide = function(obj) {
      obj.addClass('display');
      obj.children('i').removeClass('icon-sub').addClass('icon-add');
    }

    node.each(function() {
      subnode = $(this);
      if($(this).attr('path').indexOf(nodepath) > -1) {
        action[isdisplay].call(this,subnode);
      }
    });
  }


  return my;
}());

module.exports = tree;
