<template>
  <main class="container" v-show="!isLoading">
    <div class="title d-flex flex-column align-items-center mb-6">
      <img class="title__image" src="./../assets/logo.png" alt="logo" />
      <h3 class="title__word">建立你的帳號</h3>
    </div>

    <SettingForm ref="formRef" @afterSubmit="handleAfterSubmit"></SettingForm>

    <div class="footer d-flex flex-column align-items-center">
      <button
        class="footer__btn btn-main btn-main:hover btn-main:active"
        type="submit"
        v-on:click="getData"
        :disabled="isProcessing"
      >
        註冊
      </button>

      <router-link to="login" class="footer__cancel">
        <span>取消 </span>
      </router-link>
    </div>
  </main>
</template>

<script>
import SettingForm from "./../components/SettingForm.vue";
import signUpAPI from "./../apis/signUp";


export default {
  components: {
    SettingForm,
  },
  data() {
    return {
      isLoading: false,
      isProcessing:false,
      userData: {
        id: -1,
        account: "",
        name: "",
        email: "",
        password: "",
        checkPassword: "",
      },
    };
  },
  methods: {
    // 呼叫子元件的handleForm方法
    getData() {
      this.$refs.formRef.handleForm();      

    },
    //子元件傳入
    async handleAfterSubmit(formData) {
      this.userData = {...formData}
      console.log('this.uerData',this.userData)
      this.isProcessing = true
      try {        
        const response = await signUpAPI.create({
          account: this.userData.account,
          name: this.userData.name,
          email: this.userData.email,
          password: this.userData.password,
          checkPassword: this.userData.checkPassword,
        });       
        const { data } = response;
        console.log(data.status);

        if (data.status !== "success") {
          throw new Error(data.message);
        } else {
          console.log(response);
          // 成功的話則轉址到 登入頁面
          this.$router.push({ name: "logIn" });
        }
      } catch (error) {
        this.isProcessing = false
        console.log("error", error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
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
    font-weight: 700;
  }
}
.footer {
  &__btn {
    width: 356px;
    text-align: center;
    margin-top: 8px;
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
    padding: 8px 158px;
  }
  &__cancel {
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
