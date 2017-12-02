<template>
    <section id="content" class="animated slideInUp" v-loading="loading">
      <div style="margin-top:20px;margin-left:20px;">
        <el-button type="primary" icon="el-icon-back" @click="backToCata()">返回</el-button>        
      </div>
      <div class="markdown" v-html="content"></div>
    </section>
</template>

<script>
export default {
  name: "blogContent",
  data() {
    return {
      content: "",
      loading: true
    };
  },
  created() {
    this.getContent();
  },
  mounted() {
    let header = document.getElementById("header1");
    let headerHeight = header.offsetHeight;
    let aside1 = document.getElementById("aside");
    let aside1Height = aside1.offsetHeight;
    if (document.documentElement.clientWidth < 800) {
      document.documentElement.scrollTop = headerHeight + aside1Height;
    } else {
      document.documentElement.scrollTop = 0;
    }
  },
  updated() {
    setTimeout(this.$hljs.highlightCode, 0);
    let header = document.getElementById("header1");
    let headerHeight = header.offsetHeight;
    let aside1 = document.getElementById("aside");
    let aside1Height = aside1.offsetHeight;
    if (document.documentElement.clientWidth < 800) {
      document.documentElement.scrollTop = headerHeight + aside1Height;
    } else {
      document.documentElement.scrollTop = 0;
    }
  },
  computed: {
    getNow() {
      return this.$store.state.nowContent;
    }
  },
  watch: {
    getNow() {
      this.getContent();
    }
  },
  methods: {
    getContent() {
      this.loading = true;
      let item = JSON.parse(sessionStorage.getItem("nowContent"));
      this.$axios
        .get("../../static/article/" + item.url)
        .then(data => {
          let text = this.$marked(data.data);
          this.content = text;
          this.loading = false;
        })
        .catch(function(err) {
          console.log("error");
        });
    },
    backToCata() {
      this.$router.push("blogCatalog");
    }
  }
};
</script>


<style scoped>
section {
  width: 95%;
  text-align: left;
  background-color: #fff;
  overflow: auto;
}
.markdown {
  padding: 30px;
}
@media screen and (max-width: 768px) {
  section {
    width: 100%;
  }
}
</style>