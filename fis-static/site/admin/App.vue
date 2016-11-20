<style lang="css">
  @import "../../css/pizza.css";
</style>
<style lang="scss">
  @import "./assets/sass/base.scss";
</style>


<template lang="html">

<div id="app">

    <div id="header">
        <h1><i class="icon-pizza"></i>Pizza Admin</h1>
    </div>
    <div id="user-nav">
        <ul>
            <li><i class="icon-person"></i><span id="userinfo"></span></li>
            <li><a href="javascript:void(0);" id="loginout"><i class="icon-loginout"></i>退出</a></li>
        </ul>
    </div>
    <div id="search">
        <input type="search" id="searchkw">
    </div>
    <div id="sidebar" @click="slider">
        <ul>
            <li>
                <router-link to="/admin" class="active"><i class="icon-home"></i>主页</router-link>
            </li>
            <li>
                <a class="submenu" data="news"><i class="icon-article"></i>信息管理</a>
                <ul v-show="show.news">
                    <li><a href="/admin/tree">节点管理</a></li>
                    <li><router-link to="/news">文章管理</router-link></li>
                    <li><a href="/admin/block">模块管理</a></li>
                </ul>
            </li>
            <li>
                <a href="#" class="submenu" data="hudong"><i class="icon-setting"></i>互动管理</a>
                <ul  v-show="show.hudong">
                    <li><a href="/admin/guestbook">留言板管理</a></li>
                    <!-- <li><a href="/admin/usergroup">用户组管理</a></li> -->
                    <!-- <li><a href="/admin/power">权限分配</a></li> -->
                </ul>
            </li>
            <li>
                <a href="#" class="submenu" data="system"><i class="icon-setting"></i>系统管理</a>
                <ul  v-show="show.system">
                    <li><a href="/admin/user">管理员管理</a></li>
                    <!-- <li><a href="/admin/usergroup">用户组管理</a></li> -->
                    <!-- <li><a href="/admin/power">权限分配</a></li> -->
                </ul>
            </li>
        </ul>
    </div>
    <!-- <div id="main"> -->
    <router-view></router-view>
    <!-- </div> -->
    <div class="row-fluid"></div>
</div>

</template>

<script>

export default {
  data(){
    return {
      show: {
        news:false,
        hudong:false,
        system:false,
      }
    }
  },
  methods: {
    slider: function(event) {
      let o = event.target;
      let style = o.getAttribute("class");
      if(style.indexOf("submenu") > -1) {//带子菜单的父对象
        let data = o.getAttribute("data");
        this.$data.show[data] = !this.$data.show[data];
      } else {
        
      }
    },
  }
}

</script>
