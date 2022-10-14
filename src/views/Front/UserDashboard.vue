<template>
  <Nav></Nav>
  <div class="container-fluid px-0">
      <router-view/>
      <ToastMessages></ToastMessages>
  </div>
  <Footer></Footer>
</template>

<script>
import Nav from '@/components/front/Navbar_front.vue'
import Footer from '@/components/front/Footer_front.vue'
import emitter from '@/methods/emitter'
import ToastMessages from '@/components/ToastMessage.vue'
export default {
  components: {

    ToastMessages,
    Nav,
    Footer
  },
  provide () {
    return {
      emitter
    }
  },
  created () {

  }
}

</script>
