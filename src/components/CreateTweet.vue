<template>
  <section>
    <div class="create-tweet">
      <div class="create-tweet__body">
        <div class="d-flex align-items-center">
          <img
            :src="currentUser.image | emptyImage"
            alt=""
            class="create-tweet__body__avater"
          />
          <h5 class="card-title">有什麼新鮮事?</h5>
        </div>
        <div class="d-flex flex-row-reverse">
          <button
            class="btn-main create-tweet__body__btn-tweet"
            @click="callModal"
          >
            推文
          </button>
        </div>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>
.create-tweet {
  position: relative;
  width: 634px;
  & &__body {
    border: 0;
    padding: 16px 25px 16px 24px;
    border-top: 1px solid #e6ecf0;
    border-bottom: 10px solid #e6ecf0;
    &__avater {
      width: 50px;
      height: 50px;
    }
  }
}
.create-tweet__body__btn-tweet {
  width: 64px;
}

.card-title {
  margin-left: 8px;
  color: #6c757d;
  font-weight: 400;
}

.title {
  padding: 24px 0 24px 24px;
}

.tweet-card__panel {
  padding: 16px 0 17px 24px;
  border-bottom: 1px solid #e6ecf0;
  & &__content {
    margin-left: 8px;
  }
}

.modal-bg {
  position: fixed;
  z-index:1;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: none;
  &.active {
    display: initial;
  }
}
</style>

<script>
import {emptyImageFilter} from './../utils/mixins'
import {mapState} from 'vuex'
export default {
  props: {
    navIsEditing: {
      type: Boolean,
      require: true,
    },
  },
  data() {
    return {
      isEditing: this.navIsEditing,
    };
  },
  methods: {
    callModal() {
      this.$emit('afterCallModal');
    },
    handleAfterCloseModal() {
      this.isEditing = false;
    },
  },
  components: {
  },
  watch: {
    navIsEditing(newValue) {
      this.isEditing = newValue;
    },
  },
  mixins:[emptyImageFilter],
  computed:{
    ...mapState(['currentUser','isAuthenticated'])
  }
};
</script>