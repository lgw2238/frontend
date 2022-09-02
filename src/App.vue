<template>
  <div id="app">
    <!-- 추가된 헤더 컴포넌트 사용 -->
    <main-header></main-header>
    <router-view></router-view>
    <!-- 추가된 풋터 컴포넌트 사용 TEST-->
    <main-footer></main-footer>
  </div>
</template>

<script>
import MainHeader from './components/layout/Main-Header.vue'
import MainFooter from './components/layout/Main-Footer.vue'

export default {
  name: 'App',
  components: {      
    MainHeader,  
    MainFooter
  }
}
</script>

<style>
  html,body{padding:0; margin:0;}
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin:0; padding:0;
  }
</style>