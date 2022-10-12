import Vue from 'vue'
import Vuex from 'vuex'
import userApi from './../apis/user'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {
      id: -1,
      account:'',
      name: '',
      email: '',
      image: '',
      isAdmin: false
    },
    isAuthenticated: false
  },
  getters: {
  },
  mutations: {
    setCurrentUser (state, currentUser) {
      state.currentUser = {
        ...state.currentUser,       
        ...currentUser 
      }      
      state.isAuthenticated = true
    },
    revokeAuthentication (state) {
      state.currentUser = {}
      state.isAuthenticated = false
     // 登出時一併將 state 內的 token 移除
      state.token = ''
      localStorage.removeItem('token')
    }
  },
  actions: {
    async fetchCurrentUser({commit}){
      try{
        const { data } = await userApi.getCurrentUser()
        const { id, name, email, account,image} = data.data
        commit('setCurrentUser',{
          id,
      account,
      name,
      email,
      image:image? image:'https://i.imgur.com/mVOT0IN.png',
        })
        return true
      }
     
      catch(error){
        console.log(error)
        commit('revokeAuthentication')
        return false
      }
    }

  },
  modules: {
  }
})
