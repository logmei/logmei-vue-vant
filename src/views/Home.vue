<template>
  <div class="home">
   <router-view></router-view>
   <div ref="container" style="height: 70px;">
    <van-sticky :container="container">
        <van-tabbar
        class="tabbar-class"
        v-model="active"

        >
        <van-tabbar-item icon="bar-chart-o" @click="routeTo('data')">数据</van-tabbar-item>
        <van-tabbar-item icon="wap-home-o" @click="routeTo('workOrders')">工作台</van-tabbar-item>
        <van-tabbar-item icon="manager-o" @click="routeTo('data')">我的</van-tabbar-item>
        </van-tabbar>
    </van-sticky>
   </div>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, Row, Sticky } from 'vant'

export default {
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    [Row.name]: Row,
    [Sticky.name]: Sticky
  },
  data() {
    return {
      active: 1,
      container: null
    }
  },
  mounted() {
    this.container = this.$refs.container
  },
  methods: {
    routeTo(path) {
      this.$router.push(path)
    }
  }

}
</script>
<style lang="less" scoped>
.home /deep/{
  .tabbar-class{
    position: fixed;
 }
}

</style>

