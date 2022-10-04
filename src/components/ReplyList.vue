<template>
  <div class="tweet-card">
    <div class="tweet-card__panel d-flex">
        <img
          src="./../assets/icon/user-none.png"
          alt=""
          class="tweet-card__panel__avatar"
        />
      <div class="tweet-card__panel__content">
        <div class="tweet-card__panel__content__title d-flex  d-flex align-items-center">
          <p class="fw-bold fs-16">Apple</p>
          <p class="ms-1 fs-14 tweet-card__panel__content__title__id">@apple．<span>time</span></p>
        </div>
        <div class="tweet-card__panel__content__text ">
            <p class="fs-14 mb-2 tweet-card__panel__content__text__reply">回覆 <span class="tweet-card__panel__content__text__reply-to">@apple</span></p>
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
.tweet-card{
  width:600px;
  height:121px;
  font-size:15px;
  margin-top:10px;
}

.tweet-card__panel__content__text{
  &__reply{
    color: var(--secondary-color);
  }
  &__reply-to{
    color: var(--brand-color);
    }
}

.tweet-card__panel {
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
</style>