<template>
  <ul class="d-flex nav-pill">
      <li class="nav-item" :class="{active:linkActive === 'tweet'}" @click="setPage('tweet')">推文</li>
      <li class="nav-item" @click="setPage('reply')" :class="{ active:linkActive === 'reply' }">回覆</li>
      <li class="nav-item" @click="setPage('like')" :class="{ active:linkActive === 'like' }">喜歡的內容</li>
  </ul>
</template>

<style scoped lang="scss">
.nav-pill {
  border-bottom: 1px solid #e6ecf0;
}
.nav-item {
  padding-bottom: 13px;
  font-weight: 700;
  width: 130px;
  text-align: center;
  border-bottom: 2px solid white;
  &:hover {
    color: var(--brand-color);
    border-bottom: 2px solid var(--brand-color);
  }
  &:active {
    color: var(--brand-color);
    border-bottom: 2px solid var(--brand-color);
  }
  &.active{
      color: var(--brand-color);
    border-bottom: 2px solid var(--brand-color);
  }
}
</style>

<script>
export default {
    data(){
        return {
            linkActive: 'tweet',
        }
    },
    methods:{
      setPage(page){
        this.linkActive = page
        this.$emit('afterPage',page)
      } 
    }
}
</script>