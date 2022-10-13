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
            @afterHandleSubmit="handleAfterHandleSubmit"
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
import { mapState } from "vuex";

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
        const tweets = await userApi.getTweets({ id });
        const replies = await userApi.getRepliedTweets({ id });
        const likes = await userApi.getLikes({ id });
        const follower = await userApi.getFollowers(id);
        const followings = await userApi.getFollowings(id);
        this.likes = likes.data;
        this.likes = this.likes.map((like) => {
          if (!like.user.image) {
            return {
              ...like,
              user: {
                ...like.user,
                image: like.user.image
                  ? like.user.image
                  : "https://i.imgur.com/mVOT0IN.png",
              },
            };
          }
          return like;
        });

        this.tweets = tweets.data;
        this.tweets = this.tweets.map((tweet) => {
          if (!tweet.user.image) {
            return {
              ...tweet,
              user: {
                ...tweet.user,
                image: tweet.user.image
                  ? tweet.user.image
                  : "https://i.imgur.com/mVOT0IN.png",
              },
            };
          }
          return tweet;
        });
        this.replies = replies.data;
        this.replies = this.replies.map((reply) => {
          if (!reply.user.image) {
            return {
              ...reply,
              user: {
                ...reply.user,
                image: reply.user.image || "https://i.imgur.com/mVOT0IN.png",
              },
            };
          }
          return reply;
        });

        this.user = {
          ...data,
          image: data.image || "https://i.imgur.com/mVOT0IN.png",
          backgroundImage:
            data.backgroundImage || "https://i.imgur.com/PvPmJH3.png",
          followingNum: followings.data.length,
          followerNum: follower.data.length,
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
    handleAfterHandleSubmit(playLoad) {
      this.user = {
        ...this.user,
        image: playLoad.image,
        backgroundImage: playLoad.backgroundImage,
      };
      this.tweets = this.tweets.map((tweet) => {
        return {
          ...tweet,
          user: {
            account: tweet.user.account,
            image: playLoad.image,
            name: tweet.user.name,
          },
        };
      });
      this.replies = this.replies.map((reply) => {
        return {
          ...reply,
          user: {
            account: reply.user.account,
            image: playLoad.image,
            name: reply.user.name,
          },
        };
      });
      this.likes = this.likes.map((like) => {
        if (like.user.name === this.currentUser.name) {
          return {
            ...like,
            user: {
              account: like.user.account,
              image: playLoad.image,
              name: like.user.name,
            },
          };
        }
        return like;
      });
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
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params;
    this.fetchData(Number(id));
    next();
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"]),
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
