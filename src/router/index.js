import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

//引入四个模块
import Index from "@/pages/index/Index"
import Live from "@/pages/live/Live"
import Store from "@/pages/store/Store"
import Mine from "@/pages/mine/Mine"
// 顶部搜索框
import Classify from "@/pages/classify/Classify"

// 登录
import Login from "@/pages/mine/login/Login"
import Enroll from "@/pages/mine/login/Enroll"
import shopping from "@/pages/mine/shoppings"


//首页的二级路由;
import Find from "@/pages/index/index_router/Find";
import Keep from "@/pages/index/index_router/Keep";
import Ranking from "@/pages/index/index_router/Ranking";

import User from "@/pageList/user/User"
import Hua from "@/pagelist/voucher/switch/Hua"
import Liu from "@/pagelist/voucher/switch/Liu"
import Voucher from "@/pageList/voucher/Voucher"
import Like from "@/pageList/like/Like"



//引入storeList
import storeList from "@/pages/store/storeList/storeList";
//引入clothDetail
import Clothdetail from "@/pages/store/clothDetail/Clothdetail"
//引用confirmOrder
import Confirmorder from "@/pages/mine/confirmorder"


//精选
import Choiceness from "@/pages/store/choiceness/Choicenes.vue";
import SelectionOfDetails from "@/pages/store/choiceness/SelectionOfDetails";


//直播2级导航
import BeautyMakeup from "@/pages/live/live-nav/BeautyMakeup"
import Looks from "@/pages/live/live-nav/Looks"
import Tags from "@/pages/live/live-nav/Tags"
import Update from "@/pages/live/live-nav/Update"
import LiveContent from "@/pages/live/live-nav/liveContent/LiveContent"
export default new Router({
  routes: [

    {
        // 登录
        path:"/login",
        component:Login
    },
    {
        //注册
        path:"/enroll",
        component:Enroll
    },
    {
        // 开始
     path:"/",
     component:Index,
     children:[
        {path:"",component:Find}
     ]
   
        
    },
    {
        // 主页
    	path:"/index",
    	component:Index,
        children:[
            {path:"find",component:Find},
            {path:"keep",component:Keep},
            {path:"ranking",component:Ranking},
            {path:"",component:Find}
            
        ]
    },
    {
        // 直播
    	path:"/live",
    	component:Live,
        children:[
            {path:"beautyMakeup",component:BeautyMakeup},
            {path:"looks",component:Looks},
            {path:"tags",component:Tags},
            {path:"update",component:Update},
            {path:"",component:Tags}
        ]
    },
     {
        // 直播内容
        path:"/liveContent",
        component:LiveContent,
    },

    {
        // 商城
    	path:"/store",
    	component:Store,
    },
     {
        path:"/choiceness",
        component:Choiceness
    },
      {
        path:"/selectionOfDetails",
        component:SelectionOfDetails
    },
    {
        // 我的
    	path:"/mine",
    	component:Mine
    },
    {
        //商品
        path:"/shopping",
        component:shopping
    },
     {

      	path:"/confirmorder",
      	component:Confirmorder,

      },
    {
        // 搜索
        path:'/classify',
        component:Classify,
       
    },
    {
        path:"/voucher",
        component:Voucher,
        children:[
            {
                path:"hua",
                component:Hua
            },
            {
                path:"liu",
                component:Liu
            },
            {
                path:"",
                component:Hua
            }

        ]
    
    },
    {
            path:"/storeList",
            component:storeList,
      },
      {
            path:"/clothdetail",
            component:Clothdetail,
      },
     
      {
        path:"/like",
        component:Like
      },
      {
        path:"/user",
        component:User
      }
  ]
})
