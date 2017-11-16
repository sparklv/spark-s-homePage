<template>
  <section :class="{box:showText,box1:!showText}" @click="changePage" @mouseover="modalShow" @mouseout="modalHidden">
    <div v-if="showText" :class="{text:true,animated:showText,flipInX:showText}" key="step1">
        <i :class="[iconfont,icon]"></i>
        <span class="title">{{title}}</span>
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
  props: ["modal", "router", "icon", "title"],
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
  width: 98%;
  height: 100px;
  border: 2px solid rgb(15, 136, 235);
  border-radius: 4px;
  margin-top: 20px;
  cursor: pointer;
  padding: 0;
  background: rgb(15, 136, 235);
}
.box1 {
  width: 100%;
  height: 100px;
  margin-top: 20px;
  cursor: pointer;
  border-radius: 4px;
  padding: 0;
}
.modal {
  background-color: #333;
  color: #fff;
  height: 100px;
  line-height: 100px;
  width: 100%;
  border-radius: 4px;
  vertical-align: middle;
}
i {
  float: left;
  margin-left: 20px;
  line-height: 100px;
  color: #fff;
}
.descript {
  vertical-align: middle;
}
.title{
  font-size:20px;
  line-height:100px;
  color:#fff;
}
@media screen and (max-width: 768px) {
  .box {
    height: 80px;
  }
  .modal {
    height: 80px;
  }
  i {
    line-height: 80px;
  }
  .title{
    line-height:80px;
  }
}
</style>
