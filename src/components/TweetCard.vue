<template>
  <section>
    <div class="card">
      <div class="card__body">
        <div class="d-flex card__body__account">
          <router-link :to="{name:'user-information', params:user.id}">
          <img
            src="./../assets/icon/user-none.png"
            class="card__body__account__avatar"
          />
          </router-link>
          <div class="card__body__account__info">
            <p class="fw-bold">username</p>
            <p class="fs-14 card__body__account__info__id">@userid</p>
          </div>
        </div>
        <div class="">
          <p class="card__body__text">
            Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
            cillum dolor. Voluptate exercitation incididunt aliquip deserunt.
          </p>
          <span class="fs-14 card__body__time">上午 10:05・2021年11月10日</span>
        </div>
      </div>
      <div class="d-flex card__reply-like">
        <p>
          <span class="fw-bold num-font">34</span
          ><span class="color-second ms-1">回覆</span>
        </p>
        <p class="ms-4">
          <span class="fw-bold num-font">808</span
          ><span class="color-second ms-1">喜歡次數</span>
        </p>
      </div>

      <div class="d-flex card__icons">
        <img src="./../assets/icon/comments.png" class="icon cursor-pointer" @click="callRepltModal"/>
          <img
            src="./../assets/icon/like-active.png"
            alt=""
            class="icon card__like-icon cursor-pointer"
            v-if="isLiked"
            @click="toggleIsLiked" 
          />
          <img
            src="./../assets/icon/like.png"
            alt=""
            class="icon card__like-icon cursor-pointer"
            @click="toggleIsLiked" 
            v-else
          />
      </div>
    </div>
    <ReplyModal
        @closeReplyModal="handleCloseReplyModal" v-if="isReplying" 
        />
        <div class="modal-bg" :class="{ active: isReplying }"></div>
  </section>
</template>

<script>
import ReplyModal from "../components/ReplyModal.vue";

export default {
  data() {
    return {
      user:{
        id:1
      },
      isLiked: false,
      isReplying:false
    };
  },
  components:{
      ReplyModal
  },
  methods:{
      toggleIsLiked(){
          this.isLiked = !this.isLiked
      },
      callRepltModal(){
          this.isReplying = true
      },
      handleCloseReplyModal(){
          this.isReplying = false
      }
  }
};
</script>


<style lang="scss" scoped>
section {
  width: 100%;
  padding-top: 24px;
  border-bottom: 1px solid #e6ecf0;
}

.card {
  width: 602px;
  margin: 0 16px;
  &__body {
    border-bottom: 1px solid #e6ecf0;
    &__account__info {
      margin-left: 8px;
      &__id {
        color: var(--secondary-color);
      }
    }
    &__account__avatar {
      width: 50px;
      height: 50px;
    }
    &__text {
      margin-top: 8px;
      font-size: 24px;
      margin-bottom: 8px;
    }
    &__time {
      color: var(--secondary-color);
      display: inline-block;
      margin-bottom: 8px;
    }
  }
  &__reply-like {
    padding: 16px 0;
    font-size: 19px;
    border-bottom: 1px solid #e6ecf0;
  }
}
.card__icons {
  padding: 21px 0;
  & .icon {
    width: 25px;
    height: 25px;
  }
}

.card__like-icon {
  margin-left: 134px;
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