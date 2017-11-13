<template>
  <el-container>
    <el-header>
      <h1 style="color:#fff">
        Spark's Blog!
      </h1>
    </el-header>
    <el-container>
      <el-aside width="240px">
        <div style="color:#fff;padding:20px 0;font-size:20px;">
          文章分类
          <br>
          Catalog
        </div>
        <el-menu background-color="transparent" text-color="#fff" style="width:100%">
       <el-menu-item index="1" @click="filterCatalog($event)">
        <span slot="title">All</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <span>Front-end</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1" @click="filterCatalog($event)">HTML</el-menu-item>
          <el-menu-item index="2-2" @click="filterCatalog($event)">CSS</el-menu-item>
          <el-menu-item index="2-3" @click="filterCatalog($event)">JavaScript</el-menu-item>
          <el-menu-item index="2-4" @click="filterCatalog($event)">Framework</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="3" @click="filterCatalog($event)">
        <span slot="title">Computer</span>
      </el-menu-item>
      <el-menu-item index="4" @click="filterCatalog($event)">
        <span slot="title">Others</span>
      </el-menu-item>
    </el-menu>
    </el-aside>
      <el-container>
      <el-main>
        <router-view/>
      </el-main>
      </el-container>
    </el-container>
    <el-footer>Footer</el-footer>    
</el-container>
</template>

<script>
import articleList from "@/assets/article.json";
import articleBar from "@/components/articleBar";
export default {
  name: "blogHome",
  data() {
    return {
      showList: []
    };
  },
  created() {
    this.showList = JSON.parse(JSON.stringify(articleList));
    this.$store.commit("changeList", this.showList);
  },
  mounted() {
    window.addEventListener("resize", this.initWidth);
    this.initWidth();
  },
  components: {
    articleBar
  },
  methods: {
    initWidth() {
      // setTimeout(function() {
      //   let asideHeight = window.innerHeight - 73 + "px";
      //   let aside = document.getElementsByClassName("el-aside");
      //   aside[0].style.height = asideHeight;
      // }, 0);
    },
    filterCatalog(event) {
      let string = event.$el.innerText;
      let arr = [];
      if (string !== "All") {
        for (let i = 0; i < articleList.length; i++) {
          if (articleList[i].type == string) {
            arr.push(articleList[i]);
          }
        }
      } else {
        arr = articleList;
      }
      let arrString = JSON.stringify(arr);
      sessionStorage.setItem("nowArr", arrString);
      this.$store.commit("changeList", arr);
      this.$router.push("blogCatalog");
    }
  }
};
</script>


<style scoped>
.el-header {
  /* position: fixed; */
  background-color: #417eb7;
  color: #333;
  text-align: center;
  line-height: 70px;
  height: 200px !important;
  width: 100%;
  z-index: 1;
  background: url("../assets/title-background.jpg") no-repeat 100% 100%;
}
.el-footer {
  background-color: #1297d7;
  color: #333;
  text-align: center;
  line-height: 60px;
  margin-top: 50px;
}
.el-aside {
  margin-top: 20px;
  margin-left: 200px;
  text-align: center;
  color: white;
  min-width: 200px;
  min-height: 400px;
  max-height: 600px;
  overflow: hidden;
  background: -webkit-linear-gradient(
    bottom,
    rgb(18, 151, 215),
    rgb(34, 143, 204) 30%,
    rgb(65, 126, 183) 50%,
    rgb(10, 53, 137) 100%
  );
  /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(
    top,
    rgb(18, 151, 215),
    rgb(34, 143, 204) 30%,
    rgb(65, 126, 183) 50%,
    rgb(10, 53, 137) 100%
  );
  /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(
    top,
    rgb(18, 151, 215),
    rgb(34, 143, 204) 30%,
    rgb(65, 126, 183) 50%,
    rgb(10, 53, 137) 100%
  );
  /* Firefox 3.6 - 15 */
  background: linear-gradient(
    to top,
    rgb(18, 151, 215),
    rgb(34, 143, 204) 30%,
    rgb(65, 126, 183) 50%,
    rgb(10, 53, 137) 100%
  );
}

.el-main {
  margin-top: 20px;
  margin-left: 50px;
  overflow: auto;
  color: #333;
  text-align: left;
  padding: 0;
}
</style>
