<template>
  <div class="tweet-list">
    <div class="tweet-list__panel d-flex justify-content-between">
      <div class="d-flex">
        <div>
          <img v-if="tweet.user.image"
            :src="tweet.user.image"
            alt="使用者照片"
            class="tweet-list__panel__avatar"
          />
          <img v-else
            src="./../assets/icon/user-none.png"
            alt="替代圖片"
            class="tweet-list__panel__avatar"
          />
        </div>

        <div class="tweet-list__panel__content">
          <div
            class="tweet-list__panel__content__title d-flex align-items-center"
          >
            <p class="fw-bold fs-16">{{ tweet.user.name }}</p>
            <p class="ms-2 fs-14 tweet-list__panel__content__title__id">
              @{{ tweet.user.account }}．<span>{{ tweet.createdAt |changeTime}}</span>
            </p>
          </div>

          <div class="tweet-list__panel__content__text word-break-keep">
            <p>
              {{ tweet.description |changeDes }}
            </p>
          </div>
        </div>
      </div>

      <div class="link" v-on:click.prevent="handleDeleteButton(tweet.id)">
        <img
          class="tweet-list__panel__content__delete"
          src="./../assets/icon/close-black.png"
          alt="刪除"
        />
        <img
          class="tweet-list__panel__content__delete__active"
          src="./../assets/icon/close-orange.png"
          alt="刪除"
        />
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  props: {
    tweet: {
      type: Object,
      require: true,
    },
  },
  methods:{
    handleDeleteButton (tweetId) {            
        this.$emit('deleteTweet',tweetId)
    }
  },
  filters:{
    changeDes (description){
      if(description.length>=50){
        return description.substring(0,49)+"..."
      } 
      return description
    },
    changeTime (createdTime){
      if(!createdTime){
        return '-'
      }
      return moment(createdTime).fromNow()

    }
  }
};
</script>

<style scoped lang="scss">
.tweet-list {
  font-size: 15px;
  margin-top: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid #e6ecf0;
}
.tweet-list__panel {
  padding-left: 24px; 

  &__content {
    margin-left: 8px;
  }
  &__avatar {
    width: 50px;
    height: 50px;
  }
  &__content__title__id {
    color: var(--secondary-color);
  }
}

.tweet-list__panel__content__text {
  margin-top: 8px; 
}

.tweet-list__panel__content__delete {
  width: 15px;
  height: 15px;
  margin-right: 5px;
  
  &__active {
    display: none;
    width: 15px;
    height: 15px;
    margin-right: 5px;
  }
}
.tweet-list__panel__avatar{  
  border-radius: 50%;
}
.link {
  &:hover,
  &:active {
    .tweet-list__panel__content__delete {
      display: none;
      &__active {
        display: initial;
      }
    }
  }
}
</style>
