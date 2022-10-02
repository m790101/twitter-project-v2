<template>
    <div class="container py-5">
      <form class=" w-100" v-on:submit.prevent="handleSubmit">
        <div class="title d-flex flex-column align-item-center  mb-4">
          <img class="title__image"  src="./../image/logo.png" alt="logo" >
          <h3 class="title__word mb-3 font-weight-normal">登入Alphitter</h3>
        </div>
  
        <div class="form-label-group mb-2">
          <label for="account">帳號</label>
          <input id="account" name="account" type="" class="form-control" placeholder="email" autocomplete="username"
            required autofocus v-model="email" />
        </div>
  
        <div class="form-label-group mb-3">
          <label for="password">密碼</label>
          <input id="password" name="password" type="password" class="form-control" placeholder="Password"
            autocomplete="current-password" required v-model="password" />
        </div>
  
        <button class="btn btn-lg btn-primary btn-block mb-3" type="submit" v-bind:disabled="isProcessing">
          登入
        </button>
  
        <div class="text-center mb-3">
          <a href="">
            <span>註冊Alphitter </span>
          </a>
          <span>●</span>
          <a href="">
            <span>後台登入</span>
          </a>
        </div>
  
    
      </form>
    </div>
  </template>
  
  <style lang="scss" scoped>
   .title {
    &__image {
     width: 50px;
     height: 50px;
    }
    &__word{
        line-height: 26px;    
    }
   }
  


  </style>