<template>
 <main class="container">
    <div class="title d-flex flex-column align-items-center mb-6">
      <img class="title__image " src="./../image/logo.png" alt="logo" />
      <h3 class="title__word  ">建立你的帳號</h3>
    </div>
    
   <SettingForm ></SettingForm>
    
   <div class="footer d-flex flex-column align-items-center" >
   <button class="footer__btn btn-main btn-main:hover btn-main:active" type="submit" >
      註冊
    </button>

    <router-link to="login" class="footer__cancel ">
     <span>取消 </span>
    </router-link>
 </div>
 </main>
        
    
</template>

<script>
 import SettingForm from './../components/SettingForm.vue'

export default {
    components:{
        SettingForm  
},
methods:{
 
}
    
}
</script>

<style lang="scss" scoped>  
.container{
    width: (356px+70px);
   
}
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
.footer{
  &__btn {
  width: 356px; 
  text-align: center;
  margin-top: 8px;
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  padding: 8px 158px;

}
&__cancel{
    margin-top: 22px;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    color: var(--primary-color);       
    border-bottom: 1px solid var(--primary-color);
&:hover {
    color: var(--brand-color);
    border-bottom: 1px solid var(--brand-color);
  }
}
}

</style>