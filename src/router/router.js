import { createRouter, createWebHistory } from 'vue-router';
import CustomerList from '@/views/customer/CustomerList.vue'
import ReportList from '@/views/report/ReportList.vue'
import SettingIndex from '@/views/setting/SettingIndex.vue'
import HomePage from '@/views/Index.vue'
import DiscussPage from '@/views/discuss/DiscussPage.vue'
import testT from '@/views/test/TestT.vue'

const routers = [{
        path: "/customers",
        name: "CustomerRouter",
        component: CustomerList
    },
    {
        path: "/reports",
        name: "ReportRouter",
        component: ReportList
    },
    {
        path: "/settings",
        name: "SettingRouter",
        component: SettingIndex
    },
    {
        path: "/",
        name: "HomeRouter",
        component: HomePage
    },
    {
        path: "/discuss",
        name: "DiscussRouter",
        component: DiscussPage
    },
    {
        path: "/test",
        name: "te",
        component: testT
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routers
})

export default router;