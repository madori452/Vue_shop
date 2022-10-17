<template>
  <Nav></Nav>
  <router-view></router-view>
</template>

<script>
import Nav from '../components/front/Navbar_front.vue'

export default {
  name: 'Home',
  components: {
    Nav
  }

}
</script>
