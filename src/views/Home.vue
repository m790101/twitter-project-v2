<template>
  <main class="container d-flex">
    <div class="container__left">
      <Navbar
      />
    </div>
    <div class="container__right d-flex">
      <div class="section">
        <h4 class="title">首頁</h4>
      <NewTweetModal
        v-if="isEditing"
        @afterCloseModal="handleAfterCloseModal"
        @afterCreatedTweet="handleAfterCreatedTweet"
      />
          <div class="modal-bg" :class="{ active: isEditing }"></div>
       <CreateTweet 
        :navIsEditing="isEditing"
        @afterCallModal="handleAfterCallModal"
        /> 

        <Spinner
        v-if="isProcessing"/>
        <TweetList 
        :initial-tweets="tweets"
        v-else
        />
      </div>
    </div>
    <div class=""></div>
    <PopularList />
  </main>
</template>

<script>
import Navbar from "./../components/Navbar.vue";
import TweetList from "./../components/TweetList.vue";
import PopularList from "./../components/PopularList.vue";
import CreateTweet from "../components/CreateTweet.vue";
import NewTweetModal from "../components/NewTweetModal.vue";
import tweetsAPI from './../apis/tweets'
import { Toast } from "./../utils/helpers";
import Spinner from './../components/Spinner.vue'

export default {
  data() {
    return {
      isEditing:false,
      tweets:[],
      isProcessing:false
    };
  },
  components: {
    Navbar,
    CreateTweet,
    PopularList,
    TweetList,
    Spinner,
    NewTweetModal
  },
  methods: {
    handleAfterCallModal(){
      this.isEditing = true
    },
    handleAfterCloseModal(){
      this.isEditing = false
    },
    handleAfterCreatedTweet(playLoad){
      this.isEditing = false
      this.tweets.unshift({
        ...playLoad,
        isLiked:false,
        likeNum:0,
        replyNum:0,

      })
    },
    async fetchTweets(){
      try{
        this.isProcessing = true
        const { data } = await tweetsAPI.getTweets()
        this.tweets = data
        this.isProcessing= false
      }
      catch(error){
        this.isProcessing= false
         Toast.fire({
          icon: "warning",
          title: "無法讀取推文",
        })
      }
    }
  },
  created(){
    this.fetchTweets()
  }

};
</script>


<style lang="scss" scoped>
.section {
  border: 1px solid #e6ecf0;
  margin-left: 24px;
  height:100vh;
  overflow: scroll;
}

.title {
  padding: 24px 0 24px 24px;
  font-weight: 700;
}

.modal-bg {
  position: fixed;
  z-index:1;
  background-color: rgba(0, 0, 0, 0.4);
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
