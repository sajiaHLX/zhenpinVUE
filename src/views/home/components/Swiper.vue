<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="~assets/img/swiper1.jpg" alt="" srcset=""></div>
        <div class="swiper-slide"><img src="~assets/img/swiper2.jpg" alt="" srcset=""></div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper"
import 'assets/css/swiper.min.css'
export default {
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
  },
  mounted() {
    new Swiper ('.swiper-container', {
      loop: true, // 循环模式选项
      autoplay:{
        disableOnInteraction:false
      },
      
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      }
    }) 
  }
}

</script>
<style scoped>
</style>
