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
    }
  },
  actions: {
    async fetchUser({commit}){
      try{
        const { data } = await userApi.getCurrentUser()
        console.log(data)
        const { id, name, email, account, image,isAdmin } = data
        commit('setCurrentUser',{
          id,
      account,
      name,
      email,
      image,
      isAdmin
        })
        return true
      }
     
      catch(error){
        console.log(error)
        return false
      }
    }

  },
  modules: {
  }
})
