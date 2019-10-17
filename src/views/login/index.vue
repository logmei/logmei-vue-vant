<template>
  <div class="login">
    <van-row>
      <van-col offset="2" class="title">欢迎使用移动端demo</van-col>
    </van-row>
    <van-row>
      <van-col offset="2" span="22">
          <van-field
            v-model="username"
            clearable
            border
            placeholder="请输入账号"
            v-line:bottom
            class="content"
            style="margin-bottom: 1rem;"
          />

          <van-field
            v-model="password"
            type="password"
            placeholder="请输入密码"
            right-icon="closed-eye"
            v-line:bottom
            class="content password"
          />

      </van-col>
    </van-row>
    <van-row type="flex" justify="end">
      <van-col class="forgetPwd">
        忘记密码
      </van-col>
    </van-row>
    <van-row>
      <van-col offset="2" span="20">
        <van-button :disabled="!loginButtonDisabled" round type="info" class="button" @click="submit">登录</van-button>
      </van-col>

    </van-row>
      <van-row type="flex" justify="center">
      <van-col class="agreement">
        登录表示您已同意<span>《服务条款》</span>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import { Button, Row, Col, Field, Divider, CellGroup } from 'vant'
import line from '@/directive/line'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

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
      username: '',
      password: ''
    }
  },
  computed: {
    loginButtonDisabled: function() {
      return this.username !== '' && this.password !== ''
    }
  },
  methods: {
    submit() {
      NProgress.start()
      console.log('login store', this.$store)
      this.$store.dispatch('login', { username: this.username, password: this.password }).then(() => {
        this.$router.push('/home')
        NProgress.done()
      }).catch(() => {
        NProgress.done()
      })
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
    line-height: 2.5rem;
    font-size: 1rem;
    font-weight: 400;
  }
  .forgetPwd{
    color: #949496;
    margin-right: 60px;
    margin-top: 60px;
    margin-bottom: 3rem;
    font-weight: 500;
  }
  .button{
    width: 100%;
    height: 2.5rem;
    letter-spacing: 1rem;
    font-weight: 600;
    font-size: 1rem;
  }
  .agreement{
    margin-top:2rem;
    font-size: 1rem;
    color: #949496;
    span{
      color: #3ca1d4
    }
  }
  .password{
    .van-field__right-icon .van-icon{
      margin-right: 10px;
      font-size: 1.4rem
    }
  }
}
</style>

