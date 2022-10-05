<template>
  <main class="container d-flex">
    <div class="container__left">
      <Navbar />
    </div>
    <div class="container__right d-flex">
      <div class="section">
        <UserInfo @afterCallModal="handleAfterCallModal" />
        <UserEditModal
          @closeUserEditModal="handleCloseUserEditModal"
          v-if="isEditing"
        />
        <div class="modal-bg" :class="{ active: isEditing }"></div>
        <NavTab @afterPage="handleAfterPage" />
        <TweetList v-if="page === 'tweet'" />
        <ReplyList v-else-if="page === 'reply'" />
        <TweetList v-if="page === 'like'" />
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

export default {
  data() {
    return {
      page: "tweet",
      isEditing: false,
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
  },
  components: {
    Navbar,
    UserInfo,
    //PopularList,
    TweetList,
    NavTab,
    ReplyList,
    PopularList,
    UserEditModal,
  },
};
</script>


<style lang="scss" scoped>
.section {
  width: 634px;
  position: relative;
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
