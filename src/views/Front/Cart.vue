<template>
  <CustomLoading :active="isLoading"></CustomLoading>
  <!-- Banner -->
  <div class="container-fluid d-flex align-items-center justify-content-center px-0">
    <h4 class="en-font">CART</h4>
    <img src="@/assets/Cart/banner-cart.png" class="d-lg-block d-none w-100" alt="banner">
    <img src="@/assets/Cart/cart-pd.png" class="d-md-block d-none d-lg-none w-100" alt="Carousel01">
    <img src="@/assets/Cart/cart-mb.png" class="d-sm-block d-md-none w-100" alt="Carousel01">
  </div>
  <!-- 內容 -->
  <div class="container">
    <div class="row my-5">
      <!-- 步驟 -->
      <div class="step-line mb-4">
        <ul class="col-12 d-flex ps-0 justify-content-center align-items-center en-font mx-auto">
          <li class="circle circle01 col-3">
            <p class="num d-block mx-auto" :class="{primary:true}">1</p>
            <p class="step">確認訂單資訊</p>
          </li>
          <li class="circle circle01 col-3  offset-1">
            <p class="num d-block mx-auto">2</p>
            <p class="step">建立個人訂單</p>
          </li>
          <li class="circle circle01 col-3  offset-1">
            <p class="num d-block mx-auto">3</p>
            <p class="step">付款完成</p>
          </li>
        </ul>
      </div>
      <!-- 購物列表 -->
      <div class="row mx-auto"  v-if="cart.carts">
          <!-- 購物車0-->
          <div class="col-lg-6 mx-auto text-center my-5 cart-none bg-white" v-if="cart.carts.length===0">
            <div class="go-shop mx-auto d-flex justify-content-center align-items-center flex-column">
              <h5 class="text-primary en-font">目前還沒有商品！快去選購吧</h5>
              <router-link to="../user/products">
                <button class="shop btn btn-primary py-2 px-5 text-white rounded-0">選擇商品</button>
              </router-link>
            </div>
          </div>
          <!-- 購物車列表 -->
          <div class="col-xl-5 cart-list-menu bg-white offset-xl-1" v-if="cart.carts.length>=1">
            <div class="px-1">
              <p class="h5 en-font mt-5">購物清單</p>
              <hr />
              <table class="table align-middle px-4">
                <thead>
                  <tr>
                    <th></th>
                    <th style="width: 230px">品名</th>
                    <th style="width: 110px">數量</th>
                    <th class="text-end">單價</th>
                  </tr>
                </thead>
                <tbody>
                <template v-if="cart.carts">
                  <tr v-for="item in cart.carts" :key="item.id">
                    <td>
                      <button type="button" class="btn btn-outline-primary btn-sm btn-cancel"
                              :disabled="status.loadingItem === item.id"
                              @click="removeCartItem(item.id)">
                        <i class="bi bi-x"></i>
                      </button>
                    </td>
                    <td>
                      {{ item.product.title }}
                      <div class="text-success" v-if="item.coupon">
                        已套用優惠券
                      </div>
                    </td>
                    <td>
                      <div class="input-group input-group-sm">
                        <input type="number"
                              class="form-control"
                              min="1"
                              v-model.number="item.qty"
                              @change="updateCart(item)"
                              :disabled="item.id===status.loadingItem"
                              style="width:30px">
                        <span class="input-group-text">/{{ item.product.unit }}</span>
                      </div>
                    </td>
                    <td class="text-end">
                      <small v-if="cart.final_total !== cart.total" class="text-success">折扣價：</small>
                      {{ $filters.currency(item.final_total) }}
                    </td>
                  </tr>
                </template>
                </tbody>
                <tfoot>
                <tr>
                  <td colspan="3" class="text-end">總計</td>
                  <td class="text-end">{{ $filters.currency(cart.total) }}</td>
                </tr>
                <tr v-if="cart.final_total !== cart.total">
                  <td colspan="3" class="text-end text-success">折扣價</td>
                  <td class="text-end text-success">{{ $filters.currency(cart.final_total) }}</td>
                </tr>
                </tfoot>

              </table>
              <!-- 優惠卷 -->
              <div class="row w-100 m-0 coupon-code">
                <div class="col-12 d-flex justify-content-end">
                    <input type="text" class="form-control d-inline-block" v-model="coupon_code" placeholder="請輸入優惠碼">
                    <button class="btn btn-outline-secondary coupon d-inline-block ms-2 col-4" type="button" @click="addCouponCode">
                        套用優惠碼
                    </button>
                </div>
              </div>

            </div>
          </div>
          <!-- 表格 -->
          <div class="form-table-info col-xl-5 px-0"  v-if="cart.carts.length>=1">
            <div class="bg-white">
                <div class="row">
                  <Form class="col-md-12 d-flex justify-content-center flex-column form-order" @submit="createOrder"  v-slot="{ errors }">
                    <p class="h5 en-font mt-5">訂購人資料</p>
                    <hr />
                    <div class="mb-3 mt-3">
                      <label for="email" class="form-label">Email</label>
                      <Field id="email" name="email" type="email" class="form-control"
                                :class="{ 'is-invalid': errors['email'] }"
                                placeholder="請輸入 Email" rules="email|required"
                                v-model="form.user.email"></Field>
                      <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
                    </div>

                    <div class="mb-3">
                      <label for="name" class="form-label">姓名</label>
                      <Field id="name" name="姓名" type="text" class="form-control"
                                :class="{ 'is-invalid': errors['姓名'] }"
                                placeholder="請輸入姓名" rules="required"
                                v-model="form.user.name"></Field>
                      <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
                    </div>

                    <div class="mb-3">
                      <label for="tel" class="form-label">電話</label>
                      <Field id="tel" name="電話" type="tel" class="form-control"
                                :class="{ 'is-invalid': errors['電話'] }"
                                placeholder="請輸入電話" rules="required"
                                v-model="form.user.tel"></Field>
                      <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
                    </div>

                    <div class="mb-3">
                      <label for="address" class="form-label">地址</label>
                      <Field id="address" name="地址" type="text" class="form-control"
                                :class="{ 'is-invalid': errors['地址'] }"
                                placeholder="請輸入地址" rules="required"
                                v-model="form.user.address"></Field>
                      <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
                    </div>

                    <div class="mb-3">
                      <label for="message" class="form-label">留言</label>
                      <textarea name="" id="message" class="form-control" cols="30" rows="2"
                                v-model="form.message"></textarea>
                    </div>
                    <div class="text-end">
                      <button class="btn btn-primary w-100 mb-5 py-2 text-white rounded-0" >送出訂單</button>
                    </div>
                  </Form>
              </div>
            </div>
          </div>
      </div>

    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/main.scss';
