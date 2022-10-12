import { apiHelper } from "@/utils/helpers";

export default {
    getUser({ id }) {
        return apiHelper.get(`/users/${id}`)
    },
    getTweets({ id }) {
        return apiHelper.get(`/users/${id}/tweets`)
    },
    getRepliedTweets({ id }) {
        return apiHelper.get(`/users/${id}/replied_tweets`)
    },
    getLikes({ id }) {
        return apiHelper.get(`/users/${id}/likes`)
    },
    getFollowings( id ) {
        return apiHelper.get(`/users/${id}/followings`)
    },
    getFollowers(id ) {
        return apiHelper.get(`/users/${id}/followers`)
    },
    getUserTop(){
        return apiHelper.get(`/users/top`)
    },
    addFollowing({id}){
        return apiHelper.post(`/followships`,{id})
    },
    removeFollowing(id){
        return apiHelper.delete(`/followships/${id}`)
    },
    getCurrentUser(){
        return apiHelper.get(`/users/current_user`)
    }
}