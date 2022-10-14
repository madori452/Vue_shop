<template>
<CustomLoading :active="isLoading"></CustomLoading>
  <div class="container-fluid d-flex align-items-center justify-content-center px-0"  data-aos="fade-up"  data-aos-duration="800" data-aos-once="true" data-aos-delay="600">
    <p class="en-font title fs-3-lg fs-4-md">ALL PRODUCTS</p>
    <img src="@/assets/Products/banner.png" class="d-lg-block d-none w-100" alt="Carousel01">
    <img src="@/assets/Index/Carousel/01-pd.png" class="d-md-block d-none d-lg-none w-100" alt="Carousel01">
    <img src="@/assets/Index/Carousel/01-mb.png" class="d-sm-block d-md-none w-100" alt="Carousel01">
  </div>
  <div class="container mx-auto pt-5">
    <div class="row">
      <div class="col-md-3"  data-aos="fade-up"  data-aos-duration="800" data-aos-once="true" data-aos-delay="900">
        <!-- 篩選列表 -->
        <div class="list-group mt-5 en-font" >
          <a :class="{'active':productClass===''}"  @click.prevent="allProduct(item)" href="#" class="list-group-item list-group-item-action" aria-current="true">
            所有產品
          </a>
          <a :class="{'active':item===productClass}" @click.prevent="changeProduct(item) " v-for="item in productfilter" :key="item.id" href="#" class="list-group-item list-group-item-action">
              {{item}}
          </a>

        </div>
        <!-- 篩選列表end -->

      </div>
      <div class="col-md-9 mb-5"  data-aos="fade-up"  data-aos-duration="800" data-aos-once="true" data-aos-delay="900">

          <!-- 產品資料 -->
          <div  class="card rounded-0 col-lg-3 me-3 mt-3"   v-for="item in typeproducts" :key="item.id">
              <div class="bg-image"
              :style="{backgroundImage: `url(${item.imageUrl})`}">
                <router-link class="en-font h4 mask text-white text-center position-absolute" :to="`/user/product/${ item.id }`">
                  see more
                </router-link>
              </div>
              <div class="card-body">
                <h5 class="card-title en-font">{{ item.title }}</h5>
                <div class="h5" v-if="!item.price">{{ item.origin_price }} 元</div>
                <div class="row">
                  <div class="h5 col-md-8 pe-2 text-end" v-if="item.price">
                    <del class="h6 text-start d-block " v-if="item.price">NT {{ item.origin_price }} 元</del>
                    <h4 class="text-start price">NT {{ item.price }} 元</h4>
                  </div>
                  <button type="button" class="py-0 col-4 btn btn-cart btn-outline-primary" :disabled="this.status.loadingItem===item.id"
                        @click="addCart(item.id)" >
                    <span v-if="this.status.loadingItem===item.id" class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                    <i class="bi bi-cart3 p-0"></i>
                  </button>

                </div>

              </div>
          </div>
          <!-- 產品資料 end-->
      </div>
    </div>
    <Pagination  v-if="productClass ===''" class="my-5" :pages="pagination" :product-class="productClass" @emit-pages="getProductPage" ></Pagination>

  </div>

</template>

<style scoped lang="scss">
@import '@/assets/scss/main.scss';
.title{
    position: absolute;
  z-index: 2;
  font-size: $text_titile;

  @include pad{
    background-color: #ffffff82;
    padding: 10px;
  }
  @include phone{
    font-size: 20px;
  }
}
.list-group{
  width: 90%;
  border-radius: 0px;
  border: 2px solid #a49d738c;
}

.card{
  display: inline-block;
  width: 18rem;
  @include lg-screen{
    width:15rem;
  }
  @include pad{
    width:13rem;
  }
  @include phone{
    width:10rem;
  }
}

