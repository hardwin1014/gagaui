<template>
<div class="ga-input" :class="{ 'ga-input-suffix': showSuffix}">
  <!--通过控制showPassword 是否显示，来判断要不要加type,type显示使用data中定义的变量来控制-->
  <input class="ga-input_inner"
         :class="{'is-disabled':disabled}"
         :placeholder="placeholder"
         :type="showPassword ? (passwordVisible ? 'text':'password'):type"
         :name="name"
         :disabled="disabled"
         :value="value"
         @input="handleInput"
  >
  <span class="ga-input_suffix">
    <i class="cs-icon-guanbi" v-if="clearable" @click="clear"></i>
    <i class="cs-icon-yanjing" v-if="showPassword" @click="handlePassword"
       :class="{ 'ga-icon-view-active': passwordVisible }"></i>
  </span>
</div>
</template>

<script>
export default {
  name: 'GaInput',
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      // 用于控制是否显示密码框
      passwordVisible: false
    }
  },
  methods: {
    // 父组件中的input事件，v-model语法糖
    handleInput (e) {
      this.$emit('input', e.target.value)
    },
    clear () {
      // 内容清空
      this.$emit('input', '')
    },
    handlePassword () {
      this.passwordVisible = !this.passwordVisible
    }
  },
  computed: {
    showSuffix () {
      return this.clearable || this.showPassword
    }
  }
}
</script>

<style lang="scss" scoped>
.ga-input{
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .ga-input_inner{
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,045,.355,1);
    width: 100%;
    &:focus{
      outline: none;
      border-color: #409eff;
    }
    // input禁用样式
    &.is-disabled{
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor:not-allowed;
    }
  }
}
// 后面加suffix的意思是后面如果有后缀的话，触发该样式
  .ga-input_inner{
    padding-right: 30px;
  }
  .ga-input_suffix{
    position: absolute;
    right: 10px;
    height: 100%;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all .3s;
    z-index: 900;
    i{
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color .2s cubic-bezier(.645,.045,.355,1);
    }
  }
</style>
