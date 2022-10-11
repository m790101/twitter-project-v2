<template>
  <main class="container d-flex">
    <div class="container__left">
      <Navbar/>
    </div>
    <div class="container__right d-flex">
      <div class="section">
        <div class="d-flex align-items-center container__right__header">
          <img
            src="./../assets/icon/arrow.png"
            class="cursor-pointer container__right__header__arrow"
            style="width: 17px; height: 14px"
            @click="$router.back()"
          />
          <h4 class="title">推文</h4>
        </div>
        <Spinner
        v-if="isProcessing"
        />
        <template v-else>
        <TweetCard
        :initial-tweet="tweet"
        @afterCallReplyModal="handleAfterCallReplyModal"
        />
        <ReplyModal
        :initial-tweet="tweet"
        v-if="isReplying"
        @closeReplyModal="handleCloseReplyModal"
        @afterCreateReply="handleAfterCreateReply"
        />
      <div class="modal-bg" :class="{ active: isReplying }"></div>
        <ReplyList
        :initial-replies="replies"
        />
        </template>
      </div>
    </div>
    <div class=""></div>
    <PopularList />
  </main>
</template>

<script>
import Navbar from "./../components/Navbar.vue";
import ReplyList from "./../components/ReplyList.vue";
import PopularList from "./../components/PopularList.vue";
import TweetCard from "../components/TweetCard.vue";
import ReplyModal from "./../components/ReplyModal.vue";
import tweetApi from './../apis/tweets'
import { Toast } from "./../utils/helpers";
import Spinner from './../components/Spinner.vue'

export default {
  data() {
    return {
      isReplying: false,
      tweet:{},
      replies:[],
      isProcessing:false
    };
  },
  components: {
    Navbar,
    PopularList,
    ReplyList,
    TweetCard,
    Spinner,
    ReplyModal
  },
  methods: {
    handleCloseReplyModal(){
      this.isReplying = false
    },
    handleAfterCallReplyModal(){
      this.isReplying = true
    },
    handleAfterCreateReply(playLoad){
      this.replies.unshift({
        ...playLoad

      })
    },
    async fetchData(id){
      try{
        this.isProcessing = true
        const { data } = await tweetApi.getTweet({id})
        const {data:replies} = await tweetApi.getReplies({tweet_id:id})
        this.replies = replies
        this.tweet = data
        this.isProcessing = false
      }
      catch(error){
        this.isProcessing = false
         Toast.fire({
          icon: "warning",
          title: "無法讀取推文",
        })
      }
    }
  },
  created(){ 
      const {id}=(this.$route.params)
    this.fetchData(Number(id))
    },
  beforeRouteUpdate(from, to, next){
    const { id } = to.params
    this.fetchData(Number(id))
    next()
  }
};
</script>


<style lang="scss" scoped>
.section {
  width: 639px;
  position: relative;
  border: 1px solid #e6ecf0;
  margin-left: 24px;
    height:100vh;
  overflow: scroll;
}
.container__right__header {
  border-bottom: 1px solid #e6ecf0;
  &__arrow {
    margin-left: 28px;
  }
}

.title {
  padding: 24px 0 24px 19px;
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