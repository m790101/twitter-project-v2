<template>
  <div class="modal">
    <form class="modal-content" @submit.stop.prevent="handleSubmit">
      <div class="d-flex align-items-center justify-content-between mb-1">
        <div class="d-flex align-items-center ms-3 gap-5">
          <img
            src="./../assets/icon/close-orange.png"
            alt=""
            class="close"
            @click="closeModal"
          />
          <h5 class="fw-bold modal-header__title">編輯個人資料</h5>
        </div>
        <button
          type="submit"
          class="btn-main modal-header__save"
          style="width: 64px"
          :disabled="isProcessing"
        >
          儲存
        </button>
      </div>

      <div class="modal-body">
        <!--background-pic-->
        <div class="modal-body__background-image" :style="{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${user.backgroundImage})`}">
          <div class="d-flex modal-body__background-image__icon-section gap-5">
            <input type="file" id="background-image" class="d-none" name="backgroundImage"
            @change="handleBackgroundChange"
            />
            <label for="background-image">
              <img
                src="./../assets/icon/camera.png"
                alt=""
                class="
                  modal-body__background-image__icon-section__icon
                  cursor-pointer
                "
              />
            </label>
            <img
              src="./../assets/icon/close-white.png"
              alt=""
              class="modal-body__background-image__icon-section__icon ms-5"
            />
          </div>
          <div class="modal-body__background-image__avatar" :style="{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${user.image}')`}">
            <input
              type="file"
              id="avatar"
              class="d-none"
              accept="image/*"
              name="image"
              @change="handleFileChange"
            />
            <label for="avatar">
              <img
                src="./../assets/icon/camera.png"
                alt=""
                class="
                  modal-body__background-image__avatar__icon
                  cursor-pointer
                "
              />
            </label>
          </div>
        </div>

        <div class="modal-body__form px-3">
          <div class="form-label-group">
            <label for="name" class="font-14 modal-body__form__name"
              >名稱</label
            >
            <input
              id="name"
              name="name"
              type="type"
              class="fs-16"
              autocomplete="current-password"
              required
              v-model="user.name"
            />
          </div>
          <div
            class="d-flex modal-body__form__letter-num mb-2"
            :class="{ active: user.name.length > 10 }"
          >
            <div class="error-handler" v-if="user.name.length > 50">
              字數超出上限
            </div>
            <p>{{ nameLength }}/50</p>
          </div>
          <div class="form-label-group__text">
            <label for="introduction" class="modal-body__form__introduction"
              >自我介紹</label
            >
            <textarea
              name="introduction"
              id="introduction"
              cols="70"
              rows="2"
              class="modal-body__text__text-area ms-2 fs-16"
              v-model="user.introduction"
            >
            </textarea>
          </div>
          <div
            class="modal-body__form__letter-num mb-2 d-flex"
            :class="{ active: user.name.length > 10 }"
          >
            <div class="error-handler" v-if="user.name.length > 160">
              字數超出上限
            </div>
            <p class="modal-body__form__letter-num mb-3">
              {{ introLength }}/160
            </p>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>


<style lang="scss" scoped>
.modal {
  position: absolute;
  width: 634px;
  height: 610px;
  top: 56px;
  padding-top: 8px;
  background-color: white;
  border-radius: 14px;
  z-index: 99;
}

.close {
  width: 15px;
  height: 15px;
  cursor: pointer;
}
.modal-header__title {
  margin-left: 36.5px;
}
.modal-header__save {
  margin-right: 16px;
  margin-bottom: 8px;
}

.modal-body {
  padding: 0;
  &__background-image {
    margin-bottom: 80px;
    position: relative;
    height: 200px;
    background: linear-gradient(
        0deg,
        rgba(23, 23, 37, 0.5),
        rgba(23, 23, 37, 0.5)
      );
    background-size: cover;
    background-position: center;
    &__avatar {
      position: absolute;
      z-index: 1;
      left: 16px;
      bottom: 0;
      transform: translate(0, 50%);
      width: 140px;
      height: 140px;
      background: linear-gradient(
        0deg,
        rgba(23, 23, 37, 0.5),
        rgba(23, 23, 37, 0.5));
        border-radius: 50%;
        background-repeat: no-repeat;
        background-size: cover;
      border: 4px solid white;
      &__icon {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 20px;
        height: 20px;
      }
    }
    &__icon-section {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      &__icon {
        width: 20px;
      }
    }
  }
}

//form

.form-label-group {
  position: relative;
  height: 54px;
  background-color: #f5f8fa;
  border: 0;
  border-radius: 2px;
  border-bottom: 2px solid #657786;
  & label {
    position: absolute;
    top: 5px;
    padding-left: 11px;
    z-index: 1;
  }
  & input {
    -webkit-appearance: none;
    position: absolute;
    bottom: 0;
    padding-left: 11px;
    background-color: #f5f8fa;
    border: 0;
    font-size: 1rem;
    padding-bottom: 5px;
  }
}

.form-label-group__text {
  height: 147px;
  position: relative;
  background-color: #f5f8fa;
  border: 0;
  border-radius: 2px;
  border-bottom: 2px solid #657786;
  & label {
    position: absolute;
    top: 5px;
    padding-left: 11px;
    z-index: 1;
  }
  & textarea {
    top: calc(5px + 1.5rem);
    position: absolute;
    outline: none;
    border: 0;
    font-size: 16px;
    background-color: #f5f8fa;
  }
}
.modal-body__form {
  &__introduction {
    color: var(--7-gray);
    font-size: 14px;
  }
  &__name {
    color: var(--7-gray);
    font-size: 14px;
  }
  &__letter-num {
    justify-content: end;
    font-size: 12px;
    &.active {
      justify-content: space-between;
    }
  }
}

.error-handler {
  font-size: 12px;
  color: var(--error-color);
}
</style>

<script>
import userApi from "./../apis/user";
import { Toast } from "./../utils/helpers";


export default {
  props: {
    initialUser: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      user: this.initialUser,
      backgroundImageCache:this.initialUser.backgroundImage,
      imageCache:this.initialUser.image,
      isProcessing:false
    };
  },
  methods: {
    closeModal() {
      this.$emit("closeUserEditModal");
    },
    async handleSubmit(e) {
      try {
        this.isProcessing = true
        const file = e.target;
        const formData = new FormData(file);
        const { data } = await userApi.putUser(formData, { id: this.user.id });
        console.log(data);
        this.$emit("closeUserEditModal");
        this.$emit('afterHandleSubmit',{
            image:this.imageCache,
            backgroundImage:this.backgroundImageCache
        })
        this.isProcessing = false
      } catch (error) {
        this.isProcessing = false
        Toast.fire({
          icon: "warning",
          title: "無法讀取使用者",
        });
      }
    },
    handleFileChange(e) {
      const files = e.target.files;
      if (files.length === 0) {
        // 使用者沒有選擇上傳的檔案
        this.user.image = "";
      } else {
        // 否則產生預覽圖
        const imageURL = window.URL.createObjectURL(files[0]);
        this.user.image = imageURL;
        this.imageCache = imageURL
      }
    },
    handleBackgroundChange(e){
      const files = e.target.files;
      if (files.length === 0) {
        // 使用者沒有選擇上傳的檔案
        this.user.backgroundImage = "";
      } else {
        // 否則產生預覽圖
        const imageURL = window.URL.createObjectURL(files[0]);
        this.user.backgroundImage = imageURL;
        this.backgroundImageCache = imageURL
      }
    }
  },
  computed: {

    nameLength() {
      return this.user.name.length;
    },
    introLength() {
      return this.user.introduction.length;
    },

  },
};
</script>