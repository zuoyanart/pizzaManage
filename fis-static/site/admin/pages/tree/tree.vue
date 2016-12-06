<style lang="css">

</style>

<template lang="html">

<div id="main">
    <pztree :docs="datalist" :handle="handle"></pztree>
</div>

</template>

<script>
import pztree from '../../components/tree/tree.vue';
import tools from 'pizzatools';

export default {
    data() {
        return {
            datalist: {
                options: {},
                more: [{
                    text: "添加",
                    link: "/news/create",
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
                    text: "删除",
                    cls: "del"
                }, {
                    text: "评论",
                    link: "/news/comment"
                }, ],
            },
            handle: {}, //传递方法
        };
    },
    async mounted() {
        //获取数据
        let doc = await tools.httpAgent("/admin/tree/page", "post", {
            pid: 1
        });
        let data = doc.msg;
        for (var i = 0, l = data.length; i < l; i++) {
            this.datalist.rows.push({
                id: data[i].id,
                name: data[i].name,
                path: data[i].nodepath.split(','),
                fold: false, //是否展开
            });
        }
        this.datalist.rows[0]["children"] = [{
            id: 1,
            name: "asd",
            path: [1, 2, 3, 4, 5]
        }];
        this.handle = {
            fold: this.fold,
        }
    },
    methods: {
        fold: async function(id) {
            let doc = await tools.httpAgent("/admin/tree/page", "post", {
                pid: 1
            });
            let data = doc.msg;
            let array1 = [];
            for (var i = 0, l = data.length; i < l; i++) {
                array1.push({
                    id: data[i].id,
                    name: data[i].name,
                    path: data[i].nodepath.split(','),
                    fold: false, //是否展开
                });
            }
            this.datalist.rows[1]["children"]=array1;
            this.datalist.rows.push({
              id: 1,
              name: "item",
              path: [1, 2, 3]
            });
            console.log(this.datalist.rows);
        }
    },
    components: {
        pztree
    }
}
</script>
