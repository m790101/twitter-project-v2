<template>
  <div class="tweet-card">
    <div class="tweet-card__panel d-flex" v-for="reply in replies" :key="reply.id">
      <router-link :to="{name:'user-information', params:{id:reply.UserId}}">
        <img
          :src="reply.user.image | emptyImage"
          alt=""
          class="tweet-card__panel__avatar"
        />
      </router-link>
      <div class="tweet-card__panel__content">
        <div class="tweet-card__panel__content__title d-flex  d-flex align-items-center">
          <p class="fw-bold fs-16">{{reply.user.name}}</p>
          <p class="ms-1 fs-14 tweet-card__panel__content__title__id">@{{reply.user.account}}．<span>{{reply.createdAt | fromNow}}</span></p>
        </div>
        <div class="tweet-card__panel__content__text ">
            <p class="fs-14 mb-2 tweet-card__panel__content__text__reply">回覆 <span class="tweet-card__panel__content__text__reply-to">@{{reply.user.account}}</span></p>
          <p>
           {{reply.comment}}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
.tweet-card{
  width:634px;
  height:121px;
  font-size:15px;
  &__panel {
      margin-top:10px;
  padding: 0px 0 17px 24px;
  border-bottom: 1px solid #e6ecf0;
   &__content {
    margin-left: 8px;
  }
  &__avatar{
    width:50px;
    height:50px;
  }
  &__content__title__id{
    color: var(--secondary-color);
  }
}
}

.tweet-card__panel__content__text{
  &__reply{
    margin-top:8px;
    color: var(--secondary-color);
  }
  &__reply-to{
    color: var(--brand-color);
    }
}

</style>


<script>
import {fromNowFilter,emptyImageFilter} from './../utils/mixins'
export default {
  props:{
    initialReplies:{
      type:Array,
      required:true
    }
  },
  data(){
    return {
      user:{
        id:1,
      },
       replies:this.initialReplies
    }
  },
  watch:{
    initialReplies(){
      this.replies = this.initialReplies
    }
  },
  mixins:[fromNowFilter,emptyImageFilter]
}
</script>