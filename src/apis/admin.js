import { apiHelper } from "@/utils/helpers";

const getToken = () => localStorage.getItem('token')

export default {
    admin: {
     getTweets(){
        return apiHelper.get('/admin/tweets',{
            headers: { Authorization: `Bearer ${getToken()}` }
        })
     }
    }
}
