<template>
  <section>
    <div class="header d-flex align-items-center title">
      <img
        src="./../assets/icon/arrow.png"
        class="cursor-pointer"
        alt=""
        style="width: 17px; height: 14px"
        @click="$router.back()"
      />
      <div class="header__text">
        <h5 class="">{{user.name}}</h5>
        <p class="header__text__info"><span>{{initialTweetsNum}}</span> 推文</p>
      </div>
    </div>
    <div class="card">
      <div>
        <div class="d-flex card__profile-pic-section mb-3">
          <img
            src="./../assets/icon/user.png"
            alt=""
            class="card__profile-pic-section_avatar"
          />
        </div>

        <div class="card__body pb-2 mx-3">
          <div class="d-flex justify-content-end card__body__function-self" v-if="user.id === 2">
            <button
              class="btn-white"
              style="width: 128px"
              @click="callModal"
              
            >
              編輯個人資料
            </button>
          </div>
          <div class="d-flex justify-content-end align-items-center card__body__function-other" v-else>
              <img src="./../assets/icon/btn-msg.png"  class="icon cursor-pointer">
              <img src="./../assets/icon/btn-notfi.png"  v-if="!user.isNotificated" class="icon cursor-pointer" @click="toggleNoti">
              <img src="./../assets/icon/btn-notfi-active.png" v-else class="icon cursor-pointer" @click="toggleNoti">
            <button class="btn-main" style="width:96px;" v-if="user.isfollowed">正在跟隨</button>
            <button class="btn-white" style="width:96px;" v-else>跟隨</button>
          </div>
          <div class="card__body__text">
            <h5 class="">{{user.name}}</h5>
            <span class="font-14 card__body__text__account">@{{user.account}}</span>
            <p class="font-14 mt-2">
              {{user.introduction}}
            </p>
          </div>
        </div>
      </div>
      <div class="d-flex card__follow mx-3 pb-3 font-14">
        <p>
          <router-link :to="{name:'user-following',params:{id:user.id}}">
          <span class="num-font">34 個</span
          ><span class="card__follow__font-light">跟隨中</span>
          </router-link>
        </p>
        <p class="ms-4">
          <router-link :to="{name:'user-follower',params:{id:user.id}}">
          <span class="num-font">59 位</span
          ><span class="card__follow__font-light">跟隨者</span>
          </router-link>
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.header {
  height: 75px;
  &__text{
      margin-left: 19px;
      &__info{
          font-size:13px;
          line-height:13px;
          color:var(--secondary-color)
      }
  }
}
.card-text {
  font-size: 24px;
}
.card-title {
  margin-left: 8px;
  color: #6c757d;
  font-weight: 400;
}

.title {
  padding: 24px 0 24px 24px;
}

.card {
  width: 100%;
  height: 375px;
  border-left: 0;
  border-right: 0;
  border-bottom: 0;
  border-radius: 0;
  margin-bottom: 20px;
  & &__profile-pic-section {
    position: relative;
    height: 200px;
    background-image: url("./../assets/profile-background.png");
    background-size: cover;
    background-position: center;
    & img {
      width: 140px;
      height: 140px;
      display: block;
      position: absolute;
      bottom: 0;
      transform: translate(0, 50%);
      left: 16px;
      border: 4px solid white;
      border-radius: 70%;
    }
  }
  &__body{
    &__function-other{
      gap:16px;
    }
  }
  &__body__text{
      margin-top:8px;
      &__account{
          color: var(--secondary-color);
      }
  }
  &__follow {
    font-size: 14px;
    &__font-light{
        color: var(--secondary-color);
    }
  }
}
.icon{
  width:40px;
  height:40px;
}


</style>

<script>
export default {
  props:{
    initialUser:{
      type:Object,
      required:true
    },
    initialTweetsNum:{
      type:Number,
      required:true
    }
  },
  data(){
    return {
      user:{
        id:1,
        account:'',
        backgroundImage:'',
        email:'',
        image:'',
        introduction:'',
        name:'',
        role:'',
        isNotificated:false,
        isfollowed:true

      }
    }
  },
  methods:{
    callModal(){
      this.$emit('afterCallModal')
    },
    toggleNoti(){
      this.user.isNotificated = !this.user.isNotificated
    }
  },
  watch:{
    initialUser(){
      this.user={
        ...this.user,
        ...this.initialUser
      }
    }
  }
}
</script>