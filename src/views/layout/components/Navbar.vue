<template>
  <div class="navbar">
    <div class="right-menu">
      <el-dropdown>
        <div class="avatar-wrapper">
          <el-avatar shape="square" :size="size" :src="useStore.avatar"></el-avatar>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <router-link to="/home" />
            <el-dropdown-item>首页</el-dropdown-item>
            <router-link />
            <el-dropdown-item divided>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/user'
let useStore = useUserStore()
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  .right-menu {
    display: flex;
    align-items: center;
    float: right;
    padding-right: 20px;
    .avatar-wrapper {
      cursor: pointer;
      margin-top: 10px;
      // position: relative;
      .el-avatar {
        margin-right: 12px;
      }
    }
  }
}
</style>
