<template>
  <main class="container d-flex">
    <div class="container__left">
      <Navbar
      @afterNewTweet="handleAfterNewTweet"
      />
    </div>
    <div class="container__right d-flex">
      <div class="section">
        <h4 class="title">首頁</h4>
        <CreateTweet 
        :navIsEditing="isEditing"
        @afterCloseModal="handleAfterCloseModal"
        />
        <TweetList />
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

export default {
  data() {
    return {
      isEditing:false
    };
  },
  components: {
    Navbar,
    CreateTweet,
    PopularList,
    TweetList,
  },
  methods: {
  },

};
</script>


<style lang="scss" scoped>
.section {
  position: relative;
  border: 1px solid #e6ecf0;
  margin-left: 24px;
}

.title {
  padding: 24px 0 24px 24px;
  font-weight: 700;
}
</style>
