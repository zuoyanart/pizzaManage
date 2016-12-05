<style lang="css">



</style>

<template lang="html">
<div id="main">
    <pzlist :docs="datalist"></pzlist>
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
                        link: "/block/edit",
                    },{
                        text: "删除",
                        cls: "del"
                    }],
                    rows: [],
                    button: [{
                        text: "编辑",
                        link: "/block/edit",
                    }, {
                        text: "删除",
                        cls: "del"
                    }],
                },
            };
        },
        async mounted() {
            let doc = await tools.httpAgent("/admin/block/page", "post", { //获取数据
                cp: 1,
                mp: 20,
                kw: "",
            });
            let data = doc.msg;
            for (var i = 0, l = data.length; i < l; i++) {
                this.datalist.rows.push({
                    id: data[i].id,
                    title: data[i].title
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
