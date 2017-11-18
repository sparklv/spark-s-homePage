<template>
    <section>
        <div style="position:relative;width:80%">
            <h2>搜索文章</h2>
            <el-input suffix-icon="el-icon-search" v-model="searchText" placeholder="搜索文章标题" @input="search" style="width:250px;"></el-input>
            <div :class="{animated:$store.state.sport,bounceInRight:$store.state.sport}" style="margin-top:10px;">该目录下共有<el-tag>{{$store.state.articleList.length}}</el-tag>篇文章</div>
            <div class="aboutme">
              <el-collapse>
                <el-collapse-item title="关于我 AboutMe" name="1">
                  <div>吕文彬，90后前端开发工程师</div>
                    <div>现居 中国 上海</div>
                    <div>这里是我学习积累的地方，如果有兴趣和我交流的话，可以联系我哦！</div>
                </el-collapse-item>
              </el-collapse>
            </div>
        </div>
        <div v-if="$store.state.articleList.length">
          <articleBar 
        v-for="item in $store.state.articleList" 
        :content="item" :name="item.name"  
        :descript="item.descript" 
        :key="item.name"
        ></articleBar>
        </div>
        <div v-else>
          <h3>暂时没有文章哦！看看其他目录吧！</h3>
        </div>
    </section>
</template>

<script>
import articleBar from "@/components/articleBar";
export default {
  name: "blogContent",
  data() {
    return {
      searchText: ""
    };
  },
  components: {
    articleBar
  },
  mounted() {
    document.documentElement.scrollTop = 0;
  },
  updated() {
    document.documentElement.scrollTop = 0;
  },
  methods: {
    search() {
      let articleList = JSON.parse(sessionStorage.getItem("nowArr"));
      let text = this.searchText;
      let exp = new RegExp(text, "gi");
      let arr = [];
      if (text) {
        for (let i = 0; i < articleList.length; i++) {
          if (exp.test(articleList[i].name)) {
            arr.push(articleList[i]);
          }
        }
      } else {
        arr = articleList;
      }
      this.$store.commit("changeList", arr);
    }
  }
};
</script>


<style scoped>
section {
  text-align: left;
  overflow: hidden;
}
.aboutme {
  width: 50%;
  padding: 10px;
  position: absolute;
  right: 0;
  top: 0;
}
@media screen and (max-width: 1034px) {
  .aboutme {
    position: relative;
    width: 120%;
    padding: 10px;
    padding-left: 0;
  }
}
</style>