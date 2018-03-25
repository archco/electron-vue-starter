import Vue from 'vue';
import App from './app.vue';

window.vm = new Vue({
  el: '#app',
  render: h => h(App),
});
