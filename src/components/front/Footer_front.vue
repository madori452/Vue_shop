<template>
<div class="footer">
  <div class="container">
    <div class="row">
      <div class="col-lg-6">
        <img src="@/assets/Nav/logo-gy.svg" alt="logo" class="logo img-fluid">
      </div>
      <div class="col-lg-6">
        <div class="row contact">
          <div class="col-lg-4 offset-lg-2">
            <h4 class="en-font">聯絡我們</h4>
            <p>電話：09123335789</p>
          </div>
          <div class="col-lg-3">
            <h4 class="en-font">品牌故事</h4>
            <p>-關於我們</p>
            <p>-隱私權政策</p>
          </div>
           <div class="col-lg-3">
            <h4 class="en-font">購物說明</h4>
            <p>-常見問題</p>
            <p>-常見問題</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>

<div class="copyright">
  <p>© Tracy 2022 All Rights Reserved.<br/>
  僅個人作品練習，無商業用途</p>
</div>
</template>
<script>
export default {

}

</script>

<style scoped lang="scss">
@import "@/assets/scss/main.scss";
  .footer{
    background-image: url('../../assets/Nav/footer.png');
    text-align: center;
    padding: 150px 0 100px 0;
    background-size: cover;
    background-position: 50% 50%;
    color: $primary;
    text-align: left;
    @include phone{
     padding: 50px 20px ;
  }
  }
.copyright{
  padding: 20px 0;
  background-color: $text_bk;
  color: #fff;
  text-align: center;
}
img.logo{
  @include pad{
    width: 240px;
    padding: 10px 0;
  }

}
.contact{
  @include pad{
    margin-top: 16px;
  }
}
h4.en-font{
  @include phone{
   font-size: 18px;
  }
}
p{
  @include phone{
   font-size: 14px;
  }
}

</style>
