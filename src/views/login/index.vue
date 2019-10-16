<template>
  <div class="login">
    <van-row>
      <van-col offset="2" class="title">欢迎使用移动端demo</van-col>
    </van-row>
    <van-row>
      <van-col offset="2" span="22">
          <van-field
            v-model="value"
            clearable
            border
            placeholder="请输入账号"
            v-line:bottom
            class="content"
          />

          <van-field
            v-model="password"
            type="password"
            placeholder="请输入密码"
            v-line:bottom
            class="content"
          />

      </van-col>
    </van-row>
    <van-row>
      <van-col offset="2">
        <van-button type="primary">默认按钮</van-button>
      </van-col>

    </van-row>
  </div>
</template>

<script>
import { Button, Row, Col, Field, Divider, CellGroup } from 'vant'
import line from '@/directive/line'

export default {
  components: {
    [Button.name]: Button,
    [Row.name]: Row,
    [Col.name]: Col,
    [Field.name]: Field,
    [Divider.name]: Divider,
    [CellGroup.name]: CellGroup
  },
  name: 'Login',
  directives: {
    line: line
  },
  data() {
    return {
      value: '',
      password: ''
    }
  }
}
</script>
<style lang="less" scoped>
.login /deep/{
  .title{
    font-size: 60px;
    margin-top: 4rem;
    margin-bottom: 8rem;
  }
  .content{
    line-height: 40px;
    font-size: 40px;
  }
}
</style>

