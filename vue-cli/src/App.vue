<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!-- 컴포넌트 명명법 종류 -->
    <div>-----------------------------------</div>
    <hello-world></hello-world>
    <div>-----------------------------------</div>
    <HelloWorld></HelloWorld>
    <div>-----------------------------------</div>
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  //인스턴스 옵션 속성 or 캄포넌트 옵션 속성
  name: 'App',
  components: {
    HelloWorld
    //'hello-wolrd' : HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
