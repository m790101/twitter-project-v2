<template>
  <main class="container d-flex">
    <div class="container__left">
      <AdminNavbar />
    </div>
    <div class="container__right">
      <h4 class="title">推文清單</h4>
      <AdminTweetList
        v-bind:tweet="tweetItem"
        v-for="tweetItem in tweet"
        :key="tweetItem.id"
        v-on:deleteTweet="afterDeleteTweet"
      ></AdminTweetList>
    </div>
  </main>
</template>

<script>
import AdminNavbar from "./../components/AdminNavbar.vue";
import AdminTweetList from "./../components/AdminTweetList.vue";

const dummyData = {
  tweets: [
    {
      id: 1,
      name: "Nina",
      account: "@Nina",
      image: "",
      description: "hellooooooooooooooooooo",
      createdAt: "5天前",
    },
    {
      id: 2,
      name: "Apple",
      account: "@Apple",
      image: "",
      description:
        "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.",
      createdAt: "3天前",
    },
  ],
};

export default {
  data() {
    return {
      isEditing: false,
      tweet: [],
    };
  },
  components: {
    AdminNavbar,
    AdminTweetList,
  },
  created() {
    this.fetchTweet();
  },
  methods: {
    fetchTweet() {
      this.tweet = dummyData.tweets;
    },
    afterDeleteTweet(tweetId) {
      this.tweet = this.tweet.filter((item) => item.id !== tweetId);
    },
  },
};
</script>

<style lang="scss" scoped>
.container__right {
  border: 1px solid #e6ecf0;
  max-width: 1067px;
  flex: 1;
}

.title {
  padding: 24px 0 24px 24px;
  font-weight: 700;
  border-bottom: 1px solid #e6ecf0;
}
</style>
