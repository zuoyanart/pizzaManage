<template lang="html">
  <i :class="cls" @click="click">{{label}}</i>
</template>

<script>
export default {
  props: {
    label: {
      default:"操作"
    },
    cls: {
      defalt:""
    },
    handle: {
      type: Function,
      default: function(id){

      }
    },
    id: {
      default:0
    }
  },
  methods: {
    click: function(event) {
      handle(id);
    }
  }
}
</script>

<style lang="css">
</style>
