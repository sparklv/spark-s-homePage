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
  created() {
    this.getContent();
  },
  mounted() {
    document.documentElement.scrollTop = 0;
  },
  updated() {
    setTimeout(this.$hljs.highlightCode, 0);
    document.documentElement.scrollTop = 0;    
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