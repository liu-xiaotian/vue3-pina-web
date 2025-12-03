<template>
  <h1>You did it!</h1>
  <div>mock 数据</div>
</template>
<script setup>
axios.get('/api/user/info').then((res) => {
  console.log(res.data)
})
</script>
<style scoped></style>
