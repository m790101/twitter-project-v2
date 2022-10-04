<template>
  <main class="container d-flex">
    <div class="container__left">
      <Navbar />
    </div>
    <div class="container__right d-flex">
      <div class="section">
        <h4 class="title">首頁</h4>
        <CreateTweet />
        <TweetList />
      </div>
    </div>
    <div class="test"></div>
    <!--PopularList
              <PopularList/>
              -->
  </main>
</template>

<script>
import Navbar from "./../components/Navbar.vue";
import TweetList from "./../components/TweetList.vue";
//import PopularList from "./../components/Recommendation.vue";
import CreateTweet from '../components/CreateTweet.vue'

export default {
  components: {
    Navbar,
    CreateTweet,
    //PopularList,
    TweetList,

  },
};
</script>


<style lang="scss" scoped>
.section {
  border: 1px solid #e6ecf0;
  margin-left: 24px;
}
.new-tweet {
  & &__body {
    border: 0;
    padding: 16px 25px 16px 24px;
    border-top: 1px solid #e6ecf0;
    border-bottom: 10px solid #e6ecf0;
  }
}
.new-tweet__body__btn-tweet {
  width: 64px;
}

.card-title {
  margin-left: 8px;
  color: #6c757d;
  font-weight: 400;
}

.title {
  padding: 24px 0 24px 24px;
  font-weight: 700;
}

.tweet-card__panel {
  padding: 16px 0 17px 24px;
  border-bottom: 1px solid #e6ecf0;
  & &__content {
    margin-left: 8px;
  }
}
.test {
  width: 273px;
  background: red;
  margin-left: 24px;
}
</style>
