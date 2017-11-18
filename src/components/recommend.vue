<template>
    <section @click="gotoPage()">
        <div style="text-overflow:ellipsis;overflow:hidden;white-space: nowrap;">{{content.name}}</div>
        <el-tag type="warning" v-if="showDate">{{content.date}}</el-tag>
    </section>
</template>

<script>
export default {
  name: "recommend",
  data() {
    return {
    };
  },
  props: ["content","showDate"],
  mounted() {},
  methods: {
    gotoPage() {
      let data = JSON.stringify(this.content);
      sessionStorage.setItem("nowContent", data);
      this.$store.commit("changeContent", this.content);
      this.$router.push("blogContent");
    }
  }
};
</script>


<style scoped>
section {
  width:80%;
  margin-left:5%;
  margin-top: 7px;
  cursor: pointer;
  padding: 4px 10px;
  text-align: left;
}
section:hover {
  background-color: #eee; 
  color:#000; 
}
</style>