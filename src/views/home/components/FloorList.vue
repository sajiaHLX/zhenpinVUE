<template>
  <div>
    <div class="floorList">
      <div class="goodsScroll">
        <div class="adHd">
          {{firstName}}
          <span>/</span>
          <span>{{lastNmae}}</span>
        </div>
        <div class="adPic">
          <a href="#">
            <img src="~assets/img/sortad.jpg" alt="" srcset="">
          </a>
        </div>
        <div class="goodlist">
          <ul class="clearfix">
            <li class="goodItem">
              <div class="goodImg">
                <a href="#">
                  <img src="~assets/img/jiu1.jpg" alt="">
                </a>
              </div>
              <div class="goodInfo">
                <h3 class="goodName">
                  <a href="#">普拉迪克桃红葡萄酒PRADIGNAC</a>
                </h3>
                <div class="goodTags">
                  <span>单只装</span>
                </div>
                <div class="goodPrice">
                  <ins>￥84.50</ins>
                  <span>/</span>
                  <del>￥199.00</del>
                  <a href="#" @click.prevent="addCar">加入购物车</a>
                </div>
              </div>
            </li>
            <li class="goodItem">
              <div class="goodImg">
                <a href="#">
                  <img src="~assets/img/jiu2.jpg" alt="">
                </a>
              </div>
              <div class="goodInfo">
                <h3 class="goodName">
                  <a href="#">布兰维尔庄园索拉尔红葡萄酒Domaine de Blanville Solal</a>
                </h3>
                <div class="goodTags">
                  <span>单只装</span>
                </div>
                <div class="goodPrice">
                  <ins>￥84.50</ins>
                  <span>/</span>
                  <del>￥199.00</del>
                  <a href="#" @click.prevent="addCar">加入购物车</a>
                </div>
              </div>
            </li>
            <li class="goodItem">
              <div class="goodImg">
                <a href="#">
                  <img src="~assets/img/jiu3.jpg" alt="">
                </a>
              </div>
              <div class="goodInfo">
                <h3 class="goodName">
                  <a href="#">山间农庄第一河谷红葡萄酒La Ferme du Mont Premiere Cote</a>
                </h3>
                <div class="goodTags">
                  <span>单只装</span>
                </div>
                <div class="goodPrice">
                  <ins>￥84.50</ins>
                  <span>/</span>
                  <del>￥199.00</del>
                  <a href="#" @click.prevent="addCar">加入购物车</a>
                </div>
              </div>
            </li>
            <li class="goodItem">
              <div class="goodImg">
                <a href="#">
                  <img src="~assets/img/jiu4.jpg" alt="">
                </a>
              </div>
              <div class="goodInfo">
                <h3 class="goodName">
                  <a href="#">蒙塔贝特伯爵白葡萄酒COMTE DE MENTAUBERT</a>
                </h3>
                <div class="goodTags">
                  <span>单只装</span>
                </div>
                <div class="goodPrice">
                  <ins>￥84.50</ins>
                  <span>/</span>
                  <del>￥199.00</del>
                  <a href="#" @click.prevent="addCar">加入购物车</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    props: {
      firstName: {
        type: String,
        default: '人气'
      },
      lastNmae:{
        type:String,
        default:'推荐'
      }
    },
    methods: {
      addCar() {
        
      },
    },
  }
</script>
<style scoped>
  .floorList{
    width: 1100px;
    margin: 0 auto;
    margin-bottom: 40px;
  }
  .floorList .adHd{
    margin-bottom: 20px;
    margin-top: 60px;
    line-height: 26px;
    font-size: 26px;
    font-weight: normal;
    color: #724228;
  }
  .floorList .adHd span{
    font-size: 14px;
  }
  .goodlist{
    margin-top: 20px;
  }
  .goodItem{
    float: left;
    width: 263px;
    margin-right: 16px;
  }
  .goodItem:nth-child(4){
    margin-right: 0;
  }
  .goodItem .goodImg img{
    width: 263px;
    height: 263px;
  }
  .goodItem .goodName{
    margin-top: 10px;
    font-size: 16px;
    line-height: 24px;
    height: 45px;
  }
  .goodItem .goodName a{
    color: #724228;
  }
  .goodItem .goodTags{
    line-height: 36px;
    height: 36px;
  }
  .goodItem .goodTags span{
    display: inline-block;
    background-color: #eeeeee;
    opacity: 1;
    border: 1px solid #D5BFA7;
    border-radius: 9px;
    padding: 0 6px 0 8px;
    margin: 8px 3px;
    line-height: 18px;
  }
  .goodItem .goodPrice{
    border-top: 1px dashed #D5BFA7;
    line-height: 27px;
    margin-top: 6px;
    padding-top: 14px;
  }
  .goodItem .goodPrice ins del{
    display: inline-block;
    line-height: 20px;
    color: #D5BFA7;
    font-size: 14px;
    font-weight: normal;
  }
  .goodItem .goodPrice a{
    vertical-align: middle;
    float: right;
    display: inline-block;
    background-color: #643E28;
    line-height: 20px;
    font-size: 12px;
    color: #ffffff;
    padding: 0 10px;
    margin-top: 4px;
  }

</style>