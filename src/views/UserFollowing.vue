<template>
  <main class="container d-flex">
    <div class="container__left">
      <Navbar />
    </div>
    <div class="container__right d-flex">
      <div class="section">
                <Spinner
        v-if="isProcessing"
        />
        <template v-else>
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
            <p class="header__text__info"><span>{{tweetNum}}</span> 推文</p>
          </div>
        </div>
        <ul class="d-flex nav-pill">
          <router-link :to="`/user/${user.id}/follower`">
            <li class="nav-item cursor-pointer ">追蹤者</li>
          </router-link>
          <router-link :to="`/user/${user.id}/following`">
            <li class="nav-item cursor-pointer active">正在追隨</li>
          </router-link>
  </ul>
        </template>

        <Account 
        :initial-data="followings"
        />
      </div>
    </div>
    <PopularList />
  </main>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import PopularList from "../components/PopularList.vue";
import Account from "../components/Account.vue";
import userApi from "./../apis/user";
import { Toast } from "./../utils/helpers";
import Spinner from './../components/Spinner.vue'

export default {
  data() {
    return {
        user:{
            id:-1
          },
          followings:[],
          isProcessing:false,
          tweetNum:null
    };
  },
  methods:{
    async getFollowing(id){
      try{
        this.isProcessing = true
        const {data} = await userApi.getFollowings(id)
        this.followings = data
        this.isProcessing = false
      }
      catch(error){
        this.isProcessing = false
          Toast.fire({
          icon: "warning",
          title: "無法讀取正在追蹤者",
        });
      }
    },
        async getData(id){
       try{
        const user = await userApi.getUser({id})
        const tweet = await userApi.getTweets({ id });
        this.user = {
          ...this.user,
          ...user.data
        }
        this.tweetNum = tweet.data.length
      }
      catch(error){
          Toast.fire({
          icon: "warning",
          title: "無法讀取帳號",
        });
      }
    } 
  },
  components: {
    Navbar,
    Account,
    PopularList,
    Spinner
  },
  created(){
    const{id} = this.$route.params
    this.getFollowing(Number(id))
    this.getData(Number(id))
    this.user.id = Number(id)
  },
  beforeRouteUpdate(from, to ,next){
      const { id } = to.params
    this.getFollowing(Number(id))
    this.getData(Number(id))
    next()
  }
};
</script>


<style lang="scss" scoped>
.section {
  width: 634px;
  position: relative;
  border: 1px solid #e6ecf0;
  margin-left: 24px;
  height:100vh;
  overflow: scroll;
}

.title {
  padding: 24px 0 24px 24px;
  font-weight: 700;
}
.header {
  height: 75px;
    border-bottom: 1px solid #e6ecf0;
  &__text{
      margin-left: 19px;
      &__info{
        font-weight:500;
          font-size:13px;
          line-height:13px;
          color:var(--secondary-color)
      }
  }
}

.nav-pill {
  border-bottom: 1px solid #e6ecf0;
}
.nav-item {
  padding: 15px 0;
  font-weight: 700;
  width: 130px;
  text-align: center;
  border-bottom: 2px solid white;
  &:hover {
    color: var(--brand-color);
    border-bottom: 2px solid var(--brand-color);
  }
  &:active {
    color: var(--brand-color);
    border-bottom: 2px solid var(--brand-color);
  }
  &.active{
      color: var(--brand-color);
    border-bottom: 2px solid var(--brand-color);
  }
}
</style>
