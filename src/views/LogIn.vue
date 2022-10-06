<template>
  <div class="container d-flex flex-column justify-content-center align-items-center">
    <div class="title d-flex flex-column align-items-center mb-6">
      <img class="title__image " src="./../image/logo.png" alt="logo" />
      <h3 class="title__word  ">登入Alphitter</h3>
    </div>

    <form class="form d-flex flex-column align-items-center" autocomplete="off" v-on:submit.prevent="handleSubmit" >
      <div class="form__control d-flex flex-column">
        <label for="account" class="form__label ">帳號</label>
        <input id="account" name="account" type="text" class="form__input " placeholder="請輸入帳號" autocomplete="username"
          required autofocus v-model="account" />
      </div>

      <div class="form__control  d-flex flex-column">
        <label for="password" class="form__label ">密碼</label>
        <input id="password" name="password" type="password" class="form__input " placeholder="請輸入密碼"
          autocomplete="current-password" required v-model="password" />
      </div>
    </form>

    <button class="btn btn-main btn-main:hover btn-main:active" type="submit" >
      登入
    </button>

    <div class="footer  d-flex justify-content-end">
      <router-link to="/signup" class="footer__connect ">
        <span>註冊 </span>
      </router-link>
      <span class="footer__dot">•</span>
      <a href="#" class="footer__connect ">
        <span>後台登入</span>
      </a>
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {
      account: "",
      password: "",
      
    };
  },
  methods:{
    handleSubmit (){
      //等待API -->要記得做提示文字toast
    }
  }

}
</script>


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
   background-color: var(--formbg-gray);   

   //更改input自動填入時的背景色
   &:-webkit-autofill {
     -webkit-box-shadow: 0 0 0px 1000px var(--formbg-gray) inset;
   }
  //預設文字樣式
  &::placeholder{
    color: var(--5-gray);
    line-height: 26px;
    font-size: 16px; 
  }

  //輸入文字樣式
  &[placeholder] {
   color: var(--8-gray);      
   line-height: 26px;
   font-size: 16px;    
 }

 }

}

.btn {
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
&:hover {
    color: var(--brand-color);
    border-bottom: 1px solid var(--brand-color);
  }

  }

  
  &__dot{
    margin:0px 12px
  }
}
</style>
