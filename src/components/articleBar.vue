<template>
    <section :class="{box:true,animated:true,slideInUp:inUp}" @mouseover="mHover" @mouseout="mOut">
        <h2 class="title" @click="gotoPage()">{{name}}</h2>
        <div class="descript">{{descript}}</div>
        <div style="float:left;margin-top:10px;">
          <el-tag>{{content.date}}</el-tag>
        </div>
        <el-button class="into-btn" type="primary"  @click="gotoPage()">阅读文章</el-button>
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
      this.$store.commit("changeContent", this.content);
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


<style scoped lang="scss">
.box {
  width: 90%;
  margin-top: 30px;
  border-radius: 5px;
  border: 1px solid #ccc;
  border-left: 4px solid rgb(57, 114, 160);
  padding: 10px;
  background-color: #fff;
  overflow: hidden;
  .title {
    color: rgb(57, 114, 160);
    width: 96%;
    cursor: pointer;
  }
  .into-btn {
    float: right;
    margin-right: 20px;
    margin-bottom: 20px;
    margin-top: 5px;
  }
}
.box:hover {
  transform: translateX(6px);
  border-left: 4px solid #191970;
  box-shadow: 4px 4px #ccc;
}
.descript {
  width: 96%;
}
@media screen and (max-width: 768px) {
  .box {
    width: 96%;
  }
}
</style>