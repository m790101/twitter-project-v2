<template>
  <div class="card-panel col-md-6 col-lg-3">
    <div class="card-panel__card">
      <div class="card-panel__card__header" :style="{backgroundImage: 'url(' + user.backgroundImage + ')' }">
        <img
          v-if="user.image"
          :src="user.image"
          alt="使用者照片"
          class="card-panel__card__header__avatar"
        />
        <img
          v-else
          src="./../assets/icon/user-none.png"
          alt="使用者照片"
          class="card-panel__card__header__avatar"
        />
      </div>
      <div class="card-panel__card__header__name mb-3">
        <p class="fw-bold">{{user.name}}</p>
        <p class="color-second">@{{user.account}}</p>
      </div>
      <div class="d-flex justify-content-center card-panel__card__icons mb-2">
        <div class="d-flex">
          <img src="./../assets/icon/write.png" alt="" class="icon me-2" />
          <span>{{user.tweetNum}}</span>
        </div>
        <div class="d-flex">
          <img src="./../assets/icon/like.png" alt="" class="icon me-2" />
          <span>{{user.likeNum}}</span>
        </div>
      </div>
      <div class="d-flex justify-content-center fs-14">
        <p>
          <span class="num-font">{{user.followingNum}}個</span
          ><span class="color-second">跟隨中</span>
        </p>
        <p class="ms-2">
          <span class="num-font">{{user.followerNum}}位</span
          ><span class="color-second">跟隨者</span>
        </p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    user:{
      type:Object,
      require:true
    }
  },


}
</script>






<style lang="scss" scoped>
.card-panel {
  display: flex;
  flex-wrap: wrap;

  &__card {
    width: 249px;
    height: 314px;
    border-radius: 10px;
    background-color: #f6f7f8;
    margin-top: 16px;
    margin-left: 15px;
    
    &__header {
      position: relative;
      //background-image: url("./../assets/user-card-background.png");
      background-size: cover;
      background-position: center;
      height: 140px;
      &__avatar {
        width: 100px;
        height: 100px;
        position: absolute;
        left: 50%;
        transform: translate(-50%, 0);
        bottom: -24px;
      }
      &__name {
        margin-top: 32px;
        text-align: center;
      }
    }
    &__icons{
        gap:18px;
    }
  }
}
.num-font{
    font-family: 'Montserrat';
}
.icon {
  width: 24px;
}
</style>