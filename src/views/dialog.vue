<template>
  <div class="container">
    <ga-button @click="visible = true">按钮</ga-button>

      <!--.sync修饰符-->
      <ga-dialog width="60%" top="10vh" :visible.sync="visible">
        大家好
      <template v-slot:footer>
        <ga-button @click="visible = false">取消</ga-button>
        <ga-button @click="visible = false" type="primary">确定</ga-button>
      </template>
      </ga-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      visible: false
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">

</style>
