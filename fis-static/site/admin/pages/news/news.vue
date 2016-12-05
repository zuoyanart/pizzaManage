<style lang="css">



</style>

<template lang="html">

<div id="main">
    <pzlist :docs="datalist">
        <template>
            <column label="审核" cls="pass" :handle="pass"></column>
        </template>
    </pzlist>
</div>

</template>

<script>

import pzlist from '../../components/list/list.vue';
import tools from 'pizzatools';

export default {
    data() {
            return {
                datalist: {
                    options: {},
                    more: [{
                        text: "添加",
                        link: "http://www.baidu.com",
                    }, {
                        text: "审核",
                        cls: "pass"
                    }, {
                        text: "删除",
                        cls: "del"
                    }],
                    rows: [],
                    button: [{
                        text: "编辑",
                        link: "/news/edit",
                    }, {
                        text: "审核",
                        cls: "pass"
                    }, {
                        text: "删除",
                        cls: "del"
                    }, {
                        text: "评论",
                        cls: "comment"
                    }, ],
                },
            };
        },
        async mounted() {
            let doc = await tools.httpAgent("/admin/article/page", "post", { //获取数据
                cp: 1,
                mp: 20,
                kw: "",
                nodeid: 1
            });
            let data = doc.msg;
            for (var i = 0, l = data.length; i < l; i++) {
                this.datalist.rows.push({
                    id: data[i].id,
                    nodename: "[" + data[i].nodename + "]",
                    title: data[i].title,
                    link: '/content/' + data[i].id + '?preview=true'
                });
            }
        },
        methods: {
            pass: function(id) {
                alert(1);
            }
        },
        components: {
            pzlist
        }
}

</script>
