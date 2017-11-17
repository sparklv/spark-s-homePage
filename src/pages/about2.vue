<template>
  <section class="animated">
    <h2 style="margin:10px;margin-left:100px;text-decoration:underline;color:#fff">自我介绍 ></h2>
    <div class="img-box0" style="width:100%;text-align:center;">
       <img class="img1" src="http://ozgnrqjtt.bkt.clouddn.com/lifeme.jpg"alt="lifeme">
      <img class="img2" src="http://ozgnrqjtt.bkt.clouddn.com/me2.jpg" alt="me2">
      <img class="img3" src="http://ozgnrqjtt.bkt.clouddn.com/me3.jpg" alt="me3">
      <div style="clear:both;"></div>
    </div>
    <div style="width:100%;text-align:center;margin-top:30px;">
       <div style="display:inline-block">
              <ul class="aboutme0">
                  <li>姓名：吕文彬</li>
                  <li>手机：17612187476</li>
                  <li>学校：安徽大学（211 本科）</li>
                  <li>所在地：上海</li>
                  <li>爱好：篮球、音乐、看书</li>
                  <li>求职意向：前端开发工程师</li>
              </ul>
      </div>
      <div class="img-box">
          <div class="right-text">
              本人从大三开始学习前端，接触后便爱上了这个职业，
              <br>
              有着些许处女座完美主义的我，渴望将最好的网页展现给用户，
              <br>              
              大四毕业通过校招来到上海，四月到十一月全职就职于某公司。
              <br>              
              怎奈公司经营不善，导致裁员。
              <br>                          
              我想说的是，虽然我只有近一年工作经验，
              <br>              
              但是由于在校的学习，以及自己浓厚的兴趣，自己可以胜任这个职位
              <br>
              所以，希望能得到一份能够优雅打代码的工作！
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
  background-color: #63b8ff;
  background-repeat: no-repeat;
  overflow: hidden;
  text-align: left;
}
.img-box {
  display: inline-block;
  margin-left: 10%;
  text-align: left;
}
.right-text {
  color: #fff;
  margin-left: 20px;
  font-size: 18px;
}
ul {
  color: #fff;
  font-size: 18px;
  margin: 0;
}
li {
  margin-top: 2px;
}
a {
  color: #fff;
}
@keyframes buling {
  from {
    opacity: 0.5;
  }
  to {
    opacity: 1;
  }
}
@keyframes buling2 {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.img1 {
  width: 250px;
  height: 250px;
  border: 3px solid #ccc;
  transform: rotate(-20deg);
  animation: buling 1s infinite;
  animation-direction: alternate;
}
.img2 {
  width: 250px;
  height: 250px;
  margin-left: 10%;
  border: 3px solid #ccc;
  transform: rotate(20deg);
  animation: buling 1s infinite;
  animation-direction: alternate;
}
.img3 {
  width: 216px;
  height: 288px;
  margin-left: 10%;
  border: 3px solid #ccc;
  transform: rotate(-10deg);
  animation: buling 1s infinite;
  animation-direction: alternate;
}
@media screen and (max-width: 936px) {
  .right-text {
    display: none;
  }
  .img1 {
    width: 125px;
    height: 125px;
  }
  .img2 {
    width: 125px;
    height: 125px;
  }
  .img3 {
    display: none;
    width: 108px;
    height: 144px;
  }
  .img-box0{
    margin-top:24px;
  }
}
</style>