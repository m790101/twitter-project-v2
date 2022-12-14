# Simple Twitter 專案
## 介紹:
[Alphitter 網站連結](https://m790101.github.io/twitter-project-v1-/#/logIn)

此專案為前後分離開發模式的前端部分。

### 技術層面：

1. 前端框架 Vue 深度應用（使用：Vue router、Vuex）<br>
2. 多頁面切版<br>
3. 使用SCSS預處理器<br>
4. class 命名規範則使用BEM加快開發速度<br>
5. 非同步串接後端 API，針對回傳的 status 做不同處理<br>
6. 前端驗證：像是錯誤處理的訊息提示，或是使用者輸入了不符期待的資料時會阻擋，直到接收到正確資料再傳送給後端<br>

### 專案內容：

Simple Twitter 平台，是讓使用者可以隨時發表推文及與其他使用者可以相互留言的社群平台。<br>
網站有兩種使用角色：一般使用者 (以下稱 user)及管理員 (以下稱 admin)<br>
我們將 user 活動的地方稱為「前台」，而 admin 活動的地方稱為「後台」，前台與後台有不同的登入入口，而使用者一定要註冊才可使用前台。<br>


### 功能介紹：
#### 前台：
1. User 可以進行登入、登出功能<br>
2. User 需要註冊才能進入網站，註冊時需要填寫帳號、名稱、email、密碼及再次確認密碼<br>
3. 登入後，User 可以在「設定」功能自行更改帳號、名稱、email、密碼及再次確認密碼<br>
4. 帳號及email不可與其他user重複<br>
5. User 在首頁能看到自已與他人的推文<br>
6. User 可以按下推文按鈕進行推文發佈<br>
7. User 能點選任何一則推文進行回覆、按Like或取消Lik、看到其他對此貼文的回覆內容<br>
8. User 可以在「個人資料」編輯自己的照片、背景圖片、自我介紹<br>
9. User 可以在「個人資料」中看到自己的所有推文、回覆、喜歡的推文內容<br>
10. User 可以瀏覽跟隨中與跟隨者的清單<br>
11. User 可以在左側「推薦跟隨」瀏覽跟隨者數量排列前 10 的推薦跟隨名單<br>
#### 後台：
1. 僅有管理員有權限進入後台
2. 管理員無法進入前台網站
3. 管理員可以瀏覽全站所有的推文清單
4. 管理員可以刪除任一筆推文
5. 管理員可以瀏覽所有使用者清單，包括推文數量、關注人數、跟隨者人數、推文被like的總數


## 使用方式:
### 下載
1.	開啟終端機 clone 此專案至本地<br>
git clone https://github.com/m790101/twitter-project-v1-.git<br>
2.	npm install<br>
3.	npm run serve<br>



### 測試
 【前台測試帳密】<br>
   account：user1<br>
   password: 12345678<br>
 【後台測試帳密】<br>
   account：root<br>
   password：12345678<br>


## 使用工具及版本:
"vue": 2.6.14<br>
"vue-router": "3.5.1"<br>
"vuex": "3.6.2"<br>
"axios": "0.19.2"<br>
"bootstrap": "5.2.2,<br>
"core-js": "3.8.3"<br>
"moment": "2.29.4"<br>
"sweetalert2": "9.8.2"<br>
      


