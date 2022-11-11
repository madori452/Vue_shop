<template>
  <router-view/>
  <Top></Top>
</template>

<style lang="scss">
@import "./assets/all.scss";
@import"./assets/scss/main.scss";
@import url('https://fonts.googleapis.com/css2?family=Rufina&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap');
body{
  font-family: 'Noto Sans TC', sans-serif;
  background-color: $secondary;
  color: $text_bk;
  overflow-x: hidden;
}
*{
  // border: 1px solid #ddd;
}
.modal-backdrop{
  background-color: #0303039c;
}
.en-font{
  font-family: 'Rufina', serif;
}
.navbar-nav .show > .nav-link, .navbar-nav .nav-link.active{
  color:$primary
}
.text-900{
  color:$text_900
}
.modal.show .modal-dialog{
  margin-top: 100px;
}
</style>

<script>
import Top from '../src/components/front/Top.vue'
export default {
  components: {
    Top
  }
}
</script>
