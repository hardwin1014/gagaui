<template>
  <div class="one-checkbox-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'GaCheckboxGroup',
  provide () {
    return {
      // 代表整个组件
      CheckboxGroup: this
    }
  },
  props: {
    value: {
      type: Array
    }
  }
}
</script>
