<template lang="html">
  <div class="">
    <topnav></topnav>
    <div class="container">
      <!-- <articlelist></articlelist> -->
      <articlelist v-for="article in articles" :article='article' :key="article._id"></articlelist>
    </div>
  </div>
</template>

<script>
import Topnav from '@/components/Topnav'
import Articlelist from '@/components/Articlelist'
import { mapActions, mapState } from 'vuex'
export default {
  methods: {
    ...mapActions([
      'getAllData'
    ])
  },
  components: {
    Topnav,
    Articlelist
  },
  computed: {
    ...mapState([
      'articles'
    ])
  },
  created () {
    this.getAllData()
  }
}
</script>

<style lang="css">
</style>
