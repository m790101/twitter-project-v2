<template>
  <main class="container d-flex">
    <div class="container__left">
      <AdminNavbar />
    </div>
    <div class="container__right">
      <h4 class="title">推文清單</h4>
      <Spinner v-if="isProcessing" />
      <AdminTweetList
        v-bind:tweet="tweetItem"
        v-for="tweetItem in tweet"
        :key="tweetItem.id"
        v-on:deleteTweet="afterDeleteTweet"
        v-else
      ></AdminTweetList>
    </div>
  </main>
</template>

<script>
import AdminNavbar from "./../components/AdminNavbar.vue";
import AdminTweetList from "./../components/AdminTweetList.vue";
import adminAPI from "./../apis/admin";
import { Toast } from "./../utils/helpers";
import Spinner from "./../components/Spinner.vue";

export default {
  data() {
    return {
      isProcessing: false,
      tweet: [],
    };
  },
  components: {
    AdminNavbar,
    AdminTweetList,
    Spinner,
  },
  created() {
    this.fetchTweet();
  },
  methods: {
    async fetchTweet() {
      try {
        this.isProcessing = true;
        const { data } = await adminAPI.admin.getTweets();
        this.tweet = data;
        this.isProcessing = false;
      } catch (error) {
        this.isProcessing = false;
        console.log("error", error);
      }
    },

    async afterDeleteTweet(tweetId) {
      try {
        const { data } = await adminAPI.admin.deleteTweets({ tweetId });
        if (data.status === "error") {
          throw new Error(data.message);
        } else {
          Toast.fire({
            icon: "error",
            title: "已移除推文",
          });
          this.fetchTweet();
        }
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法移除推文，請稍後再試",
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container__right {
  border: 1px solid #e6ecf0;
  max-width: 1067px;
  flex: 1;
  height: 100vh;
  overflow: scroll;
}

.title {
  padding: 24px 0 24px 24px;
  font-weight: 700;
  border-bottom: 1px solid #e6ecf0;
}
</style>
