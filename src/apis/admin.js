import { apiHelper } from "@/utils/helpers";

const getToken = () => localStorage.getItem("token");

export default {
  admin: {
    getTweets() {
      return apiHelper.get("/admin/tweets", {
        headers: { Authorization: `Bearer ${getToken()}` },
      });
    },
    deleteTweets({ tweetId }) {
      return apiHelper.delete(`/admin/tweets/${tweetId}`, {
        headers: { Authorization: `Bearer ${getToken()}` },
      });
    },
    getUsers() {
      return apiHelper.get("/admin/users", {
        headers: { Authorization: `Bearer ${getToken()}` },
      });
    },
  },
};
