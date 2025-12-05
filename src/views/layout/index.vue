<template>
  <div class="wrapper">
    <sidebar />
    <div class="container">
      <div class="header">
        <navbar />
      </div>
      <mymain />
    </div>
  </div>
</template>

<script setup>
import Mymain from '@/views/layout/components/Main.vue'
import Navbar from '@/views/layout/components/Navbar.vue'
import Sidebar from '@/views/layout/components/Sidebar/index.vue'
import { getUserList } from '@/api/user'
// import { onMounted } from 'vue'

// onMounted(async () => {
//   const res = await getUserList()
//   console.log(res)
// })
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  width: 100%;
  width: 100%;
}
.header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 999;
  width: calc(100% - 220px);
}
</style>
