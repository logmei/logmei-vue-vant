<template>
<div class="search-list-class">
  <van-sticky>
    <van-nav-bar
    class="search-nav-bar-class"
    >
      <vlp-search
      slot="title"
      v-model="searchValue"
      class="search-class"
      :tipInterface="searchListInterface"
      :historyList="historyList"
      :autoHidden="false"
      :displayVisible = "true"
      @search="searchFun"
      @cancel="cancel"
      @deleteHistory="deleteHistory"></vlp-search>
    </van-nav-bar>

  </van-sticky>
  <vlp-list
  :interface-fun="searchList"
  :columns = "columns"
  :parameter = "parameter"
  >
   <template v-slot="list">
      <Card v-for="(item,index) in list" :key="index" :card-data="item" :label-columns='columns' @clickCard="clickCard">
      </Card>
    </template>
  </vlp-list>

</div>

</template>
<script>
import { mapMutations, mapGetters } from 'vuex'
import { ListObj, searchList } from '@/api/listPage.js'
import { NavBar, Icon, Row, Sticky } from 'vant'
import {
  VlpList,
  VlpSearch
} from 'vant-plus'
import { cardLabel } from '../common/labelClumns.js'
import Card from '@/components/card'
export default {
  name: 'SearchPage',
  components: {
    VlpList,
    VlpSearch,
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
    [Row.name]: Row,
    [Sticky.name]: Sticky,
    Card
  },
  data() {
    return {
      searchList: ListObj,
      searchListInterface: searchList,
      columns: cardLabel,
      searchValue: '',
      parameter: {}
    }
  },
  computed: {
    ...mapGetters(['historyList'])
  },
  methods: {
    clickCard(guid) {
      this.$router.push({ path: '/DetailPage', params: { guid }})
    },
    searchFun(v) {
      this.parameter = { name: v }
      this.setHistoryList(v)
      this.searchValue = ''
      console.log('searchFun', v)
    },
    cancel() {
      this.$router.go(-1)
    },
    deleteHistory() {
      this.removeHistoryList()
    },

    ...mapMutations({
      setHistoryList: 'SET_HISTORYlIST',
      removeHistoryList: 'REMOVE_HISTORYlIST'
    })
  }
}
</script>
<style lang="less" scoped>
.search-list-class{
  .search-nav-bar-class{
    .van-nav-bar__title{
      max-width:100%
    }
  }
  .search-class{
   position: absolute;
  }
  .van-pull-refresh__head{
    height: 200px;
  }
}

</style>
