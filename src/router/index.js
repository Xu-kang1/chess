/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/Index'
import Account from '../views/Account'

import Invitation from '../views/Invitation'
import Mine from '../views/Mine'
import commonRoutes from './common'
const Customer =  r => require.ensure([], () => r(require('../views/Customer')), 'Customer')

Vue.use(Router)

let routeArr = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    redirect: '/account',
    children: [
      {
        path: 'account',
        component: Account
      },
      {
        path: 'customer',
        component: Customer
      },
      {
        path: 'invitation',
        component: Invitation
      },
      {
        path: 'mine',
        component: Mine
      }
    ]
  }
]

let routes = routeArr.concat(commonRoutes)
let router = new Router({ routes })
router.beforeEach(function (a, b, c) {
  c()
})

export default router
