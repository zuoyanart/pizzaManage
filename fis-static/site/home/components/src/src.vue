<style lang="less">

@import "./src.less";

</style>

<template lang="html">

<div class="pz-src">
    <template v-for="doc in docs">
        <a :href="doc.link">{{doc.name}}</a>{{gap}}
    </template>
</div>

</template>

<script>

export default {
    props: {
        docs: { //数据
            type: Array,
            default: function() {
                return [];
            }
        },
        gap: { //间隔符
            type: String,
            default: '/'
        }
    }
}

</script>
