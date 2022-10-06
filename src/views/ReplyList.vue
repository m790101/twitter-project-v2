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
        <TweetCard />
        <ReplyList />
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

export default {
  data() {
    return {
      isEditing: false,
    };
  },
  components: {
    Navbar,
    PopularList,
    ReplyList,
    TweetCard,
  },
  methods: {},
};
</script>


<style lang="scss" scoped>
.section {
  width: 639px;
  position: relative;
  border: 1px solid #e6ecf0;
  margin-left: 24px;
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
</style>