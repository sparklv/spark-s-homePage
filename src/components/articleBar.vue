<template>
    <section :class="{box:true,animated:true,slideInUp:inUp}" @mouseover="mHover" @mouseout="mOut">
        <h2>{{name}}</h2>
        <h4>{{descript}}</h4>
        <span style="float:left;"></span>
        <el-button type="primary" style="float:right;margin-right:20px;;margin-bottom:20px;" @click="gotoPage()">阅读文章</el-button>
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
  width: 70%;
  margin-top: 30px;
  border-radius: 5px;
  border-left: 4px solid rgb(57, 114, 160);
  padding-left: 20px;
  background-color: #fff;
}
.box:hover {
  transform: translateY(-10px);
  box-shadow: 3px 3px #ccc;
}
</style>