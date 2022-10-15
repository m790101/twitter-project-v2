<template>
  <section>
    <div class="tweet-card" v-for="tweet in tweets" :key="tweet.id">
      <div class="tweet-card__panel d-flex">
        <router-link
          :to="{ name: 'user-information', params: { id: tweet.user.id || tweet.UserId} }"
        >
          <img
            :src="tweet.user.image | emptyImage"
            alt=""
            class="tweet-card__panel__avatar"
          />
        </router-link>

        <div class="tweet-card__panel__content">
          <div class="tweet-card__panel__content__title d-flex">
            <p class="tweet-card__panel__content__title__name truncate">
              {{ tweet.user.name }}
            </p>
            <p class="tweet-card__panel__content__title__info">
              @{{ tweet.user.account }}．<span>{{tweet.createdAt | fromNow}}</span>
            </p>
          </div>
          <router-link :to="{ name:'replyList', params: { id: tweet.id } }">
            <div class="tweet-card__panel__content__text">
             {{ tweet.description }}
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
              @click="callReplyModal(tweet)"
            >
              <img src="./../assets/icon/comments.png" alt="" class="icon" />
              <span
                class="tweet-card__panel__content__icons-panel__icon__num"
                >{{ tweet.replyNum }}</span
              >
            </div>
            <div
              class="
                tweet-card__panel__content__icons-panel__icon
                d-flex
                align-items-center
                cursor-pointer
              "
            >
              <img
                src="./../assets/icon/like.png"
                alt=""
                class="icon"
                @click="like(tweet.id)"
                v-if="!tweet.isLiked"
              />
              <img
                src="./../assets/icon/like-active.png"
                alt=""
                class="icon"
                @click="unLike(tweet.id)"
                v-else
              />
              <span
                class="tweet-card__panel__content__icons-panel__icon__num"
                >{{ tweet.likeNum }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <ReplyModal 
    :initialTweet="tweetEditing"
    @closeReplyModal="handleCloseReplyModal"
    @afterCreateReply="handleAfterCreateReply" 
    v-if="isReplying"
    />
    <div class="modal-bg" :class="{ active: isReplying }"></div>
  </section>
</template>



<style lang="scss" scoped>
.tweet-card {
  position: relative;
  width: 639px;
  margin-top: 16px;
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
      width:90%;
      margin-bottom: 9px;
      overflow-wrap: anywhere;

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
.truncate{
  white-space: nowrap; 
  max-width: 80px; 
  overflow: hidden;
  text-overflow: ellipsis; 
}
</style>


<script>
import ReplyModal from "./ReplyModal.vue";
import tweetApi from "./../apis/tweets";
import { Toast } from "./../utils/helpers";
import {fromNowFilter, emptyImageFilter} from './../utils/mixins'

export default {
  props: {
    initialTweets: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      tweets: this.initialTweets,
      user: {
        id: 1,
      },
      isLiked: false,
      isReplying: false,
      tweetEditing:{}
    };
  },
  mixins:[fromNowFilter,emptyImageFilter],
  components: {
    ReplyModal,
  },
  methods: {
    callReplyModal(tweet) {
      this.isReplying = true;
      this.tweetEditing = {
        ...tweet
      }
    },
    handleCloseReplyModal() {
      this.isReplying = false;
    },
    handleAfterCreateReply(playLoad){
      this.tweets = this.tweets.map(tweet=>{
          if(tweet.id === playLoad.id){
            return {
              ...tweet,
              replyNum: tweet.replyNum + 1
            }
          }
          return tweet
      })
    },
    async like(id) {
      try {
        const { data } = await tweetApi.like({ id });
        if(data.status !== 'success')return new Error
        this.tweets = this.tweets.map((tweet) => {
          if (tweet.id === id) {
            return (tweet = {
              ...tweet,
              isLiked: true,
              likeNum: tweet.likeNum + 1,
            });
          }
          return tweet;
        });
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
        this.tweets = this.tweets.map((tweet) => {
          if (tweet.id === id) {
            return (tweet = {
              ...tweet,
              isLiked: false,
              likeNum: tweet.likeNum - 1,
            });
          }
          return tweet;
        });
      } catch (error) {
        Toast.fire({
          icon: "warning",
          title: "無法取消喜愛推文",
        });
      }
    },
  },
  watch: {
    initialTweets: function () {
      this.tweets = this.initialTweets;
    },
  },
};
</script>