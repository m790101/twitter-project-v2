<template>
  <div class="container py-5 px-5 d-flex flex-column justify-content-center align-items-center" >
    <div class="title d-flex flex-column align-items-center mb-6">
      <img class="title__image mb-6" src="./../image/logo.png" alt="logo" />
      <h3 class="title__word mb-3 font-weight-normal">登入Alphitter</h3>
    </div>

    <form class="form w-100  d-flex flex-column align-items-center" v-on:submit.prevent="handleSubmit">
      
      <div class="form__control w-50 d-flex flex-column mb-8  px-2 py-1 ">
        <label for="account" class="form__label fs-14 ">帳號</label>
        <input id="account" name="account" type="" class="form__input fs-16" placeholder="請輸入帳號" autocomplete="username"
          required autofocus v-model="text" />
      </div>

      <div class="form__control w-50 d-flex flex-column mb-8  px-2 py-1">
        <label for="password" class="form__label fs-14 ">密碼</label>
        <input id="password" name="password" type="password" class="form__input fs-16" placeholder="請輸入密碼"
          autocomplete="current-password" required v-model="password" />
      </div>
    </form>

    <button class="btn w-50 py-2 fz-20 mt-2" type="submit" v-bind:disabled="isProcessing">
      登入
    </button>

    <div class=" footer mt-6 w-50 d-flex  justify-content-end">
      <a href="#" class="footer__connect fs-16 ">
        <span >註冊 </span>
      </a>
      <span class="fs-14 mx-3">•</span>
      <a href="#" class="footer__connect fs-16 ">
        <span>後台登入</span>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title {
  &__image {
    width: 50px;
    height: 50px;
  }

  &__word {
    line-height: 26px;
  }
}

.form {

  &__control {
   
    border-bottom: 1px solid var(--formline-gray);
    background-color: var(--formbg-gray);
  }

  &__label {
    color: var(--7-gray);
    line-height: 22px;
  }

  &__input {
    border: 0px;
    color: var(--5-gray);
    background-color: var(--formbg-gray);
    line-height: 16px;
  }

  &__input[placeholder] {
    color: var(--8-gray);
  }
}
.btn{ 
  background: var(--brand-color);
  color:var(--white);
  border-radius: 50px;
  text-align: center; 

}

.footer{
 
  &__connect {
    color:var(--primary-color); 
    line-height: 14px;
    border-bottom: 1px solid var(--primary-color);

  }
  &__connect:hover {
    color:var(--brand-color);
    border-bottom: 1px solid var(--brand-color);
  }
}
</style>
