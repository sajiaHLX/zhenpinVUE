<template>
  <div id="app">
    <H eader></H>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from 'components/header/Header'
import Footer from 'components/footer/Footer'
export default {
  components: {
    // Home,
    Footer,
    Header,
  },
  data () {
    return {
    }
  },
  methods: {
  },
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
