import { createRouter, createWebHashHistory } from 'vue-router'

import AboutView from './views/AboutView.vue'
import ContactView from './views/ContactView.vue'
import HomeView from './views/HomeView.vue'
import UserProfile from './views/UserView.vue'
import PrivCook from './views/CookiesView.vue'
import Products from './products/FilteredProducts.vue'
import Confirmation from './views/ConfirmationView.vue'
import ProductPage from './products/ProductPage.vue'
import SignIn from './views/SignInView.vue'
import CheckoutView from './views/CheckoutView.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: PrivCook,
      path: '/cookies'
    },
    {
      component: HomeView,
      path: '/'
    },
    {
      component: UserProfile,
      path: '/user'
    },
    {
      component: AboutView,
      path: '/about'
    },
    {
      component: ContactView,
      path: '/contact'
    },
    {
      component: Products,
      path: '/products/:brand'
    },
    {
      component: Confirmation,
      path: '/confirmation'
    },
    {
      component: ProductPage,
      path: '/product/:id'
    },
    {
      component: SignIn,
      path: '/sign-in'
    },
    {
      component: CheckoutView,
      path: '/checkout'
    }
  ]
})
