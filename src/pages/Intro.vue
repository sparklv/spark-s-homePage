<template>
  <section>
    <canvas id="atom" style="background-color:skyblue"></canvas>
    <div class="title animated bounce">Welcome to Spark's house !</div>
    <div class="bar">
      <IntroBox icon="icon-gerenboke_weiwanshan" router="aboutMe" modal="If you wanna know me,click it!"></IntroBox>
      <IntroBox icon="icon-boke-"  router="blogHome" modal="This is my blog,welcome to see it!"></IntroBox>
      <IntroBox icon="icon-github" router="https://github.com/SparkLv" modal="If you like,please star!"></IntroBox>
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
    console.log(this.$store.state);
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
      var obj = new DrawAtom(atom);
      obj.run();
    }
  }
};
</script>


<style scoped>
section {
  text-align: center;
  position: relative;
  background-color: skyblue;
}
.title {
  position: absolute;
  width: 100%;
  top: 140px;
  font-size: 40px;
  font-family: "Times New Roman", Times, serif;
}
.bar {
  position: absolute;
  top: 300px;
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
  color: #333;
}
</style>
