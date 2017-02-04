<style lang="css">

@import "../../assets/css/pizza.css";
/*@import "../../assets/css/iconfont.css";*/
[class^="pzicon-"],
[class*="pzicon-"] {
    font-family:"pzcms" !important;
    font-weight: normal;
    font-style: normal;
    text-decoration: inherit;
    -webkit-font-smoothing: antialiased;
    *margin-right: .3em;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
}

[class^="pzicon-"]:before,
[class*="pzicon-"]:before {
    text-decoration: inherit;
    display: inline-block;
    speak: none;
}
</style>
<style lang="less">

@import "./assets/index.less";

</style>
<template lang="html">

<div id="app">
    <div class="header-menu">
        <div class="header-menu-c">
            <a href="/"><img src="./assets/img/logo.png" alt=""></a>
            <div>
                 <router-link to="/" exact>首页</router-link>
                 <router-link to="/about-1node">关于我们</router-link>
                 <router-link to="/news-4-20list">摄星漏洞态势感知系统</router-link>
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
