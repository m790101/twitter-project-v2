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
import adminAPI from "./../apis/admin";
import { Toast } from "./../utils/helpers"



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
    this.fetchTweet ();
  },
  methods: {
   async fetchTweet () {
   try {
    const {data} = await adminAPI.admin.getTweets( ) 
    console.log(data)   
    this.tweet = data

   } catch (error) {
      console.log('error',error)
   }
      
    },

   async afterDeleteTweet(tweetId) {
      try{
        const { data } = await adminAPI.admin.deleteTweets({ tweetId })
        console.log(data)
        if (data.status === 'error') {
          throw new Error(data.message)
       
        }else{
          Toast.fire({
          icon: 'error',
          title: '已移除推文'
        })
        this.fetchTweet()
        }
     
      } catch (error) {
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法移除推文，請稍後再試'
        })
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
}

.title {
  padding: 24px 0 24px 24px;
  font-weight: 700;
  border-bottom: 1px solid #e6ecf0;
}
</style>
