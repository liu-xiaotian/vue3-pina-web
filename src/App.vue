<template>
  <h1>axios 调用</h1>
</template>
<script setup>
import { getUserList } from './api/user'
import { onMounted } from 'vue'

onMounted(async () => {
  const res = await getUserList()
  console.log(res)
})
</script>
<style scoped></style>
