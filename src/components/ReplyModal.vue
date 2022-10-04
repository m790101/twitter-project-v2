<template>
  <section class="reply-modal">
    <div class="modal">
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
          <div class="modal-body__panel d-flex">
              <div class="modal-body__panel__line"></div>
              <img
                src="./../assets/icon/user-none.png"
                alt=""
                class="modal-body__panel__avatar"
              />
            <div class="modal-body__panel__content ">
              <div
                class="modal-body__panel__content__title d-flex "
              >
                <p class="fw-bold modal-body__panel__content__title__name">Apple</p>
                <p class="fs-14 modal-body__panel__content__title__id">@apple．<span>3小時</span></p>
              </div>
              <div class="modal-body__panel__content__description">
                <p>
                  Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
                  ullamco cillum dolor. Voluptate exercitation incididunt
                  aliquip deserunt reprehenderit elit laborum.
                </p>
                <p class="fs-14 modal-body__panel__content__description__reply-to">
                  回覆給
                  <span class=" modal-body__panel__content__description__reply-to__id"
                    >@apple</span
                  >
                </p>
              </div>
            </div>
          </div>
          <div class="d-flex mt-5">
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
                placeholder="推你的回覆"
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
  </section>
</template>


<style lang="scss" scoped>
.modal {
  width: 100%;
  height: 100vh;
  position: absolute;
  left: 0;
  top: -146px;
  z-index: 999;
  &.active {
    display: initial;
  }

  & .modal-content {
    border-radius: 14px;
    width: 634px;
    height: 500px;
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
  &__panel {
      position: relative;
      &__line{
          position:absolute;
          top:calc(50px + 16px);
          left:25px;
          width:2px;
          height:86px;
          background-color:gray;
      }
    &__avatar {
      width: 50px;
      height: 50px;
    }
     &__content{
        margin-left:8px;
        &__title{
            &__name{
                color: var(--black-color);
            }
            &__id{
                margin-left:8px;
                 color: var(--secondary-color);
            }
        }
    &__description{
        margin-top:10px;
        color: var(--black-color);
        &__reply-to{
            margin-top:11px;
            color: var(--secondary-color);
            &__id{
                color: var(--brand-color);
            }
        }
    }
     }
  }
  &__avatar {
    width: 50px;
    height: 50px;
  }
  &__textarea {
    width: 100%;
    font-size: 16px;
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
  margin-right: 20px;
  font-size: 12px;
  color: var(--error-color);
}
</style>


<script>
export default {
  data() {
    return {};
  },
  methods: {
    callModal() {
      this.isEditing = true;
      console.log("hi");
    },
    closeModal() {
      this.$emit("closeReplyModal");
    },
  },
};
</script>