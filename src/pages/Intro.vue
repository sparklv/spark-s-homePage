<template>
  <section>
    <canvas id="atom" style="background-color:rgb(247,250,252)"></canvas>
    <div class="title animated bounce">
      吕文彬的个人主页
      <br>
      Welcome to Spark's house !
    </div>
    <div class="bar">
      <IntroBox icon="icon-gerenboke_weiwanshan" title="AboutMe" router="aboutMe" modal="If you wanna know me,click it!"></IntroBox>
      <IntroBox icon="icon-boke-"  title="Blog" router="blogHome" modal="This is my blog,welcome to see it!"></IntroBox>
      <IntroBox icon="icon-github" title="Github" router="https://github.com/SparkLv" modal="If you like,please star!"></IntroBox>
    </div>
    <h4 class="bottom-text">
      联系我，请戳:
      <a href="mailto:sparklv@outlook.com">
        send me an email
        <i class="iconfont icon-youxiang" style="font-size:30px;margin-top:-10px"></i>
      </a>
    </h4>
  </section>
</template>

<script>
import DrawAtom from "@/plugin/atom.js";
import IntroBox from "@/components/IntroBox";
export default {
  name: "Intro",
  data() {
    return {};
  },
  mounted() {
    this.initCanvas();
  },
  components: {
    IntroBox
  },
  methods: {
    initCanvas() {
      var atom = document.getElementById("atom");
      var cheight = document.documentElement.clientHeight - 5;
      var cwidth = document.body.clientWidth;
      atom.setAttribute("width", cwidth);
      atom.setAttribute("height", cheight);
      var obj = new DrawAtom(atom,{pointColor:'#BFEFFF',lineColor:'#BFEFFF'});
      obj.run();
    }
  }
};
</script>


<style scoped lang="scss">
$text-color:rgb(15,136,235);
section {
  text-align: center;
  position: relative;
  background-color: rgb(247,250,252);
}
.title {
  position: absolute;
  width: 100%;
  top: 10%;
  font-size: 40px;
  color:$text-color;
  font-family: "Times New Roman", Times, serif;
}
.bar {
  position: absolute;
  width:20%;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
}
.bottom-text {
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-size: 18px;
}
a {
  color: $text-color;
}
@media screen and (max-width: 768px) {
  .title {
    font-size:25px;
  }
  .bar {
    top:25%;
    width: 80%;
  }
}
</style>
