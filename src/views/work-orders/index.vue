<template>
<div>
  <van-sticky>
<van-nav-bar
  title="标题"
  left-text="返回"
  left-arrow

>
  <van-icon name="search" slot="right" @click="visible=true"/>
</van-nav-bar>
</van-sticky>

  <vlp-list
  :interface-fun="listInterface"
  :columns = "columns"
  >
  <template v-slot="list">
     <Card
      v-for="(item,index) in list"
      :key="index"
      :card-data="item"
      :label-columns='columns'>
    </Card>
  </template>

  </vlp-list>
   <Tabbar v-model="active"></Tabbar>
   <vlp-search
   class="search-class"
   v-model="searchValue"
   :tipInterface="searchListInterface"
   :displayVisible.sync="visible"
   :historyList="historyList"
   @search="searchFun"></vlp-search>
</div>

</template>
<script>
import { VlpList, VlpSearch } from 'vant-plus'
import { NavBar, Icon, Row, Sticky } from 'vant'
import { ListObj, searchList } from '@/api/listPage.js'
import { cardLabel } from './common/labelClumns.js'
import Tabbar from '@/components/tabbar'
import Card from '@/components/card'
export default {
  name: 'WorkOrders',
  components: {
    VlpList,
    VlpSearch,
    Tabbar,
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
    [Row.name]: Row,
    [Sticky.name]: Sticky,
    Card
  },
  data() {
    return {
      active: 1,
      listInterface: ListObj,
      searchListInterface: searchList,
      columns: cardLabel,
      searchValue: '',
      visible: false,
      historyList: ['中国', '英国', '大盘鸡']
    }
  },
  methods: {
    searchFun(v) {
      console.log('searchFun...', v)
    }
  }
}
</script>
