import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    addCount(state, obj) {
      obj.count++
    },
    addToCart(state, newObj) {
      newObj.isCheck = true
      state.cartList.push(newObj)
    }
  },
  actions: {
    addProduct(context, obj) {
      let oldProduct = null
      for (let item of context.state.cartList) {
        if (item.id === obj.id) {
          oldProduct = item
        }
      }
      if (oldProduct) context.commit('addCount', oldProduct)
      else {
        obj.count = 1
        context.commit('addToCart', obj)
      }
    }
  },
  getters: {},
  modules: {}
})

export default store
