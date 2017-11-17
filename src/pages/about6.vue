<template>
  <section>
      <div class="animated tada" style="margin-top:10%;">
        <h1>了解更多？</h1> 
        <div>
          <a href="http://ozgnrqjtt.bkt.clouddn.com/%E5%90%95%E6%96%87%E5%BD%AC-%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88-1%E5%B9%B4.pdf" download="吕文彬-前端开发工程师-1年.pdf">
            <i class="iconfont icon-xiazai" style="font-size:40px;"></i>
            下载简历            
          </a>
          <a href="https://weibo.com/u/3845909848" style="margin-left:15%;">
            <i class="iconfont icon-weibo" style="font-size:40px;"></i>
            微博关注我            
          </a>
        </div>
        <div style="margin-top:30px;">
          <a href="https://sparklv.github.io">
            <i class="iconfont icon-home" style="font-size:40px;"></i>
            个人主页
          </a>
        </div>
        <div style="margin-top:30px;">
          <a href="https://github.com/SparkLv">
            <i class="iconfont icon-github1" style="font-size:40px;"></i>
            github            
          </a>
          <a href="mailto:sparklv@outlook.com" style="margin-left:15%;">
            <i class="iconfont icon-youjian" style="font-size:40px;"></i>
            发邮件给我             
          </a>
        </div>
      </div>                          
  </section>
</template>

<script>
export default {
  name: "blogHome",
  data() {
    return {};
  },
  mounted() {},
  components: {},
  methods: {}
};
</script>


<style scoped>
section {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #cdad00;
  overflow: hidden;
}
@keyframes imove {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
a {
  text-decoration: none;
  color: #000;
}
</style>