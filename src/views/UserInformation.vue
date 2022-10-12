<template>
  <main class="container d-flex">
    <div class="container__left">
      <Navbar />
    </div>
    <div class="container__right d-flex">
      <div class="section">
        <Spinner v-if="isProcessing" />
        <div v-show="!isProcessing">
          <UserInfo
            @afterCallModal="handleAfterCallModal"
            :initial-tweets-num="tweets.length"
            :initial-user="user"
          />
          <UserEditModal
            @closeUserEditModal="handleCloseUserEditModal"
            v-if="isEditing"
            :initial-user="user"
          />
          <div class="modal-bg" :class="{ active: isEditing }"></div>
          <NavTab @afterPage="handleAfterPage" />
          <TweetList v-if="page === 'tweet'" :initial-tweets="tweets" />
          <ReplyList v-else-if="page === 'reply'" :initial-replies="replies" />
          <TweetList v-if="page === 'like'" :initial-tweets="likes" />
        </div>
      </div>
    </div>
    <PopularList />
  </main>
</template>

<script>
import Navbar from "./../components/Navbar.vue";
import TweetList from "./../components/TweetList.vue";
import PopularList from "./../components/PopularList.vue";
import UserInfo from "../components/UserInfo.vue";
import NavTab from "../components/NavTab.vue";
import ReplyList from "../components/ReplyList.vue";
import UserEditModal from "../components/UserEditModal.vue";
import userApi from "./../apis/user";
import { Toast } from "./../utils/helpers";
import Spinner from "./../components/Spinner.vue";

export default {
  data() {
    return {
      page: "tweet",
      isEditing: false,
      user: {},
      tweets: [],
      replies: [],
      likes: [],
      isProcessing: false,
    };
  },
  methods: {
    handleAfterPage(playLoad) {
      this.page = playLoad;
    },
    handleCloseUserEditModal() {
      this.isEditing = false;
    },
    handleAfterCallModal() {
      this.isEditing = true;
    },
    async fetchData(id) {
      try {
        this.isProcessing = true;
        const { data } = await userApi.getUser({ id });        
        const tweet = await userApi.getTweets({ id });
        const replies = await userApi.getRepliedTweets({ id });
        const likes = await userApi.getLikes({ id });
        const follower = await userApi.getFollowers(id);
        const followings = await userApi.getFollowings( id )
        console.log(follower.data, followings.data)
        this.likes = likes.data;

        this.tweets = tweet.data;
        this.replies = replies.data;
        this.user = {
          ...data,
          followingNum:followings.data.length,
          followerNum:follower.data.length
        };
        this.isProcessing = false;
      } catch (error) {
        this.isProcessing = false;
        console.log(error);
        Toast.fire({
          icon: "warning",
          title: "無法讀取使用者",
        });
      }
    },
  },
  components: {
    Navbar,
    UserInfo,
    TweetList,
    NavTab,
    ReplyList,
    PopularList,
    UserEditModal,
    Spinner,
  },
  created() {
    const { id } = this.$route.params;
    this.fetchData(Number(id));
  },
};
</script>


<style lang="scss" scoped>
.section {
  width: 634px;
  position: relative;
  border: 1px solid #e6ecf0;
  margin-left: 24px;
  height: 100vh;
  overflow: scroll;
}

.title {
  padding: 24px 0 24px 24px;
  font-weight: 700;
}

.modal-bg {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 2;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: none;
  &.active {
    display: initial;
  }
}
</style>
