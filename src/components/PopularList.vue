<template>
  <section>
    <h4 class="title">推薦跟隨</h4>
    <div class="section__panel">
      <div class="section__panel__account d-flex" v-for="user in users" :key="user.id">
        <img
          src="./../assets/icon/user-none.png"
          alt=""
          class="section__panel__account__avatar"
        />
        <div class="section__panel__account__content d-flex align-items-center">
          <div
            class="
              section__panel__account__content__title
              d-flex
              flex-column
              justify-content-start
            "
          >
            <p class="fw-bold truncate">{{user.name}}</p>
            <p class="section__panel__account__content__title__id fs-14">
              @{{user.account}}
            </p>
          </div>
          <div class="section__panel__account__content__btn-section d-flex">
            <button class="btn-main" style="width: 96px" v-if="user.isFollowing">
              正在追蹤
            </button>
            <button class="btn-white" v-else>跟隨</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import userApi from "./../apis/user";
import { Toast } from "./../utils/helpers";
export default {
  data() {
    return {
      users:[]
    };
  },
  methods:{
    async fetchData(){
      try{
        const {data} = await userApi.getUserTop()
        this.users = data
      }
      catch(error){
          Toast.fire({
          icon: "warning",
          title: "無法讀取使用者",
        });
      }
    }
  },
  created(){
    this.fetchData()
  }
};
</script>



<style scoped lang="scss">
section {
  margin: 16px 0 0 24px;
  background-color: var(--1-gray);
  border-radius: 16px;
  width: 273px;
}
.title {
  padding: 24px 0 24px 24px;
  border-bottom: 1px solid #e6ecf0;
}
.section__panel {
  padding: 16px 16px 0 16px;
  border-top: 1px solid var(--1-gray);
   &__account {
    margin-bottom:32px;
    &__avatar {
      width: 50px;
      height: 50px;
    }
  }
}

.section__panel__account__content {
  margin-left: 8px;
  flex-grow: 1;
  &__title__id {
    color: var(--secondary-color);
  }
  &__btn-section {
    margin-left: 13px;
    margin-right:16px;
  }
}
.truncate{
  white-space: nowrap; 
  width: 80px; 
  overflow: hidden;
  text-overflow: ellipsis; 
  /*display: -webkit-box;
  -webkit-line-clamp: 1;    
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;*/
}
</style>