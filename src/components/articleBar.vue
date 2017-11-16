<template>
    <section :class="{box:true,animated:true,slideInUp:inUp}" @mouseover="mHover" @mouseout="mOut">
        <h2 style="color:rgb(57, 114, 160)">{{name}}</h2>
        <div class="descript">{{descript}}</div>
        <div style="float:left;margin-top:10px;">
          <el-tag>{{content.date}}</el-tag>
        </div>
        <el-button type="primary" style="float:right;margin-right:20px;;margin-bottom:20px;margin-top:5px;" @click="gotoPage()">阅读文章</el-button>
    </section>
</template>

<script>
export default {
  name: "articleBar",
  data() {
    return {
      mhover: false,
      inUp: true
    };
  },
  props: ["name", "descript", "url", "content"],
  mounted() {},
  methods: {
    gotoPage() {
      let data = JSON.stringify(this.content);
      sessionStorage.setItem("nowContent", data);
      this.$router.push("blogContent");
    },
    mHover() {
      this.mhover = true;
      this.inUp = false;
    },
    mOut() {
      this.mhover = false;
    }
  }
};
</script>


<style scoped>
.box {
  width: 80%;
  margin-top: 30px;
  border-radius: 5px;
  border-left: 4px solid rgb(57, 114, 160);
  padding: 10px;
  background-color: #fff;
  overflow: auto;
}
.box:hover {
  transform: translateY(-10px);
  box-shadow: 3px 3px #ccc;
}
.box > h2,
.descript {
  width: 96%;
}
@media screen and (max-width: 768px) {
  .box {
    width: 96%;
  }
}
</style>