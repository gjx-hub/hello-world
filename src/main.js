import Vue from 'vue'
import app from './App.vue'
var vm = new Vue({
    el:'#pp',
    render:c => c(app)
})