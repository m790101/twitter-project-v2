<template>
  <main class="container d-flex">
    
    <div class="container__left ">
      <Navbar />
    </div>
    <div class="container__right  d-flex">
      <div class="section">
        <h4 class="title">帳號設定</h4>
        <SettingForm :initialUserSetting="userData" @afterSubmit="handleafterSubmit"></SettingForm>
        <div class="d-flex justify-content-end">
          <button
            class="btn btn-main btn-main:hover btn-main:active"
            type="submit"
          >
            儲存
          </button>
        </div>
      
    </div>
</div>
  </main>
</template>

<script>
import SettingForm from "./../components/SettingForm.vue";
import Navbar from "./../components/Navbar.vue";


const dummyData = {
  userData: {
    id: 1,
    account: 'aaa',
    name: 'aa',
    Email:'aa@gmail.com',
    password: "123456",
    checkPassword: "123456",
  },
};

export default {
  components: {
    Navbar,
    SettingForm,
  },
  data () {
    return {
        userData:{...dummyData.userData}
    }
  },
  methods: {
    handleafterSubmit (playLoad) {
        console.log(playLoad)
    }
  },
};
</script>

<style lang="scss" scoped>
.section {
  width: 639px;
  position: relative;
  border: 1px solid #e6ecf0;
  margin-left: 24px;
}

.title {
  padding: 24px 0 24px 24px;
  font-weight: 700;
  border-bottom: 1px solid #e6ecf0;
}

.btn {  
  margin:8px 23px 25px 0px;
  padding: 8px 24px;
}


</style>
