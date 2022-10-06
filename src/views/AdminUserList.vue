<template>
  <main class="container d-flex">
    <div class="container__left">
      <AdminNavbar />
    </div>
    <div class="container__right">
      <h4 class="title">首頁</h4>
      <AdminUserCard/>
    </div>
  </main>
</template>

<script>
import AdminNavbar from "./../components/AdminNavbar.vue";
import AdminUserCard from "./../components/AdminUserCard.vue";

export default {
  data() {
    return {
      isEditing: false,
    };
  },
  components: {
    AdminNavbar,
    AdminUserCard
  },
  methods: {},
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