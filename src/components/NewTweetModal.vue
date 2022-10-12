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
                v-model="description"
              >
              </textarea>
            </div>
          </div>
        </div>
        <div class="modal-footer d-flex justify-content-end align-items-center">
          <div class="error-handler" v-if="description.length > 140">字數不可超過140字!</div>
          <button type="button" class="btn-main" style="width: 66px" :disabled="description.length > 140 || isProcessing" @click="createdTweet" >
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
import tweetApi from "./../apis/tweets";
import { Toast } from "./../utils/helpers";

export default {
  data(){
    return {
      description:'',
      isProcessing: false,
    }
  },
    methods:{
        closeModal(){
            this.$emit('afterCloseModal')
        },
        async createdTweet(){
          try{
            this.isProcessing = true
              const response = tweetApi.create({description:this.description})
              console.log(response)
              this.$emit('afterCreatedTweet',{
                description:this.description,
                createdAt:new Date,
                user:{
                  account:'user1',
                  image: null,
                  name:'user1'
                }
              })
              this.isProcessing = false
          }
          catch(error){
            this.isProcessing = false
          Toast.fire({
          icon: "warning",
          title: "無法新增推文",
        });
          }
        }
    }
}
</script>