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
                ids: [], //全选获取大的id，
                checked: false,
            }
        },
        props: {
            docs: {
                type: Array,
                default: []
            },
            handle: {
              type: Object,
              default:{}
            }
        },
        methods: {
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
              // console.log("class=" + event.target.className);
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
              console.log(id);
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
