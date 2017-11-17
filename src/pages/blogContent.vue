<template>
    <section class="animated slideInUp" v-loading="loading">
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
  beforeRouteUpdate(to, from, next) {
    next(() => {
      console.log("zzz");
    });
  },
  created() {
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
  mounted() {},
  updated() {
    setTimeout(this.$hljs.highlightCode, 0);
  },
  methods: {}
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
  section{
    width:100%;
  }
}
</style>