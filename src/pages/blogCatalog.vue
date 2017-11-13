<template>
    <section>
        <div>
            <el-input v-model="searchText" placeholder="搜索文章标题" @input="search" style="width:300px;"></el-input>
        </div>
        <articleBar 
        v-for="item in $store.state.articleList" 
        :content="item" :name="item.name"  
        :descript="item.descript" 
        :key="item.name"
        ></articleBar>
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
  mounted() {},
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
</style>