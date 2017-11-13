<template>
  <section :class="{box:showText,box1:!showText}" @click="changePage" @mouseover="modalShow" @mouseout="modalHidden">
    <div v-if="showText" :class="{text:true,animated:showText,flipInX:showText}" key="step1">
        <i :class="[iconfont,icon]"></i>
    </div>
    <div v-else :class="{modal:true,animated:!showText,flipInX:!showText}" key="step2">
      <div class="descript">
        {{modal}}
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "IntroBox",
  data() {
    return {
      showText: true,
      iconfont: "iconfont"
    };
  },
  props: ["modal", "router", "icon"],
  mounted() {},
  methods: {
    modalShow() {
      this.showText = false;
    },
    modalHidden() {
      this.showText = true;
    },
    changePage() {
      var patt = new RegExp("^[http|https]");
      let router = this.router;
      if (patt.test(router)) {
        window.location.href = "https://github.com/SparkLv";
      } else {
        this.$router.push(this.router);
      }
    }
  }
};
</script>


<style scoped>
.box {
  float: left;
  width: 200px;
  height: 100px;
  border: 2px solid #333;
  border-radius: 4px;
  margin: 20px;
  cursor: pointer;
  padding: 0;
  background: transparent;
}
.box1 {
  float: left;
  width: 200px;
  height: 100px;
  margin: 20px;
  cursor: pointer;
  padding: 0;
}
.modal {
  display: table-cell;
  background-color: #333;
  color:#fff;
  height: 100px;
  width: 200px;
  vertical-align: middle;
}
i {
  line-height: 100px;
}
.descript {
  vertical-align: middle;
}
</style>
