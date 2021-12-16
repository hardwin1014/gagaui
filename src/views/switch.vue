<template>
<div>
  <ga-switch name="username" v-model="active" active-color="#13ce66" inactive-color="green"></ga-switch>
</div>
</template>

<script>
export default {
  name: 'switch',
  data () {
    return {
      active: false
    }
  }
}
</script>

<style scoped>

</style>
