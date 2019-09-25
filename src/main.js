import Vue from 'vue'
import app from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './font/my-font/iconfont.css'
import './main.css'

Vue.use(MintUI)
 
Vue.use(VueRouter)
var vm = new Vue({
    el:'#app',
    render:c => c(app),
    router
})
