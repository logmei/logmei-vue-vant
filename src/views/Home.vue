<template>
  <div>

     欢迎
  </div>
</template>

<script>
import { Button, Row, Col, Field } from 'vant'

export default {
  components: {
    [Button.name]: Button,
    [Row.name]: Row,
    [Col.name]: Col,
    [Field.name]: Field
  },
  data() {
    return {
      value: '',
      password: ''
    }
  }

}
</script>

