import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/MovieIndexPage'
import Show from '@/components/MovieShowPage'
import Login from '@/components/login/Login'
import Board from '@/components/Board/BoardList'
import BoardView from '@/components/Board/BoardView'
import BoardWrite from '@/components/Board/BoardWrite' 
import BoardEdit from '@/components/Board/BoardEdit' 

Vue.use(Router)

export const router = new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'index',
            component: Index
        },
        {
            path: '/:id',
            name: 'show',
            component: Show
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/board',
            name: 'BoardList',
            component: Board
        },
        {
            path: '/boardview',
            name: 'BoardView',
            component: BoardView
        },
        {
            path: '/boardwrite',
            name: 'BoardWrite',
            component: BoardWrite
        },
        {
            path: '/boardedit',
            name: 'BoardEdit',
            component: BoardEdit
        }
    ]
})