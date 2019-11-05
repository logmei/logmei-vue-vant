<template>
  <div class="list-card-class">
    <div class="card-tip">
      <span :class=" data.tip.className? 'tip '+data.tip.className:'tip'" v-if="data.tip">{{data.tip.value}}</span>
      <span :class=" data.mark.className? 'mark '+data.mark.className:'mark'" v-if="data.mark">{{data.mark.value}}</span>
    </div>
    <div class="card-title">
      <span :class=" data.title.className? 'title '+data.title.className:'title'">{{data.title.value}}</span>
      <span :class=" data.subtitle.className? 'subtitle '+data.subtitle.className:'subtitle'" v-if="data.subtitle">{{data.subtitle.value}}</span>
    </div>

    <detail :data="data.list" v-if="data.list"></detail>
    <div class="card-buttons" v-if="data.buttons">
      <span
      :class="data.buttons.length>1 && index<data.buttons.length-1 ? 'button line' : 'button'"
      v-for="(button,index) in data.buttons"
      :key="index"
      @click="buttonClick(button)"
      >
        {{button.label}}
      </span>

    </div>
    <slot></slot>
  </div>
</template>
<script>
import Detail from '../detail/index.vue'
import { InitCardInfo } from '@/utils/handleListInfo.js'
/**
 * {
 *  tip,//顶部提示，{value,className}
 *  mark,//顶部后面的标记{value,className}
 *  title,//大标题
 *  subtitle,//附属标题{value,className}
 *  list,//内容,格式为{label:'姓名',name:'name',formater,value:'',tips:[`<span>KP</span>`]},
 *  buttons//按钮，格式为{label:'去预约',callback}
 * }
 */
export default {
  name: 'VlpCard',
  components: {
    Detail
  },
  props: {
    cardData: {
      type: Object,
      required: true
    },
    labelColumns: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      data: {}
    }
  },
  watch: {
    cardData: function() {
      this.data = InitCardInfo(this.labelColumns, this.cardData)
      console.log('watch cardData...', this.data)
    }
  },
  beforeMount() {
    this.data = InitCardInfo(this.labelColumns, this.cardData)
    console.log('beforeMount cardData...', this.data)
  },
  methods: {
    buttonClick(obj) {
      console.log('buttonClick...')
      this.$router.push({ path: '/HelloWorld', params: { id: 123 }})
      // obj.callback && obj.callback(this)
    }
  }

}
</script>
<style lang="less" scoped>
  .list-card-class /deep/{
    width: 90%;
    margin: 10px auto;
    border: 1px solid #eeeeee;
    box-shadow: 0 0 5px #716f6f;
    border-radius: 5px;
    text-align: left;
    .card-tip{
      .tip{
      font-size: 12px;
      background: #c3d6e6;
      position: relative;
      padding: 5px;
      margin: 5px;
      &::after{
        content: '';
        position: absolute;
        top: 4px;
        right: -9px;
        /* margin: -10px; */
        width: 0.455rem;
        height: 0.455rem;
        background: #c3d6e6;
        transform: rotate;
        -webkit-transform: translate(90deg);
        transform: rotate(134deg);
        z-index: -1;
      }
    }
    }

    .title{
      font-size: 16px;
      padding: 5px;
    }
    .subtitle{
        font-size: 0.2rem;
        background: #378eb9;
        color: #ffffff;
        border-radius: 0.08rem;
        padding: 0.05rem 0.2rem;
    }
    .card-buttons{
        display: flex;
        justify-content: space-evenly;
        text-align: center;
        border-top: 1px solid #c3c3c3;
        font-size: 14px;
        line-height: 34px;
        .line{
          border-right:1px solid  #c3c3c3;
        }
    }
    .button{
      width:100%;
    }
  }
</style>
