<template>
  <div class="Ga-radio-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'GaRadioGroup',
  // 祖孙之间传值，上下文
  // 使用provide在父组件中提供一个值，在孙组件中使用inject可以接收到
  provide () {
    return {
      // this当前组件自己
      RadioGroup: this
    }
  },
  props: {
    // 组件接收到了value值，我们需要触发这个组件的input事件
    // provide 与 inject  用来做祖孙之间得组件通讯
    value: null
  }
}
</script>
