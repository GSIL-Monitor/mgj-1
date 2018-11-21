// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueJsonp from 'vue-jsonp'

import Axios from "axios"
import VueAxios from "vue-axios"

//引用mint ui组件
import Mint from 'mint-ui';
Vue.use(Mint);
import 'mint-ui/lib/style.css';

Vue.use(VueJsonp)
Vue.use(VueAxios,Axios)

//引用muse-ui
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI);

import "@/assets/lib/jquery-3.3.1.min.js"

import "@/assets/lib/flexible.js"
Vue.config.productionTip = false
//地区插件

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  
})
