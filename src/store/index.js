import Vue from 'vue'
import Vuex from 'vuex'

const SET_LOGIN = 'SET_LOGIN';
const SET_SHOWTOAST = 'SET_SHOWTOAST';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    logined:'logined',
    showToast:false
  },
  getters:{
    getLogin:(state)=>{
      return sessionStorage.getItem(state.logined);
    }
  },
  mutations: {
    [SET_LOGIN](state,options){
      sessionStorage.setItem(state.logined,options.val)
    },
    [SET_SHOWTOAST](state,isshow){
      state.showToast = isshow;
    }
  },
  actions: {
  },
  modules: {
  }
})
