<template>
  <div>
    <div class="container">
      <div class="wrap">
        <div class="loginArticle">
          <div class="loginTitle">
            <h2>登录/注册</h2>
          </div>
          <form class="loginForm" action="" onsubmit="false">
            <div class="phoneNum">
              <input type="text" id="phoneNum" placeholder="手机号">
            </div>
            <span class="errorSpan" id="phoneSpan" style="color: red;"></span>
            <div class="verification">
              <input id="verification" type="text" placeholder="请输入验证码">
              <div  class="getverification">
                <span id="getVerification">发送验证码</span>
              </div>
            </div>
            <span class="errorSpan" id="vSpan" style="color: red;"></span>
            <div class="loginButton">
              <button type="button" id="login">登录</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
$(function(){
  let telCheck = function (num) {  
    let reg = /^1[3456789]\d{9}$/;
    return reg.test(num)
  }
  let vCode = 0;
  let userNumber = 0;
  $("#getVerification").click(function () { 
    userNumber = $("#phoneNum").val() 
    if(telCheck(userNumber)){
      $(".loginForm>span").text("");
      $.ajax({
        type:"GET",
        url:"api/phone/data",
        data:{
          phone : userNumber
        },
        success:function (data) {
          vCode = data.data;
          console.log(vCode);
        }
      })
    }else{
      $("#phoneSpan").text("电话号码错误！");
    }
  })
  $('#login').click(function(){
    let phoneNum = $("#phoneNum").val()
    let verification=$("#verification").val();
    if(telCheck(phoneNum) && phoneNum == userNumber && verification == vCode){
      $("#vSpan").text("");
      $.ajax({
        url:'api/phone/check',
        method:'GET',
        data:{
          phoneNum,
          verification
        },
        success:function(data){
          sessionStorage.setItem('logined','true');
          $(location).attr("href",'/');
        }
      })
    }else{
      $("#vSpan").text("验证码错误！");
    }
  })
})
export default {
  data () {
    return {
    }
  },
  methods: {
    
  },
}

</script>
<style scoped>
  .container{
    background: url(~assets/img/loginbg.jpg) no-repeat 50% 50%;
    width: 100%;
    height: 540px;
    padding-top: 60px;
  }
  .loginArticle{
    padding: 0 20px;
    float: right;
    width: 375px;
    border: 1px solid #e9e9e9;
    background-color: #ffffff;
  }
  .loginArticle .loginTitle{
    margin-top: 30px;
    line-height: 64px;
    font-size: 16px;
    /* color: #c6c6c6; */
    border-bottom: #a5a2a2 1px solid;
    text-align: center;
    cursor: pointer;
  }
  .loginArticle .loginForm{
    display: flex;
    width: 100%;
    /* padding: 0 20px; */
    flex-direction: column;
  }
  .loginArticle .phoneNum{
    border: solid 1px #a5a2a2;
    margin-top: 20px;
  }
  .loginArticle .verification{
    border: solid 1px #a5a2a2;
    margin: 20px 0;
    position: relative;
  }
  .verification .getverification{
    position: absolute;
    text-align: center;
    height: 80%;
    bottom: 4px;
    right: 20px;
    border-left: 2px solid #a5a2a2;
    padding-left: 15px;
    display: table-cell;
  }
  .getverification span{
    font-size: 16px;
    font-weight: bold;
    height: 38px;
    line-height:38px;
    user-select: none;
    cursor: pointer;
  }
  .loginForm input{
    height: 48px;
    padding: 0 8px;
    width: 100%;
  }
  .loginForm .loginButton{
    margin: 20px 0 30px;
  }
  .loginForm .loginButton button{
    font-size: 16px;
    width: 100%;
    height: 44px;
    border: none;
    color: #ffffff;
    background-color: #000000;
  }
  .errorSpan{
    position: relative;
    height: 19px;
    text-align: left;
  }
</style>
