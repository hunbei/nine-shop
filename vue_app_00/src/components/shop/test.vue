<template>
  <div class="main">
  <md-card>
    <md-card-media>
      <!-- swiper -->
      <swiper :options="swiperOption">
        <swiper-slide><img src="../../img/01.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../../img/01.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../../img/01.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../../img/01.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../../img/01.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../../img/01.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../../img/01.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../../img/01.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../../img/01.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../../img/01.jpg" alt=""></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </md-card-media>
  </md-card>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        swiperOption: {
          slidesPerView: 2,
          spaceBetween: 30,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    }
  }
</script>
<style>
  .main{
    height: 500px;
    padding: 100px;
    position: relative;
  }

</style>