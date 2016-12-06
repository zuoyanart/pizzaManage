<style lang="css">



</style>

<template lang="html">
  <div>
    <li @click="click">
        <b class="indent" v-for="a in items.path.length-3"></b>
        <i class="icon-add"></i>
        <em>{{items.name}}</em>
        <span>
          <a href="/admin/tree/edit?id=5">编辑</a>
          <a href="/admin/tree/edit?pid=5">添加子节点</a>
          <i class="ishide">隐藏</i>
      </span>
    </li>
    <treeitem  v-for="doc in items.children" :items="doc" v-if="doc" :handle="handle"></treeitem>
  </div>
</template>

<script>

export default {
    name: "treeitem",
    props: {
        items: {
            default:[]
        },
        handle: {
          type:Object,
          default: function() {
            return {};
          }
        }
    },
    methods: {
      click: function() {
        this.handle["fold"]();
      }
    }
}

</script>
