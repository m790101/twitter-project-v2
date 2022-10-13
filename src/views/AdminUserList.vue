<template>
  <main class="container d-flex">
    <div class="container__left">
      <AdminNavbar />
    </div>
    <div class="container__right">
      <h4 class="title">使用者列表</h4>
      <div class="row pb-3 pr-4">
        <Spinner
         v-if="isProcessing"
         />
        <AdminUserCard
          v-bind:user="userItem"
          v-for="userItem in users"
          :key="userItem.id"
          v-else
        />
      </div>
    </div>
  </main>
</template>

<script>
import AdminNavbar from "./../components/AdminNavbar.vue";
import AdminUserCard from "./../components/AdminUserCard.vue";
import adminAPI from "./../apis/admin";
import Spinner from "./../components/Spinner.vue";

export default {
  data() {
    return {
      users: [],
      isProcessing: false,
    };
  },
  components: {
    AdminNavbar,
    AdminUserCard,
    Spinner,
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        this.isProcessing = true;
        const { data } = await adminAPI.admin.getUsers();
        console.log(data);
        this.users = data;
        this.users = this.users.map((user) => {
          if (!user.backgroundImage) {
            return {
              ...user,
              backgroundImage:
                user.backgroundImage || "https://i.imgur.com/PvPmJH3.png",
            };
          }
          return user;
        });
        this.isProcessing = false;
      } catch (error) {
        this.isProcessing = false;
        console.log("error", error);
      }
    },
  },
};
</script>


<style lang="scss" scoped>
.container__right {
  border: 1px solid #e6ecf0;
  max-width: 1067px;
  flex: 1;
  height: 100vh;
  overflow: scroll;
}

.title {
  padding: 24px 0 24px 24px;
  font-weight: 700;
  border-bottom: 1px solid #e6ecf0;
}
</style>