<template>
  <section class="animated">
        <h2 style="float:left;margin-left:100px;text-decoration:underline;color:#fff">项目经验 ></h2>
        <div style="margin-top:7%;">
          <div class="pro-img">
            <a  href="#"><img src="http://ozgnrqjtt.bkt.clouddn.com/pro1.png" alt="pro1"></a>
            <div class="protext">
                <h4>波导人脸识别项目</h4>
                使用vue2.0,elementUI,vuex,vuerouter,axios等进行SPA开发，在项目中使用vue-cli工具搭建项目基本框架，
                完成公共界面的开发，解决网站基本实现自适应问题。
                利用babel、babel-polyfill、postcss实现IE和主流浏览器的兼容。
                制作登陆界面。
            </div>
          </div>
        <div class="pro-img">
            <a  href="#"><img src="http://ozgnrqjtt.bkt.clouddn.com/pro2.png" alt="pro2"></a>
            <div class="protext">
                <h4>清研微视项目</h4>               
                利用vue2.0、Bootstrap、jquery、echarts等技术来开发、利用H5完成告警权限界面的拖拽功能，
                实现弹窗完成表单弹窗的验证、穿梭功能。利用高德地图api完成线路规划界面，为用户规划线路。
                与后端进行数据交互，展示车辆行驶中的危险行为证据（包括图片和视频）
            </div>            
        </div>
        <div class="pro-img">
            <a  href="#"><img src="http://ozgnrqjtt.bkt.clouddn.com/pro3.png" alt="pro3"></a>
            <div class="protext">
                <h4>TBOX</h4>                               
                将登陆模块分为管理员和个人用户登陆，克服了多浏览器和网站记住密码的冲突问题。
                并利用echarts中的仪表盘展示后端传递的数据。
            </div>
        </div>
        <div class="pro-img">
            <a href="#"><img src="http://ozgnrqjtt.bkt.clouddn.com/pro4.png" alt="pro4"></a>
            <div class="protext">
                <h4>波导管理后台项目</h4>                               
                使用vue2.0作为开发框架，elementUI作为UI框架进行开发，axios作为ajax工具、完成系统管理界面的功能实现。
                包括表格操作、列表树，与UI进行对接，对elementUI框架进行部分修改，使其符合本公司的UI标准。并在开发后期。
            </div>                   
        </div>
        </div>
  </section>
</template>

<script>
export default {
  name: "blogHome",
  data() {
    return {};
  },
  mounted() {},
  components: {},
  methods: {}
};
</script>


<style scoped>
section {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #96cdcd;
}
@keyframes show1 {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.pro-img {
  float: left;
  position: relative;
  width: 40%;
  margin-top: 2%;
  margin-left: 10%;
  text-align: left;
  opacity: 0;
}
.pro-img:nth-child(1) {
  animation: show1 1s;
  animation-fill-mode: forwards;
}
.pro-img:nth-child(2) {
  animation: show1 1s;
  animation-fill-mode: forwards;
  animation-delay: 1s;
}
.pro-img:nth-child(3) {
  animation: show1 1s;
  animation-fill-mode: forwards;
  animation-delay: 2s;
}
.pro-img:nth-child(4) {
  animation: show1 1s;
  animation-fill-mode: forwards;
  animation-delay: 3s;
}
img {
  border-radius: 50%;
  width: 200px;
  height: 200px;
}
.protext {
  position: absolute;
  margin-left: 220px;
  width: 50%;
  height: 95%;
  top: 0;
  padding: 5px;
  color: #333;
  /* background-color: #CD9B1D; */
}
h4 {
  margin: 5px;
}
</style>