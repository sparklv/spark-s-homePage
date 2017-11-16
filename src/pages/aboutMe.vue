<template>
  <section id="aboutbox" class="box">
    <div class="nav-bar">
      <el-steps style="width:80%;margin-left:10%" :active="nowPage" finish-status="success" align-center>
        <el-step></el-step>
        <el-step></el-step>
        <el-step></el-step>
        <el-step></el-step>
        <el-step></el-step>
        <el-step></el-step>      
      </el-steps>
    </div>
    <router-view></router-view>
    <img src="http://ozgnrqjtt.bkt.clouddn.com/op_tips.png" alt="" style="position:fixed;bottom:20px;right:20px;">
  </section>
</template>

<script>
export default {
  name: "blogHome",
  data() {
    return {
      nowPage: 1
    };
  },
  mounted() {
    var arr = document.getElementsByClassName("el-step__icon");
    for (let i = 0; i < arr.length; i++) {
      let url = "/about" + (i + 1);
      arr[i].addEventListener("click", () => {
        this.$router.push(url);
        this.nowPage = i + 1;
      });
    }
    var box = document.getElementsByClassName("box");
    var aboutbox = document.getElementById("aboutbox");
    box[0].style.height = window.innerHeight - 2 + "px";
    var that = this;
    window.onkeydown = function(event) {
      if (event.keyCode == 40) {
        if (that.nowPage == 6) {
          that.nowPage = 1;
          that.$router.push("/about" + that.nowPage);
        } else {
          that.nowPage = that.nowPage + 1;
          that.$router.push("/about" + that.nowPage);
        }
      } else if (event.keyCode == 38) {
        if (that.nowPage == 1) {
        } else {
          that.nowPage = that.nowPage - 1;
          that.$router.push("/about" + that.nowPage);
        }
      }
    };
    aboutbox.addEventListener("mousewheel", event => {
      if (event.wheelDelta < 0) {
        if (this.nowPage == 6) {
          this.nowPage = 1;
          this.$router.push("/about" + this.nowPage);
        } else {
          this.nowPage = this.nowPage + 1;
          this.$router.push("/about" + this.nowPage);
        }
      } else {
        if (this.nowPage == 1) {
        } else {
          this.nowPage = this.nowPage - 1;
          this.$router.push("/about" + this.nowPage);
        }
      }
    });
  },
  destroyed() {
    window.onkeydown = null;
  },
  components: {},
  methods: {}
};
</script>


<style scoped>
.box {
  overflow: hidden;
}
.nav-bar {
  position: fixed;
  width: 100%;
  bottom: 10%;
  z-index: 1;
}
</style>