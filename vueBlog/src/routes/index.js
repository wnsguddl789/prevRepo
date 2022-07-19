import Vue from 'vue';
import VueRouter from 'vue-router';

// /components/common
import HOME from '@/components/common/HOME.vue';

// /components/board -> 
import READ from   '@/components/board/READ.vue';
import CREATE from '@/components/board/CREATE.vue';
import DETAIL from '@/components/board/DETAIL.vue';

// /components/user ->
import SIGNIN from '@/components/user/SIGNIN.vue';
import SIGNUP from '@/components/user/SIGNUP.vue';

Vue.use(VueRouter);

const routes = [
    {
        path:'/',
        name:HOME,
        component:HOME
    },{
        // path => /board /@@@
        path:'/board/read',
        component:READ
    },{
        path:'/board/create/:contentId?',
        component:CREATE,
        name:"CREATE"
    },{
        path:'/board/detail/:contentId',
        component:DETAIL,
        name:"DETAIL"
    },{
        // path => /user /@@@
        path:'/user/signin',
        component:SIGNIN
    },{
        path:'/user/signup',
        component:SIGNUP
    }
]

const router = new VueRouter({
    mode: 'history', // 주소/# 을 막기위해 필요하다
    routes
  })

export default router