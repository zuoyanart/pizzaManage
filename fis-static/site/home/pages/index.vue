<style lang="less">
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
    <div class="item" style="background-color:#f2f4f5;">
      <div class="item-c">
          <div class="item-text">
            <h2>漏洞的信息化管理平台</h2>
            <p>通过信息化平台管理漏洞，从根本上改进工作方法，减少80%的工作量，节约80%的时间和成本，让漏洞管理工作说得清，看得见，管得好！</p>
            <br>
            <pzbutton btn="info">查看详情</pzbutton>
          </div>
          <div class="item-img">
            <img src="/site/home/assets/img/4.jpg" alt="">
          </div>
      </div>
    </div>
    <div class="item" style="background-color:#fff;">
      <div class="item-c">
          <div class="item-img">
            <img src="/site/home/assets/img/5.jpg" alt="">
          </div>
          <div class="item-text" style="text-align:right;">
            <h2>交叉扫描与快速测试</h2>
            <p>检测技术必须加大投资，快速检测和响应投资将从目前10%到2020年60%交叉扫描被越来越广泛的使用</p>
            <br>
            <pzbutton btn="info">查看详情</pzbutton>
          </div>
      </div>
    </div>
    <div class="item" style="background-color:#f2f4f5;">
      <div class="item-c">
          <div class="item-text">
            <h2>构建您的漏洞数据库</h2>
            <p>构建并拥有属于自己的独有的漏洞信息数据库，在组织结构视图或业务视图内，进行漏洞生命周期的管理，做自己想做的事情，COOL！</p>
            <br>
            <pzbutton btn="info">查看详情</pzbutton>
          </div>
          <div class="item-img">
            <img src="/site/home/assets/img/6.jpg" alt="">
          </div>
      </div>
    </div>
    <div class="item" style="background-color:#fff;">
      <div class="item-c">
          <div class="item-img">
            <img src="/site/home/assets/img/7.jpg" alt="">
          </div>
          <div class="item-text" style="text-align:right;">
            <h2>感知漏洞态势</h2>
            <p>像感知自己身体一样，去感知一切的漏洞！去感知漏洞的一切！</p>
            <br>
            <pzbutton btn="info">查看详情</pzbutton>
          </div>
      </div>
    </div>
    <div class="item" style="background-color:#f2f4f5;">
      <div class="item-c">
          <div class="item-text">
            <h2>处理海量和重复的漏洞数据</h2>
            <p>化繁为简，和过去的处理方式说再见。轻松管理漏洞数据，让漏洞数据为我所用！</p>
            <br>
            <pzbutton btn="info">查看详情</pzbutton>
          </div>
          <div class="item-img">
            <img src="/site/home/assets/img/8.jpg" alt="">
          </div>
      </div>
    </div>
    <div class="cpdes">
       <div class="cpdes-c">
           <div class="left">
             <h2>公司简介</h2>
             <p>
               北京智言金信信息技术有限公司（以下简称“智言金信”）成立于2012年，是一家专注于信息安全漏洞态势感知、安全测试和评估领域的高科技企业。秉承“专业、专注、合作、共赢”的理念。先后为CNCERT、国家信息安全测评中心、中国通信技术研究院、中国电信、中国工商银行等测评机构、运营商以及金融机构提供态势感知、安全测试产品和服务。智言金信将会在专业化的领域里更加的深入和专注，致力于为中国的信息安全提供更加专业的、领先的产品和服务。<br/>
              智言金信是中关村高新技术企业。通过了ISO9001质量体系认证。并成为国家信息安全漏洞库（CNNVD）首批兼容性认证单位。
             </p>
           </div>
           <div class="right">
             <h2>关注我们</h2>
             <pzbutton  icon="pzicon-qq"  btn="success" size="block">QQ客服</pzbutton>
           </div>
       </div>
    </div>
</div>

</template>

<script>

let $ = require("jquery");
window.jQuery = window.$ = $;
require('flexslider');
import pzbutton from 'pzvue-button';

export default {
  components:{
     pzbutton
  },
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
