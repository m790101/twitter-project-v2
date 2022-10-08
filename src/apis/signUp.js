import { apiHelper } from "@/utils/helpers";
//const getToken = ()=>localStorage.getItem('token')

export default {

    register:{
      create({formData}) {
        return apiHelper.post('/users',{ formData }
       ) }
      }
    }
