<style lang="css">



</style>

<template lang="html">

<div>
    <src :docs="nodelist"></src>
    <h2>{{article.title}}</h2>
    <div class="" v-html="article.content">

    </div>
</div>

</template>

<script>

import src from '../components/src/src.vue';
import tools from 'pizzatools';
export default {

    data(){
        return{
            article:{},
            nodelist:[]
        }
    },
    components: {
        src: src
    },
    computed: {
        getArticle: function() {
            return this.article;
        }
    },
    async mounted() {
        let param = this.$route.params;
        let content = await tools.httpAgent("/ajax/article/get", 'post', 'id=' + param.id);
        this.article = content.article;
        this.nodelist = content.nodelist;
    }
}

</script>
