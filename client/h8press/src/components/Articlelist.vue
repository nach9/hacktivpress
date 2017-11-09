<template lang="html">
  <div class="panel panel-primary">
    <div class="panel-heading">
      <h3 class="panel-title">{{article.title}}</h3>
    </div>
    <div class="panel-body">
      <p>{{article.content}}</p>
      <router-link to="" class="btn btn-warning btn-sm">Detail</router-link>
    </div>
  </div>

</template>

<script>
export default {
  props: ['article']
}
</script>

<style lang="css">
</style>
