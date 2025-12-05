<template>
  <div>
    <div class="app-main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.app-main {
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 20px;
  box-sizing: border-box;
  margin-top: 30px;
}
</style>
