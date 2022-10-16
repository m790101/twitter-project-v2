<template>
  <section>
    <div class="card">
      <div class="card__body">
        <div class="d-flex card__body__account">
          <router-link :to="{name:'user-information', params:{id:user.id}}">
          <img
            :src="tweet.user.image | emptyImage"
            class="card__body__account__avatar"
          />
          </router-link>
          <div class="card__body__account__info">
            <p class="fw-bold">{{tweet.user.name}}</p>
            <p class="fs-14 card__body__account__info__id">@{{tweet.user.account}}</p>
          </div>
        </div>
        <div class="">
          <p class="card__body__text">
            {{tweet.description}}
          </p>
          <span class="fs-14 card__body__time">{{tweet.createdAt | date}}</span>
        </div>
      </div>
      <div class="d-flex card__reply-like">
        <p>
          <span class="fw-bold num-font">{{tweet.replyNum}}</span
          ><span class="color-second ms-1">回覆</span>
        </p>
        <p class="ms-4">
          <span class="fw-bold num-font">{{tweet.likeNum}}</span
          ><span class="color-second ms-1">喜歡次數</span>
        </p>
      </div>

      <div class="d-flex card__icons">
        <img src="./../assets/icon/comments.png" class="icon cursor-pointer" @click="callReplyModal"/>
          <img
            src="./../assets/icon/like-active.png"
            alt=""
            class="icon card__like-icon cursor-pointer"
            v-if="tweet.isLiked"
            @click="unLike(tweet.id)"
          />
          <img
            src="./../assets/icon/like.png"
            alt=""
            class="icon card__like-icon cursor-pointer"
             @click="like(tweet.id)"
            v-else
          />
      </div>
    </div>
  </section>
</template>

<script>
import tweetApi from "./../apis/tweets";
import { Toast } from "./../utils/helpers";
import moment from 'moment'
import {emptyImageFilter} from './../utils/mixins'

export default {
  props:{
    initialTweet:{
      type:Object,
      required:true
    }
  },
  data() {
    return {
      user:{
        id:1
      },
      isReplying:false,
      tweet:this.initialTweet
    };
  },
  components:{
  },
  mixins:[emptyImageFilter],
  methods:{
    async like(id) {
      try {
        const { data } = await tweetApi.like({ id });
        if(data.status !== 'success')return new Error
          this.tweet={
            ...this.tweet,
            likeNum: this.tweet.likeNum + 1,
            isLiked:true
          }

      } catch (error) {
        Toast.fire({
          icon: "warning",
          title: "無法喜愛推文",
        });
      }
    },
    async unLike(id) {
      try {
        const { data } = await tweetApi.unLike({ id });
         if(data.status !== 'success')return new Error
            this.tweet={
            ...this.tweet,
            likeNum: this.tweet.likeNum - 1,
            isLiked:false
          }
        
      } catch (error) {
        Toast.fire({
          icon: "warning",
          title: "無法取消喜愛推文",
        });
      }
    },
      callReplyModal(){
          this.$emit('afterCallReplyModal')
      },
      handleCloseReplyModal(){
          this.isReplying = false
      }
  },
  watch:{
    initialTweet(){
      this.tweet = this.initialTweet
    }
  },
  filters:{
        date(dateTime){
                return moment(dateTime).format("a h:mm・YYYY年MMMDo")
        }
    },
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
            overflow-wrap: anywhere;
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