h4.en-font{
  position: absolute;
  z-index: 2;
  color: #fff;
  font-size: $text_titile;
}
.step,.step-line {
  position: relative;
}
.step-line:after{
  display: block;
  content: '';
  width: 360px;
  height: 2px;
  position: absolute;
  left: calc(50% - 176px);
  top: 15px;
  z-index: 0;
  background-color: #ddd;
  @include pad{
    width: 340px;
    left: calc(50% - 158px);
  }
  @include phone{
    width: 263px;
    left: calc(50% - 130px);
  }
}

.step-line ul{
  width: 500px;
  @include phone{
    width: 100%;
  }
}
p.step{
  @include phone{
    font-size: 14px;
  }
}
.step-line ul li{
  list-style: none;
}
.step-line .step{
  text-align: center;
}
.step-line .num{
  z-index: 1;
  position: relative;
  width: 30px;
  height: 30px;
  text-align: center;
  color: #fff;
  line-height: 30px;
  border-radius: 50%;
  font-size: 20px;
  background-color: #aaa;
}
.primary{
  background-color: $primary !important;
}
.cart-list-menu{
  position: relative;
  z-index: 0;
  height: auto;
  margin-right: 20px;
}
.cart-none{
  padding: 100px 0;
}
.form-control{
  width: 200px;
  border-radius: 0px;
}
button.coupon{
  font-size: 16px;
  @include phone{
    font-size: 14px;
  }
}
.btn-next{
  @include button-primary-cart;
  width: 110px;
  height: 40px;
  border-radius: 5px;
  font-size: 16px;
}

.btn-cancel{
  width: 30px;
  height: 30px;
}
.form-control{
  width: 100%;
  margin: auto;
}
.form-order{
  padding: 0px 30px;
  @include phone{
    padding: 0px 40px;
  }
}
.coupon-code{
  @include pad{
    padding-bottom: 40px;
  }
}
.form-table-info {
  @include pad{
    margin-top: 20px;
  }
}
</style>

<script>

export default {
  data () {
    return {
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      },
      status: {
        loadingItem: '' // 對應品項id
      },
      isLoading: false,
      cart: {},
      coupon_code: ''
    }
  },

  inject: ['emitter'],
  methods: {

    // 取得購物車列表
    getCart () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.isLoading = true
      this.$http.get(url).then((res) => {
        this.cart = res.data.data
        this.isLoading = false
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
    },
    // 套用優惠卷
    addCouponCode () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`
      const coupon = {
        code: this.coupon_code
      }
      this.$http.post(url, { data: coupon }).then((res) => {
        this.$httpMessageState(res, '加入優惠券')
        this.getCart()
      }).catch(err => {
        this.$swal({
          icon: 'error',
          title: `${err.data.message}`
        })
      })
    },
    // 移除購物車內容
    removeCartItem (id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`
      this.isLoading = true
      this.status.loadingItem = id
      this.$http.delete(url).then((res) => {
        this.status.loadingItem = ''
        this.emitter.emit('update-qty')

        this.$httpMessageState(res, '刪除購物車品項')
        this.getCart()
        this.isLoading = false
      }).catch(err => {
        this.$swal({
          icon: 'error',
          title: `${err.data.message}`
        })
      })
    },
    // 建立訂單
    createOrder () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`
      const order = this.form
      this.$http.post(url, { data: order })
        .then((res) => {
          this.orderId = res.data.orderId
          this.$router.push(`/checkout/${this.orderId}`)
        }).catch(err => {
          this.$swal({
            icon: 'error',
            title: `${err.data.message}`
          })
        })
    }

  },

  created () {
    this.getCart()
  }

}
</script>
