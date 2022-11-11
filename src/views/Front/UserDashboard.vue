<template>
  <Navbar></Navbar>
  <div class="container-fluid px-0">
      <router-view/>
      <ToastMessages></ToastMessages>
  </div>
  <Footer></Footer>
</template>

<script>
import Navbar from '@/components/front/Navbar_front.vue'
import Footer from '@/components/front/Footer_front.vue'
import emitter from '@/methods/emitter'
import ToastMessages from '@/components/ToastMessage.vue'
export default {
  components: {
    ToastMessages,
    Navbar,
    Footer
  },
  provide () {
    return {
      emitter
    }
  }
}
</script>
