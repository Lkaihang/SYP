<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <!-- 在HOME Search显示，在登录注册隐藏 -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>
<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name:'',
  components:{
    Header,
    Footer
  }
}
</script>
<style scoped>

</style>