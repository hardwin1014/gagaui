<template>
<ga-form :model="model">
  <ga-form-item label="用户名">
    <ga-input placeholder="请输入用户名" name="name" v-model="model.username" clearable></ga-input>
  </ga-form-item>
</ga-form>
</template>

<script>
export default {
  name: 'form',
  data () {
    return {
      model: {
        username: '11111'
      }
    }
  }
}
</script>

<style scoped>

</style>
