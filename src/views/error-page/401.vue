<template>
  <div class="errPage-container flex l-center v-middle">
    <div class="content">
      <h2 class="title f18">您没有权限去往该页面</h2>
      <router-link to="/dashboard" class="back c-white f12">
        返回首页
      </router-link>
    </div>
  </div>
</template>

<style lang="less" scoped>
.errPage-container{
  height: 100vh;
}
</style>
