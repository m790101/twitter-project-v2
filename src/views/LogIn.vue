<template>
  <div class="container d-flex flex-column justify-content-center align-items-center">
    <div class="title d-flex flex-column align-items-center mb-6">
      <img class="title__image " src="./../image/logo.png" alt="logo" />
      <h3 class="title__word  ">登入Alphitter</h3>
    </div>

    <form class="form d-flex flex-column align-items-center" autocomplete="off" >
      <div class="form__control d-flex flex-column">
        <label for="account" class="form__label ">帳號</label>
        <input id="account" name="account" type="text" class="form__input " placeholder="請輸入帳號" autocomplete="username"
          required autofocus v-model="text" />
      </div>

      <div class="form__control  d-flex flex-column">
        <label for="password" class="form__label ">密碼</label>
        <input id="password" name="password" type="password" class="form__input " placeholder="請輸入密碼"
          autocomplete="current-password" required  />
      </div>
    </form>

    <button class="btn  " type="submit" >
      登入
    </button>

    <div class="footer  d-flex justify-content-end">
      <a href="#" class="footer__connect ">
        <span>註冊 </span>
      </a>
      <span class="footer__dot">•</span>
      <a href="#" class="footer__connect ">
        <span>後台登入</span>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  
.title {
  margin-top: 64px;
  margin-bottom: 40px;
  &__image {
    width: 50px;
    height: 50px;
    margin-bottom: 24px;
  }

  &__word {
    line-height: 26px;
    font-weight:700 ;
    
  }
}

.form {
 
  
  &__control {
    width: 356px;
    border-bottom: 2px solid var(--formline-gray);
    background-color: var(--formbg-gray);
    padding: 2px 10.55px;
    margin-bottom: 32px;
  }

  &__label {
    color: var(--7-gray);
    line-height: 22px;   
    font-size: 14px;
  }

  &__input {
    border: 0px;
    color: var(--5-gray);       
    background-color: var(--formbg-gray);
    line-height: 26px;
    font-size: 16px;    

    //更改input自動填入時的背景色
    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0px 1000px var(--formbg-gray) inset;
    }
  }

  &__input[placeholder] {
    color: var(--8-gray);    
    font-size: 16px;    
  }

}

.btn {
  background: var(--brand-color);
  color: var(--white);
  border-radius: 50px;
  text-align: center;
  margin-top: 8px;
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  padding: 8px 158px;
}

.footer { 
  width: 356px;
  margin-top: 22px;
  &__connect {
    font-size: 16px;
    line-height: 18px;
    color: var(--primary-color);       
    border-bottom: 1px solid var(--primary-color);
  }

  &__connect:hover {
    color: var(--brand-color);
    border-bottom: 1px solid var(--brand-color);
  }
  &__dot{
    margin:0px 12px
  }
}
</style>
