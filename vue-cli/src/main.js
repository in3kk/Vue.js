import Vue from 'vue'
import App from './App.vue' //컴포넌트 파일일

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


// var App = {
//   template: '<div>app</div>'
// }
// new Vue({
//   el: '#app',
//   render: h => h(App),
//   components: {
//     'app': App
//   }//template: '<div>app</div>'과 같은 코드드
// }) //위와 같은 역할을 하는 코드