<template>
  <div class="container">
    <ga-dialog title="温馨提示"></ga-dialog>
    <ga-dialog>
      <template v-slot:title>
        <h3>我是标题</h3>
      </template>
    </ga-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="scss">

</style>
