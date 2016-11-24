<style lang="css">



</style>

<template lang="html">

<div id="main">
    <pzlist :docs="docs"></pzlist>
</div>

</template>

<script>
import pzlist from '../components/list/list.vue';
import tools from 'pizzatools';
export default {
    data() {
        return {
            docs: []
        }
    },
    async mounted() {
        let doc = await tools.httpAgent("/admin/article/page", "post", {//获取数据
            cp: 1,
            mp: 20,
            kw: "",
            nodeid: 1
        });
        this.docs = doc.msg;
    },
    components: {
        pzlist
    }
}
</script>
