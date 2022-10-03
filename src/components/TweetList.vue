<template>
  <div class="tweet-card">
    <div class="tweet-card__panel d-flex">
      <img
        src="./../assets/icon/user-none.png"
        alt=""
        class="tweet-card__panel__avatar"
      />
      <div class="tweet-card__panel__content">
        <div class="tweet-card__panel__content__title d-flex">
          <p class="tweet-card__panel__content__title__name">Apple</p>
          <p class="tweet-card__panel__content__title__info">
            @apple．<span>3小時</span>
          </p>
        </div>
        <div class="tweet-card__panel__content__text">
          Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
          cillum dolor. Voluptate exercitation incididunt aliquip deserunt
          reprehenderit elit laborum.
        </div>
        <div class="tweet-card__panel__content__icons-panel d-flex">
          <div class="tweet-card__panel__content__icons-panel__icon">
            <router-link
              to=""
              data-bs-toggle="modal"
              data-bs-target="#comments"
              class="d-flex align-items-center"
            >
              <img src="./../assets/icon/comments.png" alt="" class="icon" />
              <span class=" tweet-card__panel__content__icons-panel__icon__num">13</span>
            </router-link>
          </div>
          <div
            class="
              tweet-card__panel__content__icons-panel__icon
              d-flex
              align-items-center
            "
          >
            <router-link to="" class="d-flex align-items-center">
              <img
                src="./../assets/icon/like.png"
                alt=""
                class="icon"
                v-if="!isLiked"
              />
              <img
                src="./../assets/icon/like-active.png"
                alt=""
                class="icon"
                v-else
              />
              <span class=" tweet-card__panel__content__icons-panel__icon__num">13</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style lang="scss" scoped>
.tweet-card {
  width: 600px;
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
      &__num{
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
</style>


<script>
export default {
  data() {
    return {
      isLiked: false,
    };
  },
};
</script>