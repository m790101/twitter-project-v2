import { apiHelper } from "../utils/helpers";


export default {

    register:{
      create({account, name, email, password, checkPassord }) {
        return apiHelper.post('/users',{ 
          account, 
          name, 
          email, 
          password, 
          checkPassord
         })
         }
      }
    }
