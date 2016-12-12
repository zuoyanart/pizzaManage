<style lang="css">

</style>

<template lang="html">

<div>
    <div class="menu">
        <pzcheckbox name="list" :change="checkAll">全选</pzcheckbox>|
        <template v-for="b in docs.more">
         <router-link :to="b.link" v-if="b.link && b.link != ''">{{b.text}}</router-link>
          <em :class="b.cls" v-if="!b.link || b.link == ''" @click="click">{{b.text}}</em> |
        </template>
        <input type="search" id="searchkw" @keyup.enter="enter">
    </div>
    <ul class="list" id="list">
        <li v-for="doc in docs.rows">
          <pzcheckbox name="list" :checked="checked" :change="change" :value="doc.id"></pzcheckbox>
          <a :href="doc.link" target="_blank">
            <template v-for="(item, key) in doc">
               {{(key != "link" && key != "button") ? item : ""}}
            </template>
            </a>
            <span @click="click" :id="doc.id">
              <template v-for="b in docs.button">
                <router-link :to="b.link +'/' + doc.id" v-if="b.link && b.link != ''">{{b.text}}</router-link>
                <i :class="b.cls" v-if="!b.link || b.link == ''">{{b.text}}</i>
              </template>
              <template v-for="b in doc.button">
                <router-link :to="b.link +'/' + doc.id" v-if="b.link && b.link != ''">{{b.text}}</router-link>
                <i :class="b.cls" v-if="!b.link || b.link == ''">{{b.text}}</i>
              </template>
            </span>
        </li>
    </ul>
</div>

</template>

<script>

import pzcheckbox from 'pzvue-checkbox';
export default {
    data() {
            return {
                ids: [], //全选获取选中的id，
                checked: false,
                cp:1,
                mp:50
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
              default:function(){
                return {};
              }
            },
        },
        methods: {
            enter: function(event) {
                this.cp = 1;
               this.$parent.$emit("list-page", event.target.value, 1, 1, 50);
            },
            checkAll: function(value, ischecked) { //全选
                this.checked = ischecked;
            },
            change: function(value, ischecked) { //checkbox change事件
                var index = this.ids.indexOf(value);
                if (ischecked) { //true
                    if (index === -1) {
                        this.ids.push(value);
                    }
                } else {
                    this.ids.splice(index, 1);
                }
            },
            click: function(event) {
              let target = event.target;
              let cls = target.className;
              let targetParent = target.parentNode;
              if(target.tagName == "A") {//a标签则返回，不执行任何操作
                return;
              }
              let id = "";
              if(targetParent.className == "menu") {
                 id = this.ids.join(",");
              } else {
                id = targetParent.getAttribute("id");
              }
              if(id.length == 0) {
                return;
              }
              this.handle[event.target.className](id, target.innerText);
            }
        },
        components: {
            pzcheckbox
        }
}

</script>