.price{
  color: $primary;
  font-weight: 800;
  @include pad{
    font-size: 14px;
  }
}
.card-title{
  font-size: 18px;
  @include pad{
    font-size: 14px;
  }
}
.btn-cart{
  background-color: $primary;
  width: 40px;
  height: 38px;
  margin:15px 20px 0 auto;
  @include pad{
    width: 100%;
    margin:0 auto;
  }
}
.bi-cart3{
  color: #fff;
  font-size: 20px;
  margin: -5px 20px 10px -4px;
  @include pad{
    margin:0px;
  }
}
del{
  color: $text_800;
}
.bg-image{
  position: relative;
  height: 250px;
  background-size: cover;
  background-position: center;
  @include pad{
    height: 150px;
  }
}
.mask{
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color:rgba(0, 0, 0,0.5);
  // height: 200px;
  line-height: 200px;
  opacity: 0;
  text-decoration: none;
  z-index: 5;
  transition: 0.5s ease-in-out;
}
.mask:hover{
   opacity: 1;
}
</style>

<script>
import Pagination from '@/components/Pagination.vue'

export default {
  data () {
    return {
      products: [],
      allproducts: [],
      pagination: {},
      pages: [],
      // 商品類別
      productfilter: [],
      // 商品種類呈現
      typeproducts: [],
      // 點選樣式
      productClass: '',
      status: {
        loadingItem: '' // 對應品項id
      },

      cart: {},
      coupon_code: '',
      orderId: ''
    }
  },
  components: {
    Pagination
  },
  inject: ['emitter'],
  methods: {
    // 取得所有資料
    getProducts () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      // loading狀態判斷
      this.isLoading = true
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          this.allproducts = res.data.products
          this.isLoading = false
        }
      }).catch(err => {
        this.$swal({
          icon: 'error',
          title: `${err.data.message}`
        })
      })
    },

    // 取得單頁資料
    getProductPage (page = 1) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products?page=${page}`
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          // 一開始呈現所有商品
          this.products = res.data.products
          this.typeproducts = this.products
          this.pagination = res.data.pagination
          this.isLoading = false
          // 找出產品種類
          this.products.filter(item => {
            if (this.productfilter.indexOf(item.category) === -1) {
              this.productfilter.push(item.category)
            }
          })
        }
      }).catch(err => {
        this.$swal({
          icon: 'error',
          title: `${err.data.message}`
        })
      })
    },
    // 篩選所有產品
    allProduct () {
      this.typeproducts = this.products.filter(i => i.category !== '')
      this.productClass = ''
    },
    // 篩選產品類別
    changeProduct (item) {
      // 必須以allproducts這個變數去做篩選
      this.typeproducts = this.allproducts.filter((i) => {
        if (item === i.category) {
          return i
        }
      }
      )
      this.productClass = item
    },

    // 加入購物車
    addCart (id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      const cart = {
        product_id: id,
        qty: 1
      }
      this.status.loadingItem = id
      this.isLoading = true

      this.$http.post(url, { data: cart }).then((res) => {
        if (res.data.success) {
          this.status.loadingItem = ''
          this.isLoading = false
          this.getCart()
          this.$httpMessageState(res, '已加入購物車')

          // 動態購物車數量
          this.emitter.emit('update-qty')
        }
      }).catch(err => {
        this.$swal({
          icon: 'error',
          title: `${err.data.message}`
        })
      })
    },
    // 取得購物車列表
    getCart () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(url).then((res) => {
        this.cart = res.data.data
      }).catch(err => {
        this.$swal({
          icon: 'error',
          title: `${err.data.message}`
        })
      })
    },
    // 監聽購物車變動
    updateCart (item) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      this.isLoading = true
      this.status.loadingItem = item.id
      const cart = {
        product_id: item.product_id,
        qty: item.qty
      }
      this.$http.put(url, { data: cart }).then((res) => {
        this.getCart()
        this.status.loadingItem = ''
      }).catch(err => {
        this.$swal({
          icon: 'error',
          title: `${err.data.message}`
        })
      })
    }

  },

  created () {
    this.getProducts()
    this.getCart()
    this.getProductPage()
  }

}
</script>
