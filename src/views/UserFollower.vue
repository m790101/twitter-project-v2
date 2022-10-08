<template>
  <main class="container d-flex">
    <div class="container__left">
      <Navbar />
    </div>
    <div class="container__right d-flex">
      <div class="section">
        <div class="header d-flex align-items-center title">
          <img
            src="./../assets/icon/arrow.png"
            class="cursor-pointer"
            alt=""
            style="width: 17px; height: 14px"
            @click="$router.back()"
          />
          <div class="header__text">
            <h5 class="">John Doe</h5>
            <p class="header__text__info"><span>25</span> 推文</p>
          </div>
        </div>
        <ul class="d-flex nav-pill">
          <router-link :to="`/user/${user.id}/follower`">
            <li class="nav-item cursor-pointer active">追蹤者</li>
          </router-link>
          <router-link :to="`/user/${user.id}/following`">
            <li class="nav-item cursor-pointer">正在追隨</li>
          </router-link>
        </ul>
        <Account />
      </div>
    </div>
    <PopularList />
  </main>
</template>

<script>
import Navbar from "../components/Navbar.vue";

import PopularList from "../components/PopularList.vue";
import Account from "../components/Account.vue";

export default {
  data() {
    return {
          user:{
            id:1
          }
    };
  },
  methods: {
    handleAfterPage(playLoad) {
      this.page = playLoad;
    },
    handleCloseUserEditModal() {
      this.isEditing = false;
    },
    handleAfterCallModal() {
      this.isEditing = true;
    },
  },
  components: {
    Navbar,
    Account,
    PopularList,
  },
};
</script>


<style lang="scss" scoped>
.section {
  width: 634px;
  position: relative;
  border: 1px solid #e6ecf0;
  margin-left: 24px;
}

.title {
  padding: 24px 0 24px 24px;
  font-weight: 700;
}
.header {
  height: 75px;
  border-bottom: 1px solid #e6ecf0;
  &__text {
    margin-left: 19px;
    &__info {
      font-weight: 500;
      font-size: 13px;
      line-height: 13px;
      color: var(--secondary-color);
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
  &.active {
    color: var(--brand-color);
    border-bottom: 2px solid var(--brand-color);
  }
}
</style>

