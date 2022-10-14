<template>
  <nav class="d-flex flex-column justify-content-between ">
    <div class="menu d-flex flex-column">
      <div>
        <img src="./../assets/logo.png" alt="" class="menu__logo" />
      </div>
      <div class="menu__function">
        <router-link
          to="/admin/tweets"
          class="text-center d-flex link align-items-center"
        >
          <img
            src="./../assets/icon/home.png"
            alt=""
            class="menu__function__icon"
          />
          <img
            src="./../assets/icon/home-active.png"
            alt=""
            class="menu__function__icon__active"
          />
          <span>推文清單</span>
        </router-link>
      </div>
      <div class="menu__function">
        <router-link
          to="/admin/users"
          class="text-center d-flex link align-items-center"
        >
          <img
            src="./../assets/icon/profile.png"
            alt=""
            class="menu__function__icon"
          />
          <img
            src="./../assets/icon/profile-active.png"
            alt=""
            class="menu__function__icon__active"
          />
          <span>使用者列表</span>
        </router-link>
      </div>
    </div>

    <div class=" d-flex flex-column justify-contnet-center">
      <div class="d-flex link align-items-center cursor-pointer" @click="logout">
        <img
          src="./../assets/icon/logout.png"
          alt=""
          class="menu__function__icon"
        />
        <img
          src="./../assets/icon/logout-active.png"
          alt=""
          class="menu__function__icon__active"
        />
        <span  @click="logout">登出</span>
      </div>
    </div>

  </nav>
</template>



<script>
export default {
  data() {
    return {
      isEditing: false,
    };
  },
 
  methods:{
    logout(){
      localStorage.removeItem('tokenAdmin')
      this.$router.push('/admin/signin')
    }
  }
};
</script>

<style scoped lang="scss">
nav {
  width: 178px;
  height: 100%;
  position:relative;
  padding-bottom: 16px;
}
.menu {
  flex: 1;
  & &__logo {
    width: 40px;
    height: 40px;
    margin: 13px 0 30px 13px;
  }
  & &__function {
    margin-bottom: 40px;
  }
}
.menu__function__icon {
  max-width: 21px;
  margin-right: 17px;
  margin-left: 18px;

  &__active {
    display: none;
    max-width: 21px;
    margin-right: 17px;
    margin-left: 18px;
  }
}
.link {
  color: var(--8-gray);
  font-weight: 700;
  font-size: 18px;
  &:hover {
    color: var(--brand-color);
    .menu__function__icon {
      display: none;
      &__active {
        display: initial;
      }
    }
  }
  &:active {
    color: var(--brand-color);
    font-weight: 700;
    font-size: 18px;
    .menu__function__icon {
      display: none;
      &__active {
        display: initial;
      }
    }
  }
}

.nav-tweet-modal{
  position: relative;
  left:calc(178px + 24px);
  top:74px;
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
    z-index:2;
  }
}
</style>