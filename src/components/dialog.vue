<template>
  <div class="ga-dialog__wrapper">
    <div class="ga-dialog">
      <div class="ga-dialog__header">
        <slot name="title">
          <span class="ga-dialog__title">{{ title }}</span>
        </slot>
        <button class="ga-dialog__headerbtn">
          <i class="cs-icon-guanbi"></i>
        </button>
      </div>
      <div class="ga-dialog__body">
        <span>这是一段信息</span>
      </div>
      <div class="ga-dialog__footer">
        <ga-buttom>取消</ga-buttom>
        <ga-buttom type="primary">确定</ga-buttom>
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
    &_header{
      padding: 20px 20px 10px;
      .ga-dialog_title{
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .ga-dialog_headerbtn{
        position: absolute;
        top: 20px;
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
    &_body{
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &_footer{
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      ::v-deep .ga-button:first-child{
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
