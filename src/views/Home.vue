<template>
  <div>
    
     <van-row>
      <van-col offset="2" class="title">欢迎来到CRM</van-col>
    </van-row>
    <van-row>
      <van-col>
        <van-field v-model="value" placeholder="请输入账号" />
        <van-field
          v-model="password"
          type="password"
          placeholder="请输入密码"
        />
      </van-col>
    </van-row>
    <van-row>
      <van-button type="primary">默认按钮</van-button>
    </van-row>
  </div>
</template>

<script>
import {  Button, Row, Col,Field } from 'vant';

export default {
  components: {
    [Button.name]: Button,
    [Row.name]:Row,
    [Col.name]:Col,
    [Field.name]:Field
  },
  data(){
    return {
      value:'',
      password:''
    }
  }
 
};
</script>

