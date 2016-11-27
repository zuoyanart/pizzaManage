<style lang="css">



</style>

<template lang="html">

<div id="main">
    <pzlist :docs="docs">
      <template>
       <column label="审核" cls="pass" :handle="pass"></column>
     </template>
    </pzlist>
</div>

</template>

<script>
import pzlist from '../components/list/list.vue';
import column from '../components/list/list-column.vue';
import tools from 'pizzatools';

export default {
    data() {
        return {
            docs: {
              data:[],
              title: {
                len:2,
                title:["nodename", "title"]
              },
              option:[{
                cls:"pass",
                label: "审核"
              },{
                cls: "del",
                label:"删除"
              }]
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
        this.docs.data = doc.msg;
    },
    methods: {
        pass: function(id) {
            alert(1);
        }
    },
    components: {
        pzlist,
        column
    }
}
</script>
