<template>
  <section :class="{animated:true,fadeOut:pageout}">
      <img class="homeme" src="../assets/homeme.jpg" alt="me" width="200" height="200">
      <h1>吕文彬</h1>
      <div style="margin-top:20px;">sparklv@outlook.com</div>
      <h1 class="animated rollIn">Welcome to watch !</h1>
  </section>
</template>

<script>
export default {
  name: "blogHome",
  data() {
    return {
      pageout: false
    };
  },
  mounted() {},
  beforeDestory() {
    this.pageout = true;
  },
  components: {},
  methods: {}
};
</script>


<style scoped>
section {
  position: absolute;
  color: #fff;
  width: 100%;
  height: 100%;
  background-color: #6ca6cd;
  overflow: hidden;
}
@keyframes imgr {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.homeme {
  border-radius: 50%;
  margin-top: 5%;
  animation: imgr 10s infinite;
  animation-timing-function: linear;
}
h1 {
  margin-top: 2%;
  letter-spacing: 4px;
}
</style>