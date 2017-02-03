<style lang="less">

@import "./nav.less";

</style>

<template lang="html">

<ul class="pz-nav">
    <li v-for="d in data">
         <router-link :to="d.link" >{{d.name}}</router-link>
        <ul v-if="d.data && d.data.length > 0">
            <li v-for="dd in d.data"><a :href="dd.link">{{dd.name}}</a></li>
        </ul>
    </li>
</ul>

</template>

<script>

export default {
    props: {
        data: {
            type: Array,
            default: function() {
                return []
            }
        }
    }

}

</script>
