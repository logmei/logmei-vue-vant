<template>
<div>
  <van-sticky>
<van-nav-bar
  title="标题"
  left-text="返回"
  left-arrow

>
  <van-icon name="search" slot="right" />
</van-nav-bar>
</van-sticky>

  <vlp-list
  :interface-fun="searchList"
  :columns = "columns"
  >

  </vlp-list>

</div>

</template>
<script>
import { VlpList } from 'vant-plus'
import { NavBar, Icon, Row, Sticky } from 'vant'
import { searchListObj } from '@/api/listPage.js'
import { cardLabel } from './common/labelClumns.js'
export default {
  name: 'WorkOrders',
  components: {
    'vlp-list': VlpList,
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
    [Row.name]: Row,
    [Sticky.name]: Sticky
  },
  data() {
    return {
      searchList: searchListObj,
      columns: cardLabel
    }
  }
}
</script>
