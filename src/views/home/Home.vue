<template>
  <div>
    <section>
      <Swiper></Swiper>
      <Sort></Sort>
      <FloorList></FloorList>
      <FloorList2></FloorList2>
    </section>
  </div>
</template>

<script>
import Swiper from './components/Swiper'
import Sort from './components/Sort'
import FloorList from './components/FloorList'
import FloorList2 from './components/FloorList2'
export default {
  components: {
    Swiper,
    Sort,
    FloorList,
    FloorList2
  },
  data () {
    return {
    }
  },
  computed: {
  },
  mounted() {
    
  }
}

</script>
<style scoped>
  
</style>
