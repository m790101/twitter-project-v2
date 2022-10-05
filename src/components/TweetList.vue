<template>
  <section>
    <div class="tweet-card">
      <div class="tweet-card__panel d-flex">
        <router-link to="/user/other/1">
          <img
            src="./../assets/icon/user-none.png"
            alt=""
            class="tweet-card__panel__avatar"
          />
        </router-link>

        <div class="tweet-card__panel__content">
          <div class="tweet-card__panel__content__title d-flex">
            <p class="tweet-card__panel__content__title__name">Apple</p>
            <p class="tweet-card__panel__content__title__info">
              @apple．<span>3小時</span>
            </p>
          </div>
          <router-link to="/tweets/1">
            <div class="tweet-card__panel__content__text">
              Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
              ullamco cillum dolor. Voluptate exercitation incididunt aliquip
              deserunt reprehenderit elit laborum.
            </div>
          </router-link>
          <div
            class="
              tweet-card__panel__content__icons-panel
              d-flex
              align-items-center
            "
          >
            <div
              class="
                tweet-card__panel__content__icons-panel__icon
                d-flex
                align-items-center
                cursor-pointer
              "
              @click="callReplyModal"
            >
              <img src="./../assets/icon/comments.png" alt="" class="icon" />
              <span class="tweet-card__panel__content__icons-panel__icon__num"
                >13</span
              >
            </div>
            <div
              class="
                tweet-card__panel__content__icons-panel__icon
                d-flex
                align-items-center
                cursor-pointer
              "
              @click="toggleLike"
            >
                <img
                  src="./../assets/icon/like.png"
                  alt=""
                  class="icon"
                  v-if="!isLiked"
                />
                <img
                  src="./../assets/icon/like-active.png"
                  alt=""
                  class="icon "
                  v-else
                />
                <span class="tweet-card__panel__content__icons-panel__icon__num"
                  >13</span
                >
            </div>
          </div>
        </div>
      </div>
    </div>
    <ReplyModal @closeReplyModal="handleCloseReplyModal" v-if="isReplying" />
    <div class="modal-bg" :class="{ active: isReplying }"></div>
  </section>
</template>



<style lang="scss" scoped>
.tweet-card {
  position: relative;
  width: 639px;
  height: 136px;
  margin-top: 10px;
  font-size: 15px;
}
.tweet-card__panel {
  padding: 0px 0 17px 24px;
  border-bottom: 1px solid #e6ecf0;
  &__avatar {
    width: 50px;
    height: 50px;
  }
  &__content {
    margin-left: 8px;
    &__title {
      margin-bottom: 8px;
      &__name {
        font-weight: 700;
      }
      &__info {
        font-size: 14px;
        margin-left: 8px;
        color: var(--secondary-color);
      }
    }
    &__text {
      margin-bottom: 8px;
    }
    &__icons-panel__icon {
      margin-right: 41px;
      &__num {
        color: var(--secondary-color);
      }
    }
  }
}
.icon {
  width: 13px;
  height: 13px;
  margin-right: 8px;
}
.modal-bg {
  position: fixed;
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


<script>
import ReplyModal from "./ReplyModal.vue";
export default {
  data() {
    return {
      isLiked: false,
      isReplying: false,
    };
  },
  components: {
    ReplyModal,
  },
  methods: {
    callReplyModal() {
      this.isReplying = true;
    },
    handleCloseReplyModal() {
      this.isReplying = false;
    },
    toggleLike(){
      this.isLiked = !this.isLiked
    }
  },
};
</script>