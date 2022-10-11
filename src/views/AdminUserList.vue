<template>
  <main class="container d-flex">
    <div class="container__left">
      <AdminNavbar />
    </div>
    <div class="container__right">
      <h4 class="title">使用者列表</h4>
      <div class="row pb-3 pr-4">
        
      <AdminUserCard v-bind:user="userItem" v-for="userItem in users" :key="userItem.id"/>
    
    </div>
    </div>
  </main>
</template>

<script>
import AdminNavbar from "./../components/AdminNavbar.vue";
import AdminUserCard from "./../components/AdminUserCard.vue";
import adminAPI from "./../apis/admin";


export default {
  data() {
    return {
      isEditing: false,
      users:[]
    };
  },
  components: {
    AdminNavbar,
    AdminUserCard
  },
  created () {
    this.fetchUsers ()
  },
  methods: {
    async fetchUsers () {
   try {
    const {data} = await adminAPI.admin.getUsers( ) 
    console.log(data)   
    this.users = data

   } catch (error) {
      console.log('error',error)
   }
      
    },

  },
};
</script>


<style lang="scss" scoped>
.container__right {
  border: 1px solid #e6ecf0;
  max-width:1067px;
  flex: 1;
  
}

.title {
  padding: 24px 0 24px 24px;
  font-weight: 700;
  border-bottom: 1px solid #E6ECF0;
}
</style>