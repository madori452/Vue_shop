<template>
  <CustomLoading :active="isLoading"></CustomLoading>
  <div class="container">
    <!-- 產品簡述   -->
    <div class="row info-row">
      <div class="col-lg-7">
        <div class="card-product" :style="{backgroundImage:'url('+imgUrl+')',height:'500px',backgroundSize: '100%', backgroundPosition:'center 50%'}"></div>
      </div>
      <div class="col-lg-5 d-flex flex-column mt-2">
        <p class="h6 type">{{product.category}}</p>
        <nav aria-label="breadcrumb ">
          <ol class="breadcrumb">
            <li class="breadcrumb-item "><router-link to="/user/products" class="text-black-50 text-decoration-none">所有產品</router-link></li>
            <li class="breadcrumb-item active text-black-50 fw-bolder" aria-current="page">{{ product.title }}</li>
          </ol>
        </nav>
        <p class="h4 mb-3 en-font title">{{ product.title }}</p>
        <p class="h5 text-primary">特惠價 NT {{ product.price }}</p>

        <div class="row text-black-80 px-2">
          <p class="h6 mt-4">商品敘述</p>
          <hr>
          <p class="h6 lh-base">{{produtContent}}</p>
        </div>

        <!-- 數量 -->
        <div class="num-select">
          <label for="productNum"> 數量</label>
          <div class="row mb-3 mt-2">
            <div class="col-sm-8">
              <div class="mx-auto">
                <div class="row px-2">
                  <button type="button button-count"  @click="addNum()"
                      class="btn btn-primary btn-sm rounded-0 col-2">
                    <i class="bi bi-plus text-white h4"></i>
                  </button>
                  <input class="col-8 button-count bg-transparent qty_input border border-2 pt-1 text-center px-3" v-model="productCount" id="productNum" min="1">
                  <button type="button button-count" @click="reduceNum()"
                      class="col-2 btn btn-primary btn-sm rounded-0">
                      <i class="bi bi-dash-lg text-white h4"></i>
                  </button>
                </div>

              </div>
            </div>
            <div class="col-sm-4 px-2">
              <button type="button" class="btn btn-primary text-white px-3 add-btn"
                    @click="addCart(product.id)" :disabled="this.status.loadingItem===product.id">
                <span v-if="this.status.loadingItem===product.id" class="spinner-grow spinner-grow-sm " role="status" aria-hidden="true"></span>
                 加到購物車
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
    <!-- 產品資訊 -->
    <div class="row mt-5 mb-5">
      <nav>
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
          <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">運送說明</button>
          <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">退換貨須知</button>
        </div>
      </nav>
      <div class="tab-content" id="nav-tabContent">
        <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
          <div class="teb-content mt-3 px-3">
              <p class="h6 text-primary">運送說明</p>
              <p class="mt-1 lh-base">當您的款項信用卡資料核對無誤後，該筆交易便完成付款程序，貨到付款則直接進行配送。<br/>
              我們將會在付款完成後的 1 - 7 個工作天內(不含週休及國定例假日)，將商品宅配送達您指定的收件地址。<br/>
              為了保護商品的完整，我們會妥善包裝您所訂購的商品，收到貨後請立即開箱檢查，確認商品包裝完成無缺。</p>
          </div>

          <div class="teb-content mt-4 px-3">
              <p class="h6 text-primary">配送地區</p>
              <p class="mt-1 lh-base">台灣本島及離島，離島地區為澎湖、金門、馬祖、綠島。離島地區若遇天候、海象、船班年節停航及船班歲修等不可控之因素，恕無法指定希望配達日及時段。</p>
          </div>

        </div>
        <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
          <div class="teb-content mt-3 px-3">
            <p class="h6 text-primary">退換貨說明</p>
            <p class="mt-1">
              線上購物退貨僅提供全訂單退貨，恕不接受商品部份退貨，並且退回商品必須是全新狀態且保持包裝完整，否則恕不接受退換貨。若商品因消費者個人不當使用拆卸產生人為因素造成故障、毀損、磨損、擦傷、刮傷、髒污、包裝破損不完整者，或是配件不齊者，恕不接受退貨。<br/>
              只要您符合下述條件其中一項就可以無條件退貨：<br/><br/>

              <span class="mt-1"><i class="bi bi-circle"></i>實際收到的商品與所訂購商品不符合<br/></span>
              <span class="pt-2"><i class="bi bi-circle"></i>產品包裝內配件不齊全或商品規格與外包裝說明不符合<br/></span>
              <span class="pt-2"><i class="bi bi-circle"></i>如商品超過鑑賞期欲辦理退換貨者，恕不受理</span>
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- 可能喜歡 -->
    <div class="row px-3">
      <p class="h6 text-primary">您可能也會喜歡</p>
      <hr>
      <div class="row my-4">
        <div class="col-md-3"  v-for="item in allproducts"  :key="item.id">
          <div class="card-body">
            <div class="bg-image" style="height: 250px; background-size: cover; background-position: center"
              :style="{backgroundImage: `url(${item.imageUrl})`}">
                <span @click="toProduct(`${item.id}`)" class="en-font h4 mask text-white text-center position-absolute">
                  see more
                </span>
            </div>
            <h5 class="card-title en-font">{{ item.title }}</h5>

      </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">
