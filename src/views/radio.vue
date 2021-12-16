<template>
  <div id="app">
<!--    <ga-radio label="1" v-model="gender">男</ga-radio>-->
<!--    <ga-radio label="0" v-model="gender">女</ga-radio>-->
    <ga-radio-group v-model="gender">
      <ga-radio label="1">男</ga-radio>
      <ga-radio label="0">女</ga-radio>
    </ga-radio-group>
  </div>
</template>

<script>
export default {
  name: 'radio',
  data () {
    return {
      gender: '1'
    }
  }
}
</script>

<style scoped>

</style>
