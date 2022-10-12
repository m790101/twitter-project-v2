<template>
  <div class="container d-flex flex-column justify-content-center align-items-center">
    <div class="title d-flex flex-column align-items-center ">
      <img class="title__image" src="./../assets/logo.png" alt="logo" />
      <h3 class="title__word">登入Alphitter</h3>
    </div>

    <form class="form d-flex flex-column align-items-center" autocomplete="off">
      <div class="form-control d-flex flex-column">
        <label for="account" class="form-label">帳號</label>
        <input id="account" name="account" type="text" class="form-input" placeholder="請輸入帳號" autocomplete="username"
          required autofocus v-model="account" />
      </div>

      <div class="form-control d-flex flex-column">
        <label for="password" class="form-label">密碼</label>
        <input id="password" name="password" type="password" class="form-input" placeholder="請輸入密碼"
          autocomplete="current-password" required v-model="password" />
      </div>
    </form>

    <button class="btn btn-main btn-main:hover btn-main:active" type="submit" v-on:click.prevent="handleSubmit"
      :disabled="isProcessing">
      登入
    </button>

    <div class="footer d-flex justify-content-end">
      <router-link to="/signup" class="footer__connect">
        <span>註冊 </span>
      </router-link>
      <span class="footer__dot">•</span>
      <router-link to="/admin/login" class="footer__connect">
        <span>後台登入</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import authorizationAPI from "./../apis/authorization";
import { Toast } from "./../utils/helpers";

export default {
  data() {
    return {
      account: "",
      password: "",
      isProcessing: false, //是否正在運作
    };
  },
  methods: {
    async handleSubmit(e) {
      try{
      console.log('1')
      if (!this.account || !this.password) {
        Toast.fire({
          icon: "warning",
          title: "請填入帳號和密碼",
        });
        return;
      }
      console.log('2')
      this.isProcessing = true
      console.log('3')
      const response = await authorizationAPI.signIn({
          account: this.account,
          password: this.password,
        })  
        console.log('4') 
         const { data } = response;          
         console.log('response:',response.statusText)       
         console.log('dataStatus:',data.status) 
         
          if (data.status === "error") {         
            console.log('5') 
            throw new Error(data.statusText);            
          }else {   
            console.log('6')        
            localStorage.setItem("token", data.data.token);
            this.$store.commit('setCurrentUser',data.data.user)
            this.$router.push("/main")
          }        
        
      } catch(error) {
        console.log('er')
        
          this.account = "";
          this.password = "";
          Toast.fire({
            icon: "warning",
            title: "請確認您輸入正確的帳號密碼",
          });
          
          this.isProcessing = false     
          console.log('error2:',error)    
          console.log("error Message2:",error.message);
        };
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  margin-top: 64px;
  margin-bottom: 8px;
 

  &__image {
    width: 50px;
    height: 50px;
    margin-bottom: 24px;
  }

  &__word {
    line-height: 26px;
    font-weight: 700;
  }
}

.form {
  width: 356px;
}

.btn {
  text-align: center;
  margin-top: 40px;
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

  &__dot {
    margin: 0px 12px;
  }
}
</style>
