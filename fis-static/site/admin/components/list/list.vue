<style lang="css">



</style>

<template lang="html">
<div>
    <div class="menu">
        <pzcheckbox name="list" :change="checkAll">全选</pzcheckbox>|<a href="/admin/article/edit">添加</a>|<em class="pass">审核</em>|<em class="remove">删除</em>|
    </div>
    <ul class="list" id="list">
        <li>
            <pzcheckbox name="list" :checked="checked" :change="change" value="1"></pzcheckbox>
            <a href="/content/16673?preview=true" target="_blank">[首页热点推荐] 中超-河南建业1-0河北华夏幸福</a>
            <span><a href="/admin/article/edit?id=16673">编辑</a><i class="comment">评论</i>
            <i class="pass">取消审核</i>
            <i class="remove">删除</i></span>
        </li>
  </ul>
</div>

</template>

<script>
import pzcheckbox from 'pzvue-checkbox';
export default {
  data() {
    return {
        ids: [],//全选获取大的id，
        checked: false,
    }
  },
  props: {

  },
  methods:{
    checkAll: function(value, ischecked) {//全选
      this.checked = ischecked;
    },
    change: function(value, ischecked) {//checkbox change事件
      var index = this.ids.indexOf(value);
      // console.log("msg=" + msg);
      if (ischecked) { //true
          if (index === -1) {
              this.ids.push(value);
          }
      } else {
          this.ids.splice(index, 1);
      }
    },
  },
  components:{
    pzcheckbox
  }
}

</script>
