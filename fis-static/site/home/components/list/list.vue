<template lang="html">
    <div id="main">
        <ul>
            <li v-for="a in getArticles">
                <a :href="a.link" target="_blank">{{a.title}}</a>
            </li>
        </ul>
    </div>
</template>

<script>
import tools from 'pizzatools';
export default {
    data() {
        return {
            articles:[]
        }
    },
    computed:{
        getArticles: function() {
            return this.articles;
        },
    },
    async mounted() {
        let param = this.$route.params;
        let nodeid = param.nodeid;
        let cp = param.cp ? param.cp : 1;
        let article = await tools.httpAgent("/article/page","post",param);
        this.articles = article.news;
    },
}
</script>

<style lang="css">
</style>
