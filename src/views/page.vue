<template>
<div class="container">
  <button @click="routerBtn('/button')">button组件页面</button>
  <button @click="routerBtn('/dialog')">dialog组件页面</button>
  <button @click="routerBtn('/input')">input组件页面</button>
  <button @click="routerBtn('/switch')">switch组件页面</button>
  <button @click="routerBtn('/radio')">radio组件页面</button>
  <button @click="routerBtn('/checkbox')">checkbox组件页面</button>
  <button @click="routerBtn('/form')">form组件页面</button>
</div>
</template>

<script>
export default {
  name: 'page',
  methods: {
    routerBtn (path) {
      this.$router.push(path)
    }
  }
}
</script>

<style scoped>
.container{
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
}
button{
  padding: 10px;
  margin: 20px;
}
</style>
