<style lang="css">

@import "../../assets/css/pizza.css";

</style>
<style lang="less">

@import "./assets/index.less";

</style>
<template lang="html">

<div id="app">
    <div class="header-user">
        <div class="userop">
            <a href="#">登录</a>
            <a href="#">注册</a>
        </div>
    </div>
    <div class="header-menu">
        <div class="header-menu-c">
            <a href="/"><img src="./assets/img/logo.png" alt=""></a>
            <div>
                 <router-link to="/" exact>首页</router-link>
                 <router-link to="/about-1node">关于</router-link>
                 <router-link to="/news">资讯</router-link>
            </div>
        </div>
    </div>
     <router-view></router-view>
    <div class="footer">
      <div class="footer-c">
        © 2005 - 2017 东莞市永盛通信科技有限公司 版权所有 粤ICP备08130115号-1 联系方式：4001-666-888
      </div>
    </div>
</div>

</template>

<script>
// let jQuery = require("jquery");
// let $ = jQuery;
import tools from 'pizzatools';
export default {
    data() {
            return {

            }
        },
        methods: {

        },
        mounted() {

        }
}

</script>
