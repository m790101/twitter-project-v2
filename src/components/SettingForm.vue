<template>
     <form class="form d-flex flex-column align-items-center" autocomplete="off" v-on:submit.prevent="handleForm">
      <div class="form-control d-flex flex-column">
        <label for="account" class="form-label ">帳號</label>
        <input id="account" name="account" type="text" class="form-input " placeholder="請輸入帳號" autocomplete="account"
          required autofocus v-model="UserData.account"  />
      </div>
      <div class="form-control  d-flex flex-column">
        <label for="name" class="form-label ">名稱</label>
        <input id="name" name="name" type="text" class="form-input " placeholder="請輸入使用者名稱"
          autocomplete="name" required  v-model="UserData.name" />
      </div>
      <div class="form-control  d-flex flex-column">
        <label for="email" class="form-label ">Email</label>
        <input id="email" name="email" type="text" class="form-input " placeholder="請輸入Eamil"
          autocomplete="email" required  v-model="UserData.Email"/>
      </div>

      <div class="form-control  d-flex flex-column">
        <label for="password" class="form-label ">密碼</label>
        <input id="password" name="password" type="password" class="form-input " placeholder="請設定密碼"
          autocomplete="new-password" required v-model="UserData.password"/>
      </div>

      <div class="form-control  d-flex flex-column">
        <label for="password-check" class="form-label ">密碼確認</label>
        <input id="password-check" name="checkPassword" type="password" class="form-input " placeholder="請再次輸入密碼"
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
    methods:{
      handleForm () {       
        const formData = this.UserData      
        //將表單資料傳到父層 ，由父層傳到API
         this.$emit('afterSubmit',formData)         
        }
    }
    

    
}
</script>



<style lang="scss" scoped>     
   
.form {  
   margin: 24px 23px 0 23px;    
     }
</style>