<template>
  <div>
    <header>
      <div class="headerBox">
        <div class="wrap">
          <!-- logo -->
          <div class="logo l">
            <a href="#">
              <img src="~assets/img/logo.jpg" alt="">
            </a>
          </div>
          <!-- 导航部分 -->
          <div class="nav l">
            <ul>
              <li><a href="/">首页</a></li>
              <li><a href="">产品中心</a></li>
              <li><a href="">套餐组合</a></li>
              <li><a href="/vip">会员中心</a></li>
              <li><a href="">帮助中心</a></li>
              <li><a href="/about">关于我们</a></li>
            </ul>
          </div>
          <!-- 右侧部分 -->
          <div class="buyTools r">
            <ul>
              <li class="mobile">
                <span>移动端</span>
                <div ref="dorpdownLayer" class="dorpdownLayer">
                  <img src="~assets/img/mobile.png" alt="">
                </div>
              </li>
              <li>
                <div class="myFont">
                  我的
                  <img src="~assets/img/xiajiantou.png" class="ci-right" alt="">
                  <div ref="dorpdownLayer" class="dorpdownLayer">
                    <div class="item"><a href="">帮助中心</a></div>
                    <div class="item"><a href="">我的订单</a></div>
                    <div class="item"><a href="">我的收藏</a></div>
                    <div class="item"><a href="">会员中心</a></div>
                  </div>
                </div>
              </li>
              <li><a ref="headerLogin" @click="loginClick" id="headerLogin" href="/login">登录/注册</a>
              </li>
              <li class="shopCar">
                <img src="~assets/img/gouwuchekong.png" alt="">
                <b>0</b>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    loginClick() {
      if(sessionStorage.getItem('logined')){
        sessionStorage.removeItem('logined');
        this.$refs.headerLogin.innerText="登录/注册";
      }
    },
  },
  mounted(){
    if(sessionStorage.getItem('logined')){
      this.$refs.headerLogin.innerText = '退出登录';
    }
  }
}

</script>
<style scoped>
  header{
    height: 80px;
  }
  .headerBox{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 80px;
    z-index: 10;
    background-color: #ffffff;
    box-shadow: 0 2px 2px 0 #ccc;
  }
  .headerBox a{
    color: #684029;
  }
  .logo{
    margin-top: 18px;
    width: 120px;
    height: 44px;
    overflow: hidden;
  }
  .logo img{
    margin-top: 5px;
    width: 120px;
    height: 33.3px;
    /* overflow: hidden; */
  }
  .nav{
    margin-top: 18px;
    margin-left: 30px;
    height: 44px;
    line-height: 44px;
    float: left;
  }
  .nav ul li{
    float: left;
    margin: 0 15px;
    font-size: 14px;
    position: relative;
  }
  .buyTools{
    margin-top: 18px;
    font-size: 14px;
    line-height: 44px;
  }
  .buyTools ul li{
    float: left;
    margin: 0 20px;
    position: relative;
  }
  .dorpdownLayer{
    position: absolute;
    padding: 10px;
    width: 100px;
    background: #ffffff;
    text-align: center;
    box-shadow: 0 0 2px 0 #ccc;
    border: 1px solid #D5BFA7;
    left: -40px;
    display: none;
  }
  .mobile span{
    user-select: none;
  }
  .mobile .dorpdownLayer{
    height: 100px;
  }
  .mobile .dorpdownLayer img{
    height: 100px;
    width: 100px;
  }
  .mobile:hover .dorpdownLayer{
    display: block
  }
  .myFont .dorpdownLayer{
    padding: 13px 0;
    width: 110px;
    border: 1px solid #ccc;
    left: -40px;
    /* display: block; */
  }
  .myFont .dorpdownLayer .item{
    line-height: 25px;
    font-size: 12px;
    text-align: center;
  }
  .myFont img{
    width: 18px;
    height: 18px;
    vertical-align: middle;
  }
  .myFont:hover .dorpdownLayer{
    display: block;
  }
  .shopCar{
    position: relative;
  }
  .shopCar img{
    width: 18px;
    height: 18px;
  }
  .shopCar b{
    position: absolute;
    top: 6px;
    left: 8px;
    width: 14px;
    height: 14px;
    line-height: 14px;
    background-color: #684029;
    color: #fff;
    text-align: center;
    border-radius: 50%;
    font-size: 12px;
  }
  .ci-right{
    transition: transform 100ms;
  }
  .myFont:hover .ci-right{
    transform: rotate(180deg);
  }
</style>
