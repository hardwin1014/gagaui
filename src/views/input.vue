<template>
  <div class="ga-input">
    <ga-input placeholder="请输入用户名" type="password" name="name" :disabled="true"></ga-input>
    <ga-input placeholder="请输入密码" type="password" name="name" v-model="username2" show-password></ga-input>
    <ga-input placeholder="请输入用户名" name="name" v-model="username" clearable></ga-input>

    <!--v-model的详写-->
<!--    <ga-input :value="username" @input="username = $event.target.value"></ga-input>-->
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      username: '',
      username2: '22'
    }
  }
}
</script>

<style lang="scss" scoped>
.ga-input {
  width: 180px;
}
</style>
