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

  </vlp-list>
   <Tabbar v-model="active"></Tabbar>
   <vlp-search
   class="search-class"
   v-model="searchValue"
   :tipInterface="searchListInterface"
   :displayVisible.sync="visible"
   @search="searchFun"></vlp-search>
</div>

</template>
<script>
import { VlpList, VlpSearch } from 'vant-plus'
import { NavBar, Icon, Row, Sticky } from 'vant'
import { ListObj, searchList } from '@/api/listPage.js'
import { cardLabel } from './common/labelClumns.js'
import Tabbar from '@/components/tabbar'
export default {
  name: 'WorkOrders',
  components: {
    VlpList,
    VlpSearch,
    Tabbar,
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
    [Row.name]: Row,
    [Sticky.name]: Sticky
  },
  data() {
    return {
      active: 1,
      listInterface: ListObj,
      searchListInterface: searchList,
      columns: cardLabel,
      searchValue: '',
      visible: false
    }
  },
  methods: {
    searchFun(v) {
      console.log('searchFun...', v)
    }
  }
}
</script>
