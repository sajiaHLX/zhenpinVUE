<template>
  <div>
    <div ref="toast" id="toast">请先登录</div>
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
                <span id="getVerification" @click="getVerification">发送验证码</span>
              </div>
            </div>
            <span class="errorSpan" id="vSpan" style="color: red;"></span>
            <div class="loginButton">
              <button type="button" id="login" @click="login">登录</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import $ from 'jquery';
import {mapMutations} from 'vuex';
export default {
  data () {
    return {
      userNumber:0,
      vCode:0,
      a:123
    }
  },
  methods: {
    ...mapMutations([
      'SET_LOGIN',
      'SET_SHOWTOAST'
    ]),
    telCheck(num){
      let reg = /^1[3456789]\d{9}$/;
      return reg.test(num)
    },
    getVerification(){
      this.userNumber = $("#phoneNum").val() 
      if(this.telCheck(this.userNumber)){
        $(".loginForm>span").text("");
        axios({
          type:"GET",
          url:"/api/phone/data?phone="+this.userNumber,
        }).then((data)=>{
          this.vCode = data.data.data;
          console.log(this.vCode);
        })
      }else{
        $("#phoneSpan").text("电话号码错误！");
      }
    },
    login(){
      // debugger;
      let phoneNum = $("#phoneNum").val()
      let verification=$("#verification").val();
      if(this.telCheck(phoneNum) && phoneNum == this.userNumber && verification == this.vCode){
        $("#vSpan").text("");
        axios({
          url:'api/phone/check?phoneNum='+phoneNum+'&verification='+verification,
          method:'GET',
        }).then((data)=>{
          this.SET_LOGIN({val:true});
          $(location).attr("href",'/');
        })
      }else{
        $("#vSpan").text("验证码错误！");
      }
    }
  },
  mounted () {
    if(this.$store.state.showToast){
      this.$refs.toast.className='toast';
      setTimeout(()=>{
        this.$refs.toast.className='';
        this.SET_SHOWTOAST(false);
      },3000);
    }
  }
}

</script>
<style scoped>
  #toast{
    position: fixed;
    width: 200px;
    height: 100px;
    color: #ffffff;
    line-height: 100px;
    background: #2c3e50;
    border-radius: 15px;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    opacity: 0;
  }
  .toast{
    animation: showtoast 3s linear;
  }
  @keyframes showtoast{
    0%{
      opacity: 0;
    }
    25%{
      opacity: 1;
    }
    75%{
      opacity: 1;
    }
    100%{
      opacity: 0;
    }
  }
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
