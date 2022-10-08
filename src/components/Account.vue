<template>
  <div class="tweet-card">
    <div class="tweet-card__panel d-flex">
      <img
        src="./../assets/icon/user-none.png"
        alt=""
        class="tweet-card__panel__avatar"
      />
      <div class="tweet-card__panel__content">
        <div
          class="
            tweet-card__panel__content__title
            d-flex d-flex
            align-items-center
            justify-content-between
          "
        >
          <p class="fw-bold">Apple</p>
          <div class="">
            <button class="btn-main btn-following" v-if="isfollowing">正在跟隨</button>
            <button class="btn-white btn-follow" v-else>追隨</button>
          </div>
        </div>
        <div class="tweet-card__panel__content__text ">
          <p>
            Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
            cillum dolor. Voluptate exercitation incididunt aliquip deserunt
            reprehenderit elit laborum.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
.tweet-card {
  width: 639px;
  &__panel {
    padding: 16px 0 17px 24px;
    border-bottom: 1px solid #e6ecf0;
    &__avatar {
      width: 50px;
      height: 50px;
    }
    &__content {
      margin-left: 8px;
      padding-right:30px;
      &__text{
          margin-top:8px;
      }
    }
  }
}

.btn-following{
    width:96px;
}
.btn-follow{
    width:64px;
}
</style>

<script>
export default {
    data(){
        return {
            isfollowing:false
        }
    }
}
</script>


