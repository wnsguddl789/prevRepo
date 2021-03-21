import Vue from 'vue';
import Router from 'vue-router';

// /components/common
import MAIN from '@/components/common/MAIN.vue';

// /components/board -> 
import READ from '@/components/board/READ.vue';
import CREATE from '@/components/board/CREATE.vue';

// /components/user ->
import SIGNIN from '@/components/user/SIGNIN.vue';
import SIGNUP from '@/components/user/SIGNUP.vue';

Vue.use(Router);

export default new Router({
    routes:[
        {
            path:'/',
            name:MAIN,
            component:MAIN
        },{
            path:'/board/read',
            name:READ,
            component:READ
        },{
            path:'/board/create',
            name:CREATE,
            component:CREATE
        },{
            path:'/user/signin',
            name:SIGNIN,
            component:SIGNIN
        },{
            path:'/user/signup',
            name:SIGNUP,
            component:SIGNUP
        }

        
    ]
})