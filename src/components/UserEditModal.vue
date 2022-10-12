<template>
  <div class="modal">
      <form class="modal-content">
        <div class="d-flex align-items-center justify-content-between mb-1">
          <div class="d-flex align-items-center ms-3 gap-5">
            <img
            src="./../assets/icon/close-orange.png"
            alt=""
            class="close"
            @click="closeModal"
          />
            <h5 class="fw-bold  modal-header__title">編輯個人資料</h5>
          </div>
          <button type="button" class="btn-main modal-header__save" style="width: 64px">
            儲存
          </button>
        </div>
        
        <div class="modal-body">
          <!--background-pic-->
          <div class="modal-body__background-image">
            <div class="d-flex modal-body__background-image__icon-section gap-5">
              <input type="file" id="background-image" class="d-none">
              <label for="background-image">
              <img
                src="./../assets/icon/camera.png"
                alt=""
                class="modal-body__background-image__icon-section__icon cursor-pointer"
              />
              </label>
              <img
                src="./../assets/icon/close-white.png"
                alt=""
                class="modal-body__background-image__icon-section__icon ms-5"
              />
            </div>
            <div class="modal-body__background-image__avatar">
              <input type="file" id="avatar" class="d-none">
              <label for="avatar">
                <img
                src="./../assets/icon/camera.png"
                alt=""
                class="modal-body__background-image__avatar__icon cursor-pointer"
              />
              </label>
              
            </div>
          </div>

          <div class="modal-body__form px-3">
            <div class="form-label-group">
              <label for="name" class="font-14 modal-body__form__name">名稱</label>
              <input
                id="name"
                name="name"
                type="type"
                class="fs-16"
                autocomplete="current-password"
                required
                v-model="name"
              />
            </div>
            <p class="modal-body__form__letter-num mb-2">{{nameLength}}/50</p>
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
                v-model="introduction"
              >
              </textarea>
            </div>
            <p class="modal-body__form__letter-num mb-3 ">{{introLength}}/160</p>
          </div>
        </div>
      </form>
  </div>
</template>


<style lang="scss" scoped>
.modal {
  position: absolute;
  width:634px;
  height:610px;
  top:56px;
  padding-top:8px;
  background-color:white;
  border-radius: 14px;
  z-index:99;
}

.close {
  width: 15px;
  height: 15px;
  cursor: pointer;
}
.modal-header__title{
    margin-left:36.5px;
}
.modal-header__save{
    margin-right:16px;
    margin-bottom:8px;
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
        ),
       url("./../assets/profile-background.png");
    background-size: cover;
    background-position: center;
    &__avatar {
      position: absolute;
      left: 16px;
      bottom: 0;
      transform: translate(0, 50%);
      width: 140px;
      height: 140px;
      background: linear-gradient(
          0deg,
          rgba(23, 23, 37, 0.5),
          rgba(23, 23, 37, 0.5)
        ),
        url("./../assets/icon/user.png");
      background-size: cover;
      border-radius: 50%;
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
    font-size:16px;
    background-color: #f5f8fa;
  }
}
.modal-body__form {
    &__introduction{
        color:var(--7-gray);
        font-size: 14px;
    }
    &__name{
         color:var(--7-gray);
         font-size: 14px;
    }
  &__letter-num {
    text-align: end;
    font-size: 12px;
    
  }
}

</style>

<script>
export default {
    data(){
        return {
            name:'',
            introduction:''
        }
    },
    methods:{
        closeModal(){
            this.$emit("closeUserEditModal");
        }
    },
    computed:{
        nameLength(){
            return this.name.length
        },
        introLength(){
            return this.introduction.length
        }
    }
}
</script>