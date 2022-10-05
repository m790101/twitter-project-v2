<template>
<section>
  <div class="create-tweet">
    <div class="create-tweet__body">
      <div class="d-flex align-items-center">
        <img
          src="./../assets/icon/user.png"
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
    <!-- Modal -->
    <div class="modal" :class="{ active: isEditing }">
      <div class="modal-content d-flex flex-column">
        <div class="modal-header">
          <img
            src="./../assets/icon/close-orange.png"
            alt=""
            class="close"
            @click="closeModal"
          />
        </div>
        <div class="modal-body">
          <div class="d-flex">
            <img
              src="./../assets/icon/user.png"
              alt=""
              class="modal-body__avatar"
            />
            <div class="">
              <textarea
                name=""
                id=""
                cols="35"
                rows="5"
                placeholder="有什麼新鮮事"
                class="modal-body__textarea pt-2"
              >
              </textarea>
            </div>
          </div>
        </div>
        <div class="modal-footer d-flex justify-content-end align-items-center">
          <div class="error-handler">字數不可超過140字!</div>
          <button type="button" class="btn-main" style="width: 66px">
            推文
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="modal-bg" :class="{ active: isEditing }"></div>
</section>
</template>


<style lang="scss" scoped>
.create-tweet {
  position:relative;
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
.modal {
  width: 100%;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  display: none;
  z-index:999;
  &.active {
    display: initial;
  
  }

  & .modal-content {
    border-radius: 14px;
    width: 634px;
    height: 300px;
    background-color: var(--white);
    & .modal-header {
      padding: 20px;
      border-bottom: 1px solid var(--2-gray);
    }
    & .modal-footer {
      border-top: 0;
      padding-right: 16px;
      margin: 16px 0;
      background: white;
    }
  }
}

.modal-body {
  flex: 1;
  padding-top: 16px;
  padding-left: 24px;
  &__avatar {
    width: 50px;
    height: 50px;
  }
  &__textarea {
    width: 100%;
    font-size: 18px;
    font-weight:700;
    margin-left: 8px;
    border: 0;
    outline: none;
  }
}
.close {
  width: 15px;
  height: 15px;
  cursor: pointer;
}

.error-handler {
  margin-right:20px;
  font-size: 12px;
  color: var(--error-color);
}

.modal-bg{
  position: fixed;
  background-color:rgba(0,0,0,0.4);
  width:100vw;
  height:100vh;
  top:0;
  left:0;
  display:none;
  &.active {
    display: initial;
  
  }
}
</style>

<script>
export default {
  props:{
    navIsEditing:{
      type:Boolean,
      require:true
    }
  },
  data() {
    return {
      isEditing: this.navIsEditing,
    };
  },
  methods: {
    callModal() {
      this.isEditing = true;
    },
    closeModal() {
      this.isEditing = false;
      this.$emit('afterCloseModal')
    },
  },
  watch:{
      navIsEditing(newValue){
        this.isEditing = newValue
      }
  }
};
</script>