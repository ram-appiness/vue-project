import { createStore } from "vuex";

export default createStore({
  state: {
    products:[
      {
        id:1,
        name:"shoe",
        image:'https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        inCart:false,
        price:878,
        needCount:0
      },
      {
          id:2,
          name:"mouse",
          image:'https://images-na.ssl-images-amazon.com/images/I/61v%2BtaI5jvL._SX569_.jpg',
          inCart:false,
          price:3232,
          needCount:0
      },
      {
          id:3,
          name:"headphone",
          image:'https://images-na.ssl-images-amazon.com/images/I/811u6QEwQxL.__AC_SX300_QL70_ML2_.jpg',
          inCart:false,
          price:534,
          needCount:0
      },
      {
          id:4,
          name:"airplane",
          image:'https://miro.medium.com/max/6054/0*kp8rJzqHjagMj22J',
          inCart:true,
          price:6465,
          needCount:2
      },
    ]
  },
  getters: {
    getProductsCart: state => {
      var a = state.products.filter( item => item.inCart);
      console.log(a);
      return a;
    },
    getProducts: state => {
      console.log("called first getter")
      return state.products
    },
    // getAllprices: state => {
    //   var temp = state.products.map( item => {
    //     return item.needCount * item.price
    //   })
    //   return temp
    // }
  },
  mutations: {
    cartModify (state,id) {
      state = state.products.forEach( item => {
        if (item.id === id) {
          item.inCart = !item.inCart;
          if (item.inCart) {
            item.needCount++;
          }
          else {
            item.needCount = 0;
            item.inCart = false;
          }
        }
      })
    },
    addProduct(state,payload) {
      state.products.push(payload)
    },
    increaseNeedCount(state,id) {
      state = state.products.forEach( (item) => {
        if (id === item.id) {
          item.needCount++;
        }
      })
    },
    decreaseNeedCount(state,id) {
      state = state.products.forEach( (item) => {
        if (id === item.id) {
          item.needCount--;
        }
      })
    }
  },
  actions: {
    cartModifyAction (context,payload) {
      context.commit('cartModify',payload)
    },
    addProductAction(context,payload) {
      context.commit('addProduct',payload)
    },
    increaseNeedCountAction(context,payload) {
      context.commit('increaseNeedCount',payload)
    },
    decreaseNeedCountAction(context,payload) {
      context.commit('decreaseNeedCount',payload)
    }
  },
  modules: {}
});
