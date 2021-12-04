<template>
  <div class="container">
    <ga-button @click="visible = true">按钮</ga-button>
<!--    <ga-dialog title="温馨提示"></ga-dialog>-->
<!--    <ga-dialog>-->
<!--      <template v-slot:title>-->
<!--        <h3>我是标题</h3>-->
<!--      </template>-->
<!--    </ga-dialog>-->

      <!--.sync修饰符-->
      <ga-dialog width="60%" top="10vh" :visible="visible" @close = "close">
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
      visible: true
    }
  },
  methods: {
    close (value) {
      this.visible = value
    }
  }
}
</script>

<style scoped lang="scss">

</style>
