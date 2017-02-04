<style lang="less">

@import "./menu.less";

</style>

<template lang="html">

<ul class="pz-nav" @click="menuclick">
    <li v-for="(d,index) in data">
        <router-link :to="d.link" :index="index">{{d.name}}1</router-link>
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
        },
        click: {
          type:Function,
          default: function(){}
        }
    },
    methods: {
      menuclick: function(event) {
        console.log(event.target);
        this.click(event, event.target.getAttribute("index"));
      }
    }

}

</script>
