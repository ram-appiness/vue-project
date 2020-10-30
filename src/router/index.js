import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/MainComponent";
import AddProduct from '../components/AddProduct'
import Cart from '../components/Cart'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/add-product",
    name: "add-product",
    component: AddProduct
  },
  {
    path:'/cart',
    name:'cart',
    component: Cart
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
