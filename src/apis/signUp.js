import { apiHelper } from "@/utils/helpers";
//const getToken = ()=>localStorage.getItem('token')

export default {

    register:{
      create({account, name, email, password, checkPassword }) {
        return apiHelper.post('/users',{ 
          account, 
          name, 
          email, 
          password, 
          checkPassword
         })
         }
      }
    }
