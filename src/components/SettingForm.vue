<template>
     <form class="form d-flex flex-column align-items-center" autocomplete="off" v-on:submit.prevent="handleForm">
      <div class="form__control d-flex flex-column">
        <label for="account" class="form__label ">帳號</label>
        <input id="account" name="account" type="text" class="form__input " placeholder="請輸入帳號" autocomplete="account"
          required autofocus v-model="UserData.account"  />
      </div>
      <div class="form__control  d-flex flex-column">
        <label for="name" class="form__label ">名稱</label>
        <input id="name" name="name" type="text" class="form__input " placeholder="請輸入使用者名稱"
          autocomplete="name" required  v-model="UserData.name" />
      </div>
      <div class="form__control  d-flex flex-column">
        <label for="email" class="form__label ">Email</label>
        <input id="email" name="email" type="text" class="form__input " placeholder="請輸入Eamil"
          autocomplete="email" required  v-model="UserData.Email"/>
      </div>

      <div class="form__control  d-flex flex-column">
        <label for="password" class="form__label ">密碼</label>
        <input id="password" name="password" type="password" class="form__input " placeholder="請設定密碼"
          autocomplete="new-password" required v-model="UserData.password"/>
      </div>

      <div class="form__control  d-flex flex-column">
        <label for="password-check" class="form__label ">密碼確認</label>
        <input id="password-check" name="checkPassword" type="password" class="form__input " placeholder="請再次輸入密碼"
          autocomplete="new-password" required  v-model="UserData.checkPassword"/>
      </div>
    </form>

</template>

<script>
export default {
    props:{
         //預設值，如果沒有傳資料進來，就帶入預設值
        initialUserSetting:{
            type:Object,
            default:()=>({
                id:'',
                account:'',
                name:'',
                Email:'',
                password:'',
                checkPassword:''
                
            })
        }
    },
    data () {
        return {
            UserData:{...this.initialUserSetting}
        }
    },
    handleForm (event) {
        console.log('btn')
         const form = event.target
         const formData = new FormData(form)
         //將表單資料傳到父層 ，由父層傳到API
         this.$emit('after-submit',formData)
         
        }
    //目前Form元件中沒有button 可以執行submit動作(button在父層)，再想想看
}
</script>



<style lang="scss" scoped>     
   
    .form {  
        margin: 24px 23px 0 23px; 
      
     &__control {
       width: 100%;
       border-bottom: 2px solid var(--formline-gray);
       border-radius: 2px;
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
    </style>