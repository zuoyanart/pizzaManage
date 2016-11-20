<template lang="html">
  <pzbutton @click.native="a">提交</pzbutton>
</template>

<script>
import pzbutton from 'pzvue-button';
export default {
  methods: {
     a: function() {
       this.$layer.alert(2);
     }
  },
    components:{
      pzbutton
    }
}
</script>


<style lang="css">

</style>
