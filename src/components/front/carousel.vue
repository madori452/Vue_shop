<template>
    <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-caption mx-auto">
              <h2 class="en-font fs-3-lg fs-4-md">Scented Candle</h2>
              <p class="en-font fs-5-lg fs-6-md mb-0" >-發現生活中的美好-</p>
            </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="2000">
            <img src="@/assets/Index/Carousel/01.png" class="d-lg-block d-none w-100" alt="Carousel01">
            <img src="@/assets/Index/Carousel/01-pd.png" class="d-md-block d-none d-lg-none w-100" alt="Carousel01">
            <img src="@/assets/Index/Carousel/01-mb.png" class="d-sm-block d-md-none w-100" alt="Carousel01">

          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src="@/assets/Index/Carousel/02.png" class="d-lg-block d-none w-100" alt="Carousel02">
            <img src="@/assets/Index/Carousel/02-pd.png" class="d-md-block d-none d-lg-none w-100" alt="Carousel02">
            <img src="@/assets/Index/Carousel/02-mb.png" class="d-sm-block d-md-none w-100" alt="Carousel02">

          </div>

          <div class="carousel-item" data-bs-interval="2000">
            <img src="@/assets/Index/Carousel/03.png" class="d-lg-block d-none w-100" alt="Carousel03">
              <img src="@/assets/Index/Carousel/03-pd.png" class="d-md-block d-none d-lg-none w-100" alt="Carousel03">
            <img src="@/assets/Index/Carousel/03-mb.png" class="d-sm-block d-md-none w-100" alt="Carousel03">

          </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.carousel{
  position: relative;
}
.carousel-caption{
  z-index: 2;
  background-color: #ffffff80;
  width: 30%;
  @include pad{
    width: 60%;
  }
}
.carousel-caption{
  bottom:5.25rem;
}
.carousel-caption h2{
  color: $text_bk;
  @include pad{
  }
}
.carousel-caption p{
  color: $text_bk;
  font-size: 18px;
}
</style>
