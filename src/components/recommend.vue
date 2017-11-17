<template>
    <section>
        <div @click="gotoPage()">{{content.name}}</div>
    </section>
</template>

<script>
export default {
  name: "recommend",
  data() {
    return {};
  },
  props: ["content"],
  mounted() {},
  methods: {
    gotoPage() {
      let data = JSON.stringify(this.content);
      sessionStorage.setItem("nowContent", data);
      this.$router.push("blogContent");
    }
  }
};
</script>


<style scoped>
section {
  margin-top: 7px;
  cursor: pointer;
}
</style>