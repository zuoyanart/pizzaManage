<style lang="less">

@import "../assets/index.less";
@import "/node_modules/flexslider/flexslider.less";
</style> <style lang="css">

</style>

<template lang="html">

<div class="">

    <div class="flexslider">
        <ul class="slides">
            <li><img src="../assets/img/1.jpg" /></li>
            <li><img src="../assets/img/2.jpg" /></li>
            <li><img src="../assets/img/3.jpg" /></li>
        </ul>
    </div>
    <div class="item">
        <div>
            <a href="#"><img src="http://static.oppo.com/archives/201612/201612300212245865fb4009681.jpg" alt=""></a>
        </div>
        <div>
            <a href="#"><img src="http://static.oppo.com/archives/201701/2017011106014958760701d13c4.jpg" alt=""></a>
        </div>
        <div>
            <a href="#"><img src="http://static.oppo.com/archives/201701/20170105060105586e22c1aa2cd.jpg" alt=""></a>
        </div>
    </div>

</div>

</template>

<script>

let $ = require("jquery");
window.jQuery = window.$ = $;
require('flexslider');

export default {

    mounted() {
        $('.flexslider').flexslider({
            animation: "slide",
            controlNav: true,
            directionNav: false,
            slideshowSpeed: 5000,
        });
    }
}

</script>
