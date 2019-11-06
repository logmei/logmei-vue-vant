<template>
  <div class="login">
    <van-row>
      <van-col offset="2" class="title">欢迎使用移动端demo</van-col>
    </van-row>
    <van-row>
      <van-col offset="1" span="22">
          <van-field
            v-model="username"
            clearable
            border
            v-fieldTip="'账号'"
            placeholder="请输入账号"
            class="content"
            style="margin-bottom: 0.5rem;"
          />

          <van-field
            v-model="password"
            v-fieldTip="'密码'"
            :type="passwordShow?'text':'password'"
            placeholder="请输入密码"
            class="content password-class"
          >
          <template v-slot:right-icon>
             <svg-icon :icon-class="passwordShow?'view':'close-eye'" @click="passwordShow=!passwordShow"></svg-icon>
          </template>

          </van-field>

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
import { FieldTip } from 'vant-plus'
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
  directives: {
    FieldTip
  },
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      passwordShow: false
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
    font-size: 0.75rem;
    margin-top: 2rem;
    margin-bottom: 3.5rem;
  }
  .content{
    line-height: 1.2rem;
    font-size: 0.48rem;
    font-weight: 400;
    padding-top: 20px;
  }
  .forgetPwd{
    color: #949496;
    margin-right: 1.1rem;
    margin-top: 0.8rem;
    margin-bottom: 1.3rem;
    font-weight: 500;
    font-size: 0.4rem;
  }
  .button{
    width: 100%;
    height: 1.2rem;
    letter-spacing: 0.8rem;
    /* font-weight: 600; */
    font-size: 0.54rem;
    .van-button__text{
      margin-left: 20px;
    }
  }
  .agreement{
    margin-top:0.5rem;
    font-size: 0.4rem;
    color: #949496;
    span{
      color: #3ca1d4
    }
  }
  .van-cell::after{
    position: absolute;
    box-sizing: border-box;
    content: ' ';
    pointer-events: none;
    right: 0;
    bottom: 0;
    left: 0.42667rem;
    border-bottom: 0.02667rem solid #ebedf0;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
  }

}
</style>
<style lang="less">
 .password-class{
    .van-icon{
      font-size:0.5rem
    }
  }
</style>
