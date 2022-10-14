<template>
<CustomLoading :active="isLoading"></CustomLoading>
  <div class="container-fluid px-0"  data-aos="fade-up"  data-aos-duration="800" data-aos-once="true" data-aos-delay="300">
    <Carousel ></Carousel>
  </div>
  <div class="container">
    <div class="row row-adj01">
      <div class="col-md-7">
        <div class="content" data-aos="fade-up"  data-aos-duration="800" data-aos-once="true" data-aos-delay="600">
          <h5 class="en-font fst-italic text-primary">- Home Ritual -</h5>
          <h3 class="fs-4-lg fs-5-md sub-titel">創造居家儀式感</h3>
          <p class="content-p">一回到家，就想點起香氛蠟燭，看著溫暖搖曳的點點燭光，<br/>感受香氣緩緩擴散整個空間、被柔和香氛包圍。</p>
        </div>

      </div>
      <div class="col-md-5" data-aos="fade-up"  data-aos-duration="800" data-aos-once="true" data-aos-delay="900">
        <img class="img-fluid slide01" src="../../assets/Index/slide01.png">
      </div>
    </div>
    <div class="row row-adj02">
      <div class="col-lg-6 d-flex align-items-end order-lg-end">
        <div class="content" data-aos="fade-up"  data-aos-duration="800" data-aos-once="true" data-aos-delay="300">
          <h5 class="en-font fst-italic text-primary">- Quiet & Peaceful -</h5>
          <h3 class="fs-4-lg fs-5-md sub-titel">寧靜平和、靜思新生</h3>
          <p class="content-p">為生活空間奉上寧靜平和、靜思新生的力量，<br/>正可為現今焦慮的生活中注入一股安定的氛圍</p>
        </div>

      </div>
      <div class="col-lg-6 order-lg-first" data-aos="fade-up"  data-aos-duration="800" data-aos-once="true" data-aos-delay="600">
        <img class="img-fluid slide01" src="../../assets/Index/slide02.png">
      </div>
    </div>
  </div>

  <div class="container-fluid px-0" data-aos="fade-up"  data-aos-duration="800" data-aos-once="true" data-aos-delay="300">
    <div class="value-content d-flex justify-content-center">
      <div class="value-text">
        <h3 class="fs-4-lg fs-5-md sub-titel text-center">品牌理念</h3>
        <p class="text-center content-p">來自瑞典西部海岸的 Scented Candel，<br/>從北歐品味美學與生活風格孕育出溫柔保養之道。</p>
        <router-link to="../user/articles">
          <div class="mx-auto button-primary">瞭解更多</div>
        </router-link>
      </div>

    </div>
  </div>
  <div class="container coupon-row" data-aos="fade-up"  data-aos-duration="800" data-aos-once="true" data-aos-delay="300">
    <Coupon class="d-block mx-auto" ></Coupon>
  </div>
</template>

<script>
import Carousel from '@/components/front/carousel.vue'
import Coupon from '@/components/front/coupon.vue'
export default {

  components: { Carousel, Coupon },
  data () {
    return {
      isLoading: true
    }
  },
  created () {
    setTimeout(() => {
      this.isLoading = false
    }, 3000)
  }

}
</script>
<style scoped lang="scss">
@import "@/assets/scss/main.scss";
img.slide01{
  height: 600px;
  margin-left:60px;
  display: block;
  @include lg-screen{
    margin-left:0px;
  }
  @include pad{
    height: 400px;
  }
}
h3, .value-content h5{
  font-size: $text_titile;
  color: $text_bk;
}
.row-adj01{
  padding: 200px 0 0 0;
  @include phone{
    padding: 100px 30px 0 30px;
  }
}
.row-adj02{
  margin-top: -200px;
  padding: 0 0 200px 0;
  @include pad{
    margin-top: 100px;
  }
  @include phone{
    margin-top: 50px;
    padding: 0px 30px 50px 30px ;
  }
}
.sub-titel{
  @include phone{
    font-size: 20px;
  }
}
.content-p{
  font-size: 16px;
  @include phone{
    font-size: 14px;
  }
}
.value-content{
  padding: 200px 0;
  background-image: url('../../assets/Index/value.png');
  background-size: cover;
  background-position: 50% 50%;
}

.value-text{
  background-color: #ffffff6e;
  padding: 50px 80px;
}
.button-primary{
  @include button-primary-border-index;
}
a{
  text-decoration: none;
}
.button-primary:hover{
  background-color: $primary;
  color: #fff;
  transition: 0.5s;
}
.coupon-row{
  padding: 100px 0;
}

</style>
