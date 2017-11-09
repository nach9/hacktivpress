<template lang="html">
  <div class="">
    <topnav></topnav>
    <div class="container">
      <articlelist></articlelist>
    </div>
  </div>
</template>

<script>
import Topnav from '@/components/Topnav'
import Articlelist from '@/components/Articlelist'
export default {
  components: {
    Topnav,
    Articlelist
  }
}
</script>

<style lang="css">
</style>
