import VueRouter from 'vue-router'
import index from './pages/index/index.vue'
import cinema from './pages/cinema/cinema.vue'

import {
    citySelected,
    search,
    willMovie,
    hotPlayMovie
} from '@/components/index'

const router = new VueRouter({
    routes: [{
            path: '/',
            redirect: '/index'
        },
        {
            path: '/index',
            component: index,
            meta: {
                title: '电影'
            },
            children: [{
                path: '',
                redirect: 'hot-play-movie'
            }, {
                path: 'city',
                component: citySelected,
                meta: {
                    title: '城市选择'
                }
            }, {
                path: 'search',
                component: search,
                meta: {
                    title: '搜索'
                }
            }, {
                path: 'will-movie',
                component: willMovie
            }, {
                path: 'hot-play-movie',
                component: hotPlayMovie
            }]
        },
        {
            path: '/cinema',
            component: cinema,
            meta: {
                title: '影院'
            }
        }
    ]
})
export default router