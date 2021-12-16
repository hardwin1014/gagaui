<template>
<div class="app">
  <ga-checkbox v-model="active">是否选中</ga-checkbox>
  <ga-checkbox-group v-model="hobby">
    <ga-checkbox label="抽烟">是否选中</ga-checkbox>
    <ga-checkbox label="喝酒">是否选中</ga-checkbox>
    <ga-checkbox label="睡觉">是否选中</ga-checkbox>
  </ga-checkbox-group>
</div>
</template>

<script>
export default {
  name: 'radio-group',
  data () {
    return {
      active: false,
      hobby: ['抽烟', '喝酒', '睡觉']
    }
  }
}
</script>

<style scoped>

</style>
