<template>
  <div class="coupon position-fixed w-100">輸入 CDR5542 可以享受優惠85折喔！！</div>
  <nav class="navbar navbar-expand-md navbar-bg py-0 mb-3 position-fixed w-100">
    <div class="container">
        <router-link to="../../user/index" class="mt-2" @click="closeNav">
          <img src="@/assets/Nav/logo-bk.svg" alt="logo" class="logo">
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
        aria-expanded="false" aria-label="Toggle navigation" @click="openNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse"  id="navbarNavAltMarkup" :class="{ show : toggleNav }">
          <div class="navbar-nav mt-2">
            <router-link to="../../user/index" class="nav-link item " aria-current="page" @click="closeNav">首頁</router-link>
            <router-link to="../../user/products" class="nav-link item" aria-current="page"  @click="closeNav">產品列表</router-link>
            <router-link to="../../user/articles" class="nav-link item" aria-current="page"  @click="closeNav">品牌故事</router-link>
          </div>
          <div class="navbar-nav ms-auto">
            <router-link to="../../login" class="nav-link " aria-current="page">
              <img src="@/assets/Nav/login.svg" alt="後台登入">
            </router-link>
            <router-link to="../../user/cart" class="nav-link " aria-current="page">
              <div class="cart-icon" >
                <img src="@/assets/Nav/chart.svg" alt="購物車" >
                <div v-if="shoppingCart" class="tip">{{shoppingCart}}</div>
              </div>
            </router-link>
          </div>
         </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
@import "@/assets/scss/main.scss";
  .coupon{
    background-color: $primary;
    text-align: center;
    padding: 10px 0;
    color: $text_wh;
  }
  .collapse {
    transition: 0.5s;
  }
  img.logo{
    @include pad{
     width: 80%;
     padding: 10px 0;
    }
  }
  .navbar-bg{
  background-color: #ffffff71;
  }
  .navbar,.coupon{
    z-index: 222;
  }
  .navbar{
    height: 60px;
    @include pad{
      height: auto;
      background-color: #fff;
    }
  }
  .navbar-toggler:focus{
    @include pad{
     box-shadow:none
    }
  }
  .item{
    position: relative;
    transition: 0.5s;
  }
  .item:hover{
    color: $primary;
  }
  .item:hover:after{
    display: block;
    content: '';
    position: absolute;
    width: 100%;
    height:2px;
    background-color: $primary;
    left: 0;
    bottom: 0;
    transition: 1s;
    animation: ani_bar 0.5s alternate;
  }
  @keyframes ani_bar{
    0%{
      width: 0%;
    }
    100%{
      width: 100%;
    }
  }
  .navbar{
    top:44px;
    transition: 0.5s;
  }
  .cart-icon{
    position: relative;
    width: 40px;
  }
  .tip{
    position: absolute;
    width: 24px;
    height: 24px;
    background-color: $primary;
    border-radius: 50%;
    top:-8px;
    right:-10px;
    text-align: center;
    color: #fff;
  }
  .navbar-bgscroll{
    background: #ffffffc0;
    transition: 1s;
    padding: 20px;
    @include pad{
     background: #fff;
    }
    @include phone{
      padding: 0px;
    }
  }
  .navbar-toggler{
    @include pad{
      border: none;
    }
  }
</style>

<script>
export default {
  data () {
    return {
      shoppingCart: '',
      toggleNav: false
    }
  },
  inject: ['emitter'],

  emits: ['shopping-cart'],

  // 取得購物車列表
  methods: {
    getCart () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.isLoading = true
      this.$http.get(url).then((res) => {
        this.cart = res.data.data
        this.shoppingCart = this.cart.carts.length
        this.isLoading = false
      }).catch(err => {
        this.$swal({
          icon: 'error',
          title: `${err.data.message}`
        })
      })
    },
    scroll () {
      window.addEventListener('scroll', function () {
        const navbar = this.document.querySelector('.navbar')
        const scorllPercent = this.scrollY
        if (scorllPercent > 10) {
          navbar.classList.add('navbar-bgscroll')
        } else {
          navbar.classList.remove('navbar-bgscroll')
        }
      })
    },
    openNav () {
      if (window.innerWidth < 992) {
        this.toggleNav = !this.toggleNav
      }
    },
    closeNav () {
      if (window.innerWidth < 992) {
        this.toggleNav = false
      }
    }

  },

  mounted () {
    this.getCart()
    // 數量設定
    this.emitter.on('update-qty', () => {
      this.getCart()
    })
  },
  unmounted () {
    // 數量設定
    this.emitter.off('update-qty', () => {
      this.getCart()
    })
    this.scroll()
  }
}

</script>
