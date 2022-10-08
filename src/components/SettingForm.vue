<template>
  <form
    class="form d-flex flex-column align-items-center"
    autocomplete="off"
    v-on:submit.prevent="handleForm"
  >
    <div class="form-control d-flex flex-column">
      <label for="account" class="form-label">帳號</label>
      <input
        id="account"
        name="account"
        type="text"
        class="form-input"
        placeholder="請輸入帳號"
        autocomplete="account"
        required
        autofocus
        v-model="UserData.account"
      />
    </div>    
    <p class="error-handler" v-if="countName>50">字數不能超過50個字</p>
    <div class="form-control d-flex flex-column">
      <label for="name" class="form-label">名稱</label>
      <input
        id="name"
        name="name"
        type="text"
        class="form-input"
        placeholder="請輸入使用者名稱"
        autocomplete="name"
        maxlength=10
        required
        v-model="UserData.name"
      />     
    </div>
    
    <div class="form-control d-flex flex-column">
      <label for="email" class="form-label">Email</label>
      <input
        id="email"
        name="email"
        type="text"
        class="form-input"
        placeholder="請輸入Eamil"
        autocomplete="email"
        required
        v-model="UserData.email"
      />
    </div>

    <div class="form-control d-flex flex-column">
      <label for="password" class="form-label">密碼</label>
      <input
        id="password"
        name="password"
        type="password"
        class="form-input"
        placeholder="請設定密碼"
        autocomplete="new-password"
        required
        v-model="UserData.password"
      />
    </div>

    <div class="form-control d-flex flex-column">
      <label for="password-check" class="form-label">密碼確認</label>
      <input
        id="password-check"
        name="checkPassword"
        type="password"
        class="form-input"
        placeholder="請再次輸入密碼"
        autocomplete="new-password"
        required
        v-model="UserData.checkPassword"
      />
    </div>
  </form>
</template>

<script>
import { Toast } from "./../utils/helpers";

export default {
  props: {
    //預設值，如果沒有傳資料進來，就帶入預設值
    initialUserSetting: {
      type: Object,
      default: () => ({
        id: "",
        account: "",
        name: "",
        email: "",
        password: "",
        checkPassword: "",
      }),
    },
  },
  data() {
    return {
      UserData: { ...this.initialUserSetting },
    };
  },
  methods: {
    handleForm() {
      if (!this.UserData.account) {
        Toast.fire({
          icon: "warning",
          title: "請填入帳號",
        });
        return;
      } else if (!this.UserData.name) {
        Toast.fire({
          icon: "warning",
          title: "請填入名稱",
        });
        return;
      } else if (!this.UserData.email) {
        Toast.fire({
          icon: "warning",
          title: "請填入Email",
        });
        return;
      } else if (!this.UserData.password) {
        Toast.fire({
          icon: "warning",
          title: "請填入密碼",
        });
        return;
      } else if (!this.UserData.checkPassword) {
        Toast.fire({
          icon: "warning",
          title: "請填入確認密碼",
        });
        return;
      }else if (this.UserData.checkPassword!==this.UserData.password) {
        this.UserData.checkPassword=''
        this.UserData.password=''
        Toast.fire({
          icon: "warning",
          title: "請再次確認密碼",
        });
       
        return;
      }
      const formData = this.UserData;
      //將表單資料傳到父層 ，由父層傳到API
      this.$emit("afterSubmit", formData);
    },
  },
  computed:{
    countName (){
      return this.UserData.name.length
    }
  }
};
</script>

<style lang="scss" scoped>
.form {
  margin: 24px 23px 0 23px;
}
.error-handler{
  color: var(--error-color);  
  width:100%;
}
</style>
