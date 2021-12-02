<template>
  <div>
<!--    各种类型-->
    <div class="row">
      <ga-button @click="fn">登录</ga-button>
      <ga-button type="primary">注册</ga-button>
      <ga-button type="success">我的</ga-button>
      <ga-button type="info">点击</ga-button>
      <ga-button type="warning">点击</ga-button>
      <ga-button type="danger">点击</ga-button>
    </div>

<!--    朴素-->
    <div class="row">
      <ga-button plain>登录</ga-button>
      <ga-button plain type="primary">注册</ga-button>
      <ga-button plain type="success">我的</ga-button>
      <ga-button plain type="info">点击</ga-button>
      <ga-button plain type="warning">点击</ga-button>
      <ga-button plain type="danger">点击</ga-button>
    </div>

    <!-- 默认-->
    <div class="row">
      <ga-button disabled plain>登录</ga-button>
      <ga-button disabled plain type="primary">注册</ga-button>
      <ga-button disabled plain type="success">我的</ga-button>
      <ga-button disabled plain type="info">点击</ga-button>
      <ga-button disabled plain type="warning">点击</ga-button>
      <ga-button disabled plain type="danger">点击</ga-button>
    </div>

<!--    圆角-->
    <div class="row">
      <ga-button round plain>登录</ga-button>
      <ga-button icon="cs-icon-guanbi" round plain type="primary">注册</ga-button>
      <ga-button round plain type="success">我的</ga-button>
      <ga-button round plain type="info">点击</ga-button>
      <ga-button round plain type="warning">点击</ga-button>
      <ga-button round plain type="danger">点击</ga-button>
    </div>

<!--    圆形按钮-->
    <div class="row">
      <ga-button circle>拆</ga-button>
      <ga-button circle type="primary">拆</ga-button>
      <ga-button circle type="success">拆</ga-button>
      <ga-button circle type="info">拆</ga-button>
      <ga-button circle type="warning">拆</ga-button>
      <ga-button circle type="danger">拆</ga-button>
    </div>
    <!--    图标-->
    <div class="row">
      <ga-button icon="cs-icon-search" circle></ga-button>
      <ga-button icon="cs-icon-search" circle type="primary"></ga-button>
      <ga-button icon="cs-icon-search" circle type="success"></ga-button>
      <ga-button icon="cs-icon-search" circle type="info"></ga-button>
      <ga-button icon="cs-icon-search" circle type="warning"></ga-button>
      <ga-button icon="cs-icon-search" circle type="danger"></ga-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    fn () {
      console.log(12)
    }
  }
}
</script>
<style lang="scss" scoped>
.row{
  margin-bottom: 20px;
  .one-button{
    margin-right: 20px;
  }
}
</style>
