<template>
  <section class="animated">
        <h2 style="float:left;margin-left:100px;text-decoration:underline;color:#fff">项目经验 ></h2>
        <div style="margin-top:7%;">
            <div class="pro-img">
            <a  href="#"><img src="../assets/pro1.png" alt="pro1"></a>
            <div class="protext">
                <h4>波导人脸识别项目</h4>
                利用vue-cli工具搭建项目基本结构，网站基本实现自适应问题。
                利用babel、babel-polyfill、postcss实现IE和主流浏览器的兼容。
                制作登陆界面，在前端进行MD5加密（后期升级加密）。以及其他界面的实现
            </div>
        </div>
        <div class="pro-img">
            <a  href="#"><img src="../assets/pro2.png" alt="pro2"></a>
            <div class="protext">
                <h4>清研微视项目</h4>               
                利用vue-cli工具搭建项目基本结构，网站基本实现自适应问题。
                利用babel、babel-polyfill、postcss实现IE和主流浏览器的兼容。
                制作登陆界面，在前端进行MD5加密（后期升级加密）。以及其他界面的实现
            </div>            
        </div>
        <div class="pro-img">
            <a  href="#"><img src="../assets/pro3.png" alt="pro3"></a>
            <div class="protext">
                <h4>TBOX</h4>                               
                利用vue-cli工具搭建项目基本结构，网站基本实现自适应问题。
                利用babel、babel-polyfill、postcss实现IE和主流浏览器的兼容。
                制作登陆界面，在前端进行MD5加密（后期升级加密）。以及其他界面的实现
            </div>
        </div>
        <div class="pro-img">
            <a href="#"><img src="../assets/pro4.png" alt="pro4"></a>
            <div class="protext">
                <h4>易行保项目</h4>                               
                利用vue-cli工具搭建项目基本结构，网站基本实现自适应问题。
                利用babel、babel-polyfill、postcss实现IE和主流浏览器的兼容。
                制作登陆界面，在前端进行MD5加密（后期升级加密）。以及其他界面的实现
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
  background-color: #f08080;
}
.pro-img {
  float: left;
  position: relative;
  width: 40%;
  margin-top: 2%;
  margin-left: 10%;
  text-align: left;
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
  height: 80%;
  top: 0;
  background-color: skyblue;
}
h4 {
  margin: 5px;
}
</style>