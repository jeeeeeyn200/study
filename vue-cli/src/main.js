import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

/*
new Vue({
  el: '#app',
  //템플릿 실행시 렌더됨
  render: h => h(App),
})
*/