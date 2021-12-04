<template>
  <!--遮罩层  .self点击自己才触发，点击子元素不触发 -->
  <div class="ga-dialog_wrapper" v-show="visible" @click.self="handleClose">
    <div class="ga-dialog" :style="{width:width,marginTop:top}">
      <div class="ga-dialog_header">
        <slot name="title">
          <span class="ga-dialog_title">{{ title }}</span>
        </slot>
        <button class="ga-dialog_headerbtn" @click="handleClose">
          <i class="cs-icon-guanbi"></i>
        </button>
      </div>
      <div class="ga-dialog_body">
        <slot></slot>
      </div>
      <div class="ga-dialog_footer" v-if="$slots.footer">
        <!-- 具名插槽-->
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GaDialog',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '50%'
    },
    top: {
      type: String,
      default: '15vh'
    },
    visible: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {

    }
  },
  methods: {
    handleClose () {
      this.$emit('close', false)
    }
  }
}
</script>

<style scoped lang="scss">
.ga-dialog_wrapper{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0,0,0,0.5);
  .ga-dialog{
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.3);
    box-sizing: border-box;
    width: 30%;
    .ga-dialog_header{
      padding: 20px 20px 10px;
      .ga-dialog_title{
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .ga-dialog_headerbtn{
        position: absolute;
        top: 23px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .cs-icon-close{
          color:#909399
        }
      }
    }
    .ga-dialog_body{
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    .ga-dialog_footer{
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      ::v-deep .one-button:first-child{
        margin-right: 20px;
      }
    }
  }
}
.dialog-fade-enter-active{
  animation: fade .3s;
}
.dialog-fade-leave-active{
  animation: fade .3s reverse;
}
@keyframes fade{
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100%{
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
