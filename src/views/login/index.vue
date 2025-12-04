<template>
  <div class="container">
    <el-form class="login-form" :model="loginForm" :rules="loginRules">
      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>
      <el-form-item prop="username">
        <span class="svg-container">
          <SvgIcon name="user"></SvgIcon>
        </span>
        <el-input
          placeholder="请输入用户名"
          name="username"
          type="text"
          v-model="loginForm.username"
        />
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container">
          <SvgIcon name="password"></SvgIcon>
        </span>
        <el-input
          placeholder="请输入密码"
          name="password"
          :type="pwdType"
          v-model="loginForm.password"
        />
        <span class="shwo-pwd" @click="changePwdType">
          <SvgIcon :name="pwdType === 'password' ? 'eye' : 'eye-open'"></SvgIcon>
        </span>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="btn" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import SvgIcon from '@/components/SvgIcon/index.vue'
import { useUserStore } from '@/stores/user'
let useStore = useUserStore()

//model rules prop

const validatorPassword = (rule, value, callback) => {
  if (!value) {
    callback(new Error('请输入密码'))
  }

  const reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/

  if (!reg.test(value)) {
    callback(new Error('密码必须包含字母和数字，且不能少于6位'))
  } else {
    callback()
  }
}

const loginForm = ref({
  username: 'admin',
  password: 'admin888'
})

const loginRules = ref({
  username: [
    {
      required: true,
      trigger: 'blur',
      message: '用户名不能为空'
    }
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      validator: validatorPassword
    }
  ]
})

const pwdType = ref('password')
const changePwdType = () => {
  if (pwdType.value === 'password') {
    pwdType.value = 'text'
  } else {
    pwdType.value = 'password'
  }
}

//登录逻辑
const login = () => {
  useStore.userLogin(loginForm)
}
</script>
<style lang="scss" scoped>
.container {
  height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;
  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
    .title-container {
      position: relative;
      .title {
        font-size: 26px;
        color: $light_gray;
        margin: 0 auto 40px auto;
        text-align: center;
        font-weight: bold;
      }
    }
    .el-form-item {
      border: 1px solid #717171;
      background-color: $bg;
      color: #454545;
    }
    .svg-container {
      padding: 6px 5px 6px 15px;
      color: $dark_gray;
      vertical-align: middle;
      display: inline-block;
      svg {
        width: 16px;
        height: 16px;
        vertical-align: -3px;
        fill: currentColor;
        overflow: hidden;
      }
    }
    .shwo-pwd {
      position: absolute;
      right: 10px;
      top: 7px;
      font-size: 16px;
      color: $dark_gray;
      cursor: pointer;
      user-select: none;
      svg {
        width: 16px;
        height: 16px;
        vertical-align: -3px;
        fill: currentColor;
        overflow: hidden;
      }
    }
    .el-input {
      // display: inline-block;
      // position: absolute;
      // align-items: center;
      // margin-left: 40px;
      height: 47px;
      width: 85%;
      // line-height: 47px;
      // input {
      //   background: transparent;
      //   border: 0px;
      //   border-radius: 0px;
      //   padding: 12px 5px 12px 15px;
      //   color: $light_gray;
      //   height: 47px;
      // }
    }
    // 深度选择器：定位到真正的输入框元素
    :deep(.el-input__wrapper) {
      border: none !important;
      // 💡 提示：如果需要去除聚焦时的蓝色边框/阴影，也需要清除 box-shadow
      box-shadow: none !important;
    }
    .btn {
      width: 100%;
    }
  }
}
</style>
