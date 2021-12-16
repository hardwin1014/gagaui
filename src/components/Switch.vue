<template>
<div class="ga-switch" :class="{'is-checked': value}" @click="handleClick">
  <span class="ga-switch_core" ref="core">
    <span class="ga-switch_button"></span>
  </span>
  <input type="checkbox" class="ga-switch_input" :name="name" ref="input">
</div>
</template>

<script>
export default {
  name: 'GaSwitch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  mounted () {
    // 控制CheckBox的值，input值同步value
    this.$refs.input.checked = this.value
    this.setColor()
  },
  watch: {
    'value' (e) {
      // 修改开关的颜色
      if (this.activeColor || this.inactiveColor) {
        const color = !e ? this.activeColor : this.inactiveColor
        this.$refs.core.style.borderColor = color
        this.$refs.core.style.backgroundColor = color
      }
    }
  },
  methods: {
    async handleClick () {
      // 每次点击取反
      this.$emit('input', !this.value)
      console.log(this.value)
      // 数据更新后等待dom更新，再修改按钮的颜色
      await this.$nextTick()
      this.setColor()
    },
    setColor () {
      if (this.activeColor || this.inactiveColor) {
        const color = !this.value ? this.activeColor : this.inactiveColor
        this.$refs.core.style.borderColor = color
        this.$refs.core.style.backgroundColor = color
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.ga-switch{
  display: inline-block;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  vertical-align: middle;
  .ga-switch_core{
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color .3s,background-color .3s;
    vertical-align: middle;
    .ga-switch_button{
      position:absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all .3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
}
// 选中样式
.is-checked {
  .ga-switch_core{
    border-color: #409eff;
    background-color: #409eff;
    .ga-switch_button {
      transform: translateX(20px);
    }
  }
}
// 隐藏input标签
.ga-switch_input{
  position:absolute;
  width: 0;
  height: 0;
  opacity: 0;
  margin: 0;
}
</style>
