<template>
  <Nav></Nav>

<div class="container-fluid px-5 pt-5 dashboard en-font">
    <router-view/>
    <ToastMessages></ToastMessages>
</div>
</template>
<style scoped lang="scss">
@import '../assets/scss/main.scss';
html,body{
  height: 100%;
}
.dashboard{
  background-image: url('../assets/Admin/bg02.png');
  background-size: cover;
  background-position: 50% 50%;
  width: 100%;
  height: 100vh;
  top:-20px;
  position: relative;

}
</style>
<script>
import Nav from '../components/Navbar.vue'
import emitter from '../methods/emitter'
import ToastMessages from '../components/ToastMessage.vue'
export default {
  components: {
    Nav,
    ToastMessages
  },
  provide () {
    return {
      emitter
    }
  },
  created () {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)tracyToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    // console.log(token)
    this.$http.defaults.headers.common.Authorization = token
    const api = `${process.env.VUE_APP_API}api/user/check`
    this.$http.post(api, this.user).then((res) => {
      if (!res.data.success) {
        this.$router.push('/login')
      }
    }).catch(err => {
      this.$swal({
        icon: 'error',
        title: `${err.data.message}`
      })
    })
  }
}

</script>
