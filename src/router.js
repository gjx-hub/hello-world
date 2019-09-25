import VueRouter from 'vue-router'
import index from './pages/index/index.vue'
import cinema from './pages/cinema/cinema.vue'

const router =new VueRouter({
    routers:[
        {path:'/',redirect:'/index'},
        {path:'/index',component:index},
        {path:'/cinema',component:cinema}
    ]
})
export default router