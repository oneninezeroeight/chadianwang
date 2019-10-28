//引入vue
import Vue from 'vue';
//引入vue-router
import Router from 'vue-router';
const routerPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error)
};
//使用vue-router
Vue.use(Router);


//引入页面组件
import home from '../pages/Home.vue';
import cart from '../pages/Cart.vue';
import goods from '../pages/Goods.vue';
import news from '../pages/News.vue';
import mine from '../pages/Mine.vue';
import list from '../pages/List.vue';
import reg from '../pages/Reg.vue';
import login from '../pages/Login.vue';
import notfound from '../pages/NotFound.vue';

//实例化router并配置参数
let router = new Router({
    routes: [{
            name: 'home',
            path: '/Home',
            component: home
        },
        {
            path: '/',
            redirect: 'Home'
        },
        {
            name: 'list',
            path: '/List',
            component: list
        },
        {
            name: 'news',
            path: '/News',
            component: news,
            //权限设置，没有登录就不能进去
            meta: {
                requiresAuth: true
            }

        },
        {
            name: 'cart',
            path: '/Cart',
            component: cart,
            //权限设置，没有登录就不能进去
            meta: {
                requiresAuth: true
            }
        },
        {
            name: 'mine',
            path: '/Mine',
            component: mine,
            //权限设置，没有登录就不能进去
            meta: {
                requiresAuth: true
            }
        },
        {
            name: 'goods',
            path: '/Goods',
            component: goods
        },
        {
            name: 'reg',
            path: '/Reg',
            component: reg
        },
        {
            name: 'login',
            path: '/Login',
            component: login
        },
        {

            path: '/404',
            component: notfound

        },
        {

            path: '*',
            redirect: '/404'

        }
    ]
});

//全局路由守卫，即每一个路由都要经过
router.beforeEach(function (to, from, next) {
    //在全局路由中进行页面权限访问控制
    //先判断目标路由是否需要鉴权
    if (to.meta.requiresAuth) {
        //如果需要鉴权，则先拿到保存在localStorage里面的信息，再进行判断
        let Authorization = localStorage.getItem("Authorization");
        //接着再进行判断
        if (Authorization) {
            //如果为真
            next();
        } else {
            //如果为假
            router.push({
                path: '/Login',
                query: {
                    targetUrl: to.fullPath
                }
            })
        }
    } else {
        next();
    }
});
//导出VueRouter
export default router;