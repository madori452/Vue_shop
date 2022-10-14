<template>
<CustomLoading :active="isLoading"></CustomLoading>
  <div class="container-fluid d-flex align-items-center justify-content-center px-0"  data-aos="fade-up"  data-aos-duration="800" data-aos-once="true" data-aos-delay="300">
    <p class="en-font title fs-3-lg fs-4-md mb-0">ABOUT US</p>
    <p class="content en-font">以瑞典當地自然環境風土化為風格啟發，揀選天然有機原料組成純淨配方，堅持只給最好的。</p>
    <img src="@/assets/Article/About.png" class="d-lg-block d-none w-100" alt="banner">
    <img src="@/assets/Index/Carousel/03-pd.png" class="d-md-block d-none d-lg-none w-100" alt="Carousel01">
    <img src="@/assets/Index/Carousel/03-mb.png" class="d-sm-block d-md-none w-100" alt="Carousel01">
  </div>
  <div class="container mx-auto py-4">
    <div class="row d-flex justify-content-center">
      <div class="col-lg-12 position-relative my-4 me-3"  data-aos="fade-up"  data-aos-duration="800" data-aos-once="true" data-aos-delay="600" v-for="item in allarticles" :key="item.id">
        <div class="row d-flex justify-content-center article">
          <div class="col-5 col-sm-4 px-0 overflow-hidden bg-white">
            <router-link :to="`/user/article/${ item.id }`"  style="height:100px">
              <div class="px-0 cover-img " :style="{ backgroundImage:'url(' +item.image+ ')'}" alt="cover"></div>
            </router-link>
          </div>
          <div class="col-6 col-sm-7 bg-white">
            <p class="h5 mt-4 en-font sub-title">{{item.title}}</p>
            <p class="description text-900">{{item.description}}</p>
            <router-link class="en-font h4 mask text-white text-center position-absolute" :to="`/user/article/${ item.id }`">
              <button class="continue en-font h6">...繼續閱讀</button>
            </router-link>

          </div>
        </div>

      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">
@import '@/assets/scss/main.scss';

.title{
  position: absolute;
  z-index: 2;
  font-size: $text_titile;

  @include phone{
    font-size: 20px;
  }
}
p.content{
  position: absolute;
  z-index: 2;
  font-size: 18px;
  margin-top: 120px;
  text-align: center;
  width: 80%;
  @include pad{
    font-size: 16px;
    padding: 0 50px;
  }
  @include phone{
    font-size: 14px;
  }
}
.article{
  position: relative;
  height: 250px;
  overflow: hidden;
  @include pad{
    height: 200px;
  }
}
p.sub-title{
  padding-left: 10px;
  @include phone{
    font-size: 16px;
  }
}
p.description{
  display: block;
  padding: 0 10px;
  line-height: 1em;
  letter-spacing: 0;
  overflow: hidden;
  @include pad{
    font-size: 14px;
    line-height: 1.3em;
  }
}
button.continue{
  width: 100px;
  height: 30px;
  background-color: $primary;
  margin-left: 10px;
  border: 0px;
  color: #fff;
  @include pad{
    font-size: 14px;
  }
}
.cover-img{
  background-size: cover;
  height: 250px;
  transition: 0.5s;
  cursor: pointer;
  background-position: 50% 0%;
  position: relative;
  top: 0px;
  @include pad{
    height: 200px;
  }
}
.cover-img:hover{
  scale: 1.2;
}
</style>

<script>

export default {
  data () {
    return {
      allarticles: '',
      isLoading: false

    }
  },
  components: {
  },
  inject: ['emitter'],
  methods: {
    getArticles () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/articles`
      this.isLoading = true
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          this.isLoading = false
          this.allarticles = res.data.articles
        }
      }).catch(err => {
        this.$swal({
          icon: 'error',
          title: `${err.data.message}`
        })
      })
    }
  },

  created () {
    this.getArticles()
  }

}
</script>
