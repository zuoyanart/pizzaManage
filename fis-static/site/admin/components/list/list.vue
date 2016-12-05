<style lang="css">

</style>

<template lang="html">

<div>
    <div class="menu">
        <pzcheckbox name="list" :change="checkAll">全选</pzcheckbox>|
        <template v-for="b in docs.more">
          <a :href="b.link" v-if="b.link && b.link != ''">{{b.text}}</a>
          <i :class="b.cls" v-if="!b.link || b.link == ''">{{b.text}}</i> |
        </template>
    </div>
    <ul class="list" id="list">
        <li v-for="doc in docs.rows">
          <pzcheckbox name="list" :checked="checked" :change="change" :value="doc.id"></pzcheckbox>
          <a :href="doc.link" target="_blank">
            <template v-for="(item, key) in doc">
               {{key != "link" ? item : ""}}
            </template>
            </a>
            <span @click="click">
              <template v-for="b in docs.button">
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
import column from './list-column.vue';
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
              // router.push("");
            }
        },
        components: {
            pzcheckbox,
            column
        }
}

</script>
