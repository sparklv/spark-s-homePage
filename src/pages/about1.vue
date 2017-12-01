<template>
  <section :class="{animated:true,fadeOut:pageout}">
      <el-button class="back-btn" @click="backToHome()" icon="el-icon-back" type="info" style="position:absolute;left:20px;top:20px;">Back to Home!</el-button>
      <img class="homeme" src="http://ozgnrqjtt.bkt.clouddn.com/homeme.jpg" alt="me" width="200" height="200">
      <h1>吕文彬</h1>
      <div style="margin-top:20px;">sparklv@outlook.com</div>
      <h1 class="animated fadeInUp">Welcome to watch !</h1>
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
  methods: {
    backToHome() {
      this.$router.push("/Intro");
    }
  }
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
@media screen and (max-width: 798px) {
  .back-btn {
    display: none;
  }
}
</style>