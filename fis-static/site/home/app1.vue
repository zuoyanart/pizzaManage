<template lang="html">
  <div>
  asasd{{title}}
  <pzbutton :disabled="true">按钮</pzbutton>
</div>
</template>

<script>

import pzbutton from 'pzvue-button';
export default {
  data: function() {
    return {

    }
  },
  props: {

  },
  comppnents: {
    pzbutton
  }
}
</script>

<style lang="css">
</style>
