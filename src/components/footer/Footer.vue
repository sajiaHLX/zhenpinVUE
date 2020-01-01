<template>
  <div>
    <footer class="footer" id="footer">
      <div class="wrap">
        <div class="fLogo tc">
          <div class="banner">
            <a href="#">
              <img src="~assets/img/footertitle.png" alt="">
            </a>
          </div>
        </div>
        <div class="fNav tc">
          <ul>
            <li class="l">
              <a href="#">联系我们</a>
            </li>
            <li>|</li>
            <li class="l">
              <a href="#">订购帮助</a>
            </li>
            <li>|</li>
            <li class="l">
              <a href="#">企业合作</a>
            </li>
            <li>|</li>
            <li class="l">
              <a href="#">生产经营资质</a>
            </li>
            <li>|</li>
            <li class="l">
              <a href="#">公告专区</a>
            </li>
            <li>|</li>
          </ul>
        </div>
        <div class="footInfo tc">
          <div class="footerInfoBl">
            <img src="~assets/img/footer2.gif" alt="" srcset="">
          </div>
          本商店顾客个人信息将不会被泄漏给其他任何机构和个人
          <br>
          本商店logo和图片都已经申请保护，未经授权不得使用
          <br>
          地址：上海市宝山区共康路1018号405室  邮箱：2693043883@qq.com
          <br>
          有任何购物问题请联系我们在线客服 | 电话：
          <br>
          021-65106920 | 工作时间：周一至周日 9:00－22:00
        </div>
      </div>
      <div class="footCopy tc"> </div>
    </footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}

</script>
<style scoped>
  #footer{
    background-color: #333333;
    color: #9a9a9a;
    /* margin-top: 60px; */
    padding-top: 60px;
  }
  footer .wrap .fLogo .banner img{
    width: 60px;
    height: 60px;
  }
  footer .fNav{
    margin: 25px 0;
    color: #9a9a9a;
  }
  footer .fNav a{
    color: #9a9a9a;
  }
  footer .fNav li{
    display: inline-block;
    padding: 0 25px;
    float: none;
    font-size: 14px;
  }
  footer .footInfo{
    line-height: 21px;
    color: #9a9a9a;
    font-size: 12px;
  }
  footer .footCopy{
    border-top: 1px solid #616161;
    margin-top: 15px;
    padding-bottom: 15px;
    font-size: 10px;
    padding-top: 9px;
  }
</style>