@import '@/assets/scss/main.scss';

  .info-row{
    padding-top: 180px;
    @include phone{
      padding-top: 80px;
    }
  }
  .nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link{
    background-color: transparent;
  }
  .breadcrumb {
    @include phone{
      font-size: 14px;
    }
  }
  .title{
    @include phone{
      font-size: 18px;
    }
  }
  .lh-base{
    @include phone{
      font-size: 14px;
    }
  }
  .nav-link{
    color: $text_900;
  }
  .card-product{
    background-position: 50% 60%;
    background-size: contain;
    background-repeat: no-repeat;
  }
  .qty_input{
    border: 1px solid $primary !important;
  }
  p.type{
    width: 106px;
    height: 26px;
    background-color: #E2DDCD;
    text-align: center;
    line-height: 26px;
  }
  .add-btn{
    font-size: 16px;
    width: 100%;
    @include pad{
      margin-top: 20px;
    }
    @include phone{
      font-size: 14px;
    }
  }
  .button-count{
    height: 40px;
  }

  .num-select{
    margin-top: 80px;
  }
  .card-body{
    background-color: #fff;
    padding:0 0 40px 0;
    position: relative;
    margin-bottom: 20px;
    text-align: center;
    cursor: pointer;
  }
  .card-title{
    font-size: 16px;
    margin: 20px 0 0 10px;
  }
  .mask{
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color:rgba(0, 0, 0,0.5);
  // height: 200px;
  line-height: 300px;
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

export default {
  data () {
    return {
      product: {},
      allproducts: {},
      randomProducts: [],
      arrSet: [],
      id: '',
      imgUrl: '',
      productCount: 1,
      produtContent: '',
      status: {
        loadingItem: '' // 對應品項id
      }
    }
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
          this.isLoading = false

          this.allproducts = res.data.products
          this.recommend()
        }
      }).catch(err => {
        this.$swal({
          icon: 'error',
          title: `${err.data.message}`
        })
      })
    },
    // 隨機產品推薦
    recommend () {
      const arrSet = new Set([])
      const productAll = this.allproducts
      for (let i = 0; i <= 3; i++) {
        this.randomProducts = productAll[Math.floor(Math.random() * productAll.length)]
        arrSet.add(this.randomProducts)
      }
      this.allproducts = arrSet
    },

    toProduct (id) {
      this.$router.push(`${id}`)
      this.getProduct(id)
    },

    // 取得單一資料
    getProduct (id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`
      this.isLoading = true
      this.$http.get(url).then((res) => {
        this.product = res.data.product
        this.imgUrl = res.data.product.imageUrl
        this.isLoading = false
        this.produtContent = res.data.product.description
      }).catch(err => {
        this.$swal({
          icon: 'error',
          title: `${err.data.message}`
        })
      })
    },
    // 加入購物車
    addCart (id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      const cart = {
        product_id: id,
        qty: 1
      }
      this.status.loadingItem = id
      cart.qty = this.productCount
      this.$http.post(url, { data: cart }).then((res) => {
        this.status.loadingItem = ''
        this.emitter.emit('update-qty')
        this.$httpMessageState(res, '已加入購物車')
      }).catch(err => {
        this.$swal({
          icon: 'error',
          title: `${err.data.message}`
        })
      })
    },

    // 增加數量按鈕
    addNum () {
      this.productCount += 1
    },
    // 減少數量按鈕
    reduceNum () {
      if (this.productCount >= 1) {
        this.productCount -= 1
      }
    }

  },

  created () {
    this.id = this.$route.params.productId
    this.getProduct(this.id)
    this.getProducts()
  }

}
</script>
