<style lang="css">



</style>

<template lang="html">
    <pzlist :docs="datalist"></pzlist>
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
                    },{
                        text: "审核",
                        cls: "pass"
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
          this.$on('list-page', this.page);
          this.page("", 1, 20);
          this.handle = {
              "del": this.del,
              "pass": this.pass,
          }
        },
        methods: {
          page: async function(kw, cp, mp) {
            if (cp == 1) {
                this.datalist.rows = [];
            }
            let doc = await tools.httpAgent("/admin/guestbook/page", "post", { //获取数据
                cp: cp,
                mp: mp,
                kw: "",
            });
            let data = doc.msg;
            for (var i = 0, l = data.length; i < l; i++) {
                this.datalist.rows.push({
                    id: data[i].gbid,
                    des: data[i].des
                });
            }
          },
            pass: function(id) {
                alert(1);
            }
        },
        components: {
            pzlist
        }
}

</script>
