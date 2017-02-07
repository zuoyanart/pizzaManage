<style lang="less">

@import "./page.less";

</style>

<template lang="html">
  <div class="pz-turnpage">
    <!-- 首页、上一页、下一页，数字，末页 -->
     <template v-if="pageType == 'hunde'">

    </template>
    <!-- 首页、上一页、下一页 -->
    <template v-if="pageType == 'hud'">

    </template>
    <!-- 首页、上一页、下一页 -->
    <template  v-if="pageType == 'hud'">

    </template>
  </div>
</template>

<script>

export default {
  props: {
    pageType: {
       type: String,
       default: "hunde"
    },
    changePage: {//切换翻页
      type: Function,
      default: function(){}
    },
    sum: {//总条数
      type: Number,
      default:0
    },
    total: {//总页数
      type: Number,
      default:0
    },
    mp: {
      type: Number,
      default:20
    }
  },
  methods: {

  },
  computed: {

  }
}

</script>
