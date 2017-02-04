<template lang="html">
    <div id="main">
        <div class="list-left">
            <nav1 :data="data" :click="getDataEvent"></nav1>
        </div>
        <ul class="list-right">
            <li v-for="a in articles">
                <a :href="a.link">{{a.title}}</a>
            </li>
        </ul>
        <div style="clear:both;"></div>
    </div>
</template>

<script>
import tools from 'pizzatools';
import nav from '../components/nav/nav.vue';
export default {
    data() {
        return {
            articles: [],
            data:[]
        }
    },
    async mounted() {
        let param = this.$route.params;
        let nodeid = param.nodeid;
        let cp = param.cp ? param.cp : 1;
        await this.getData(nodeid, cp, 20);
    },
    methods: {
        getData: async function(nodeid, cp, mp) {
            let article = await tools.httpAgent("/ajax/article/page", "post", {
                nodeid: nodeid,
                cp:cp,
                mp:mp
            });
            this.articles = article.news;
            this.data = article.nodelist;
        },
        getDataEvent: function(event,index) {
          let href = event.target.getAttribute("href");
          let item = href.split('-');
          this.getData(item[1], 1, item[2].replace('list',''));
        }
    },
    components: {
        nav1:nav
    }
}
</script>

<style lang="less">
.list-right{
    width: 1000px;
    float: left;
}
.list-left{
    width:100px;
    float: left;
}
</style>
