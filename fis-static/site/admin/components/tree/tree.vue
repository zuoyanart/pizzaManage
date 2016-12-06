<style lang="scss">

@import "./tree.scss";

</style>

<template lang="html">

<ul class="treelist" id="treelist">
      <p v-for="doc in docs.rows">asd</p>
    <li id="1" path="path,1,"><b class="icon-setting"></b>&nbsp;&nbsp;<em>首页</em><span><a href="/admin/tree/edit?pid=1">添加子节点</a></span></li>
    <treeitem v-for="doc in docs.rows" :items="doc" :handle="handle"></treeitem>

</ul>

</template>

<script>

import treeitem from "./tree-item.vue";

export default {
    data() {
        return {
            nodepath: []
        }
    },
    props: {
        docs: {
            type: Object,
            default: function() {
              return {};
            }
        },
        handle: {
            type: Object,
            default: function() {
              return {};
            }
        }
    },
    method: {

    },
    components:{
      treeitem
    }
}

</script>
