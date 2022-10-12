import { apiHelper } from "@/utils/helpers";

export default {
      getTweets() {
        return apiHelper.get('/tweets')
        },
        getTweet({id}){
            return apiHelper.get(`/tweets/${id}`)
        },
        getReplies({tweet_id:id}){
            return apiHelper.get(`/tweets/${id}/replies`)
        },
        createReply({comment,tweet_id:id}){
            return apiHelper.post(`/tweets/${id}/replies`,{comment})
        },
        like({id}){
            return apiHelper.post(`/tweets/${id}/like`,null)
        },
        unLike({id}){
            return apiHelper.post(`/tweets/${id}/unlike`,null)
        },
        create({description}){
            return apiHelper.post(`/tweets`,{description})
        },

    }
