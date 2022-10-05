<template>
        <section >
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
        </section>
</template>


<style lang="scss" scoped>

   .modal-content {
       position: absolute;
    border-radius: 14px;
    width: 634px;
    height: 300px;
    background-color: var(--white);
    z-index:999;
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
</style>


<script>
export default {
    methods:{
        closeModal(){
            this.$emit('afterCloseModal')
        }
    }
}
</script>