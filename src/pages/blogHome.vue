<template>
  <div class="container1">
    <div class="header1">
      <h1 style="color:#ccc">
        吕文彬的个人博客
        <br>
        Spark's Blog!
      </h1>
      <div style="color:#ccc;float:left;margin-left:1%;">
        <div style="font-size:16px;word-spacing:10px;">
          ContactMe:
          <a href="#">
            <i class="iconfont icon-weixin" style="color:#ccc;font-size:30px;" @click="dialogVisible = true"></i>            
          </a>
          <a href="https://weibo.com/u/3845909848">
            <i class="iconfont icon-weibo" style="color:#ccc;font-size:30px;"></i>            
          </a>
          <a href="https://github.com/SparkLv">
            <i class="iconfont icon-github1" style="color:#ccc;font-size:30px;"></i>            
          </a>
          <a href="mailto:sparklv@outlook.com">
            <i class="iconfont icon-youjian" style="color:#ccc;font-size:30px;"></i>             
          </a>
        </div>                       
      </div>
      <div class="today" style="color:#ccc;float:right;margin-right:1%;">
        今天是{{today.year}}年{{today.month}}月{{today.day}}日 {{today.week}}
      </div>
    </div>
    <div class="container2">
      <el-dialog :visible.sync="dialogVisible">
        <img class="wechat" src="http://ozgnrqjtt.bkt.clouddn.com/wechat.jpg" alt="wechat">
        <div>awesomebin</div>
    </el-dialog>
      <div class="aside1" id="aside">
        <div style="color:#fff;padding:20px 0;font-size:20px;border-bottom:0.5px solid #ccc">
          文章分类
          <br>
          Catalog
        </div>
        <el-menu background-color="transparent" active-text-color="#FFA500" text-color="#fff" style="width:100%">
       <el-menu-item index="1" @click="filterCatalog($event)">
        <i class="iconfont icon-quanbu"></i>
        <span slot="title">All</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="iconfont icon-qianduankuangjia"></i>          
          <span>Front-End</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1" @click="filterCatalog($event)">
            <i class="iconfont icon-html"></i>                      
            <span>HTML</span>
            </el-menu-item>
          <el-menu-item index="2-2" @click="filterCatalog($event)">
            <i class="iconfont icon-socialcss3outline" style="font-size:24px;"></i>                                  
            <span>CSS</span>
          </el-menu-item>
          <el-menu-item index="2-3" @click="filterCatalog($event)">
            <i class="iconfont icon-javascript"></i>
            <span>JavaScript</span>
          </el-menu-item>
          <el-menu-item index="2-4" @click="filterCatalog($event)">
            <i class="iconfont icon-qianduankuangjia1"></i>                                  
            Framework
          </el-menu-item>          
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="3" @click="filterCatalog($event)">
        <i class="iconfont icon-others"></i>                              
        <span slot="title">Others</span>
      </el-menu-item>
      <el-menu-item index="4" @click="filterCatalog($event)">
        <i class="iconfont icon-suibiankankan"></i>                              
        <span slot="title">Free</span>
      </el-menu-item>
    </el-menu>
    <!-- <div style="margin-top:30px;padding-top:20px;border-top:0.5px solid #ccc">
      推荐文章
      <recommend v-for="item in recommendList" :content="item" :key="item.name"></recommend>
    </div> -->
    </div>
      <div class="container3">
      <div class="main1">
        <router-view/>
        <i :class="{iconfont:true,'icon-arrow-circle-o-top':true,animated:true,fadeOut:!topshow,fadeIn:topshow}" @click="toTop()"></i>
      </div>
      </div>
      <div id="aside2" class="aside2"> 
        <div class="recommend">
          <h3 style="margin:10px">推荐文章</h3>
           <recommend v-for="item in recommendList" :showDate=false :content="item" :key="item.name"></recommend>
        </div>
         <div class="recommend">
          <h3 style="margin:10px">最新文章</h3>          
           <recommend v-for="item in recentList" :showDate=true :content="item" :key="item.name"></recommend>
        </div>
      </div>
    </div>
    <div class="footer1">
       <h4>快速链接</h4>
      <div class="footer-link">
        <div style="margin-top:10px;">
          <div style="margin-top:10px;">
            <a href="https://cn.vuejs.org/">vue2.0</a>
          </div>
          <div style="margin-top:10px;">
            <a href="https://doc.react-china.org/">React</a>
          </div>
          <div style="margin-top:10px;">
            <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript">JavaScript</a>
          </div>
          <div style="margin-top:10px;">
            <a href="http://es6.ruanyifeng.com/">ES6教程</a>
          </div>
        </div>
        <div style="margin-top:10px;">
          <div style="margin-top:10px;">
            <a href="http://element-cn.eleme.io/#/zh-CN">ElementUI</a>
          </div>
          <div style="margin-top:10px;">
            <a href="https://www.sass.hk/">Sass</a>
          </div>
          <div style="margin-top:10px;">
            <a href="http://www.bootcss.com/">Bootstrap</a>
          </div>
          <div style="margin-top:10px;">
            <a href="http://jquery.com/">Jquery</a>
          </div>
        </div>
        <div style="margin-top:10px;">
          <div style="margin-top:10px;">
            <a href="http://caibaojian.com/fedbook/">前端开发者手册</a>
          </div>
          <div style="margin-top:10px;">
            <a href="http://caibaojian.com/a-programmer/">程序员自我学习</a>
          </div>
        </div>
        <div style="margin-right:60px;margin-top:10px;">
          <div style="margin-top:10px;">
            <a href="https://sparklv.github.io">我的主页</a>
          </div>
          <div style="margin-top:10px;">
            <a href="https://sparklv.github.io/#/aboutMe">个人简介</a>
          </div>
          <div style="margin-top:10px;">
            <a href="https://sparklv.github.io/#/blogCatalog">我的博客</a>
          </div>
          <div style="margin-top:10px;">
            <a href="https://github.com/SparkLv">github</a>
          </div>
        </div>
      </div>
      <div style="width:100%;text-align:center;margin-top:30px;">
        <span>本站原创内容转载请注明来源,如有问题请发邮件：<a href="mailto:parklv@outlook.com">sparklv@outlook.com</a></span>        
      </div>
    </div>
</div>
</template>

<script>
import articleList from "@/assets/article.json";
import articleBar from "@/components/articleBar";
import recommendList from "@/assets/recommend.json";
import recommend from "@/components/recommend";
export default {
  name: "blogHome",
  data() {
    return {
      showList: [],
      topshow: false,
      today: {},
      dialogVisible: false,
      recommendList,
      recentList: []
    };
  },
  created() {
    this.showList = JSON.parse(JSON.stringify(articleList));
    this.showList.sort(function(a, b) {
      let aArr = a.date.split("-");
      let bArr = b.date.split("-");
      let aNum = aArr[0] * 365 + aArr[1] * 31 + aArr[2];
      let bNum = bArr[0] * 365 + bArr[1] * 31 + bArr[2];
      return bNum - aNum;
    });
    this.$store.commit("changeList", this.showList);
    sessionStorage.setItem("nowArr", JSON.stringify(this.showList));
    this.recentList = this.showList.splice(0, 5);
  },
  mounted() {
    let aside = document.getElementById("aside");
    let aside2 = document.getElementById("aside2");
    window.addEventListener("scroll", e => {
      if (document.documentElement.scrollTop > 220) {
        if (window.innerWidth > 800) {
          if (
            document.documentElement.scrollHeight - 900 >
            document.documentElement.scrollTop
          ) {
            aside.style.marginTop =
              document.documentElement.scrollTop - 200 + "px";
            aside2.style.marginTop =
              document.documentElement.scrollTop - 200 + "px";
          }
        }
        this.topshow = true;
      } else {
        aside.style.marginTop = 20 + "px";
        aside2.style.marginTop = 20 + "px";
        this.topshow = false;
      }
    });
    let now = new Date();
    let month = now.getMonth() + 1,
      year = now.getFullYear(),
      day = now.getDate(),
      week = now.getDay();
    switch (week) {
      case 0:
        week = "星期日";
        break;
      case 1:
        week = "星期一";
        break;
      case 2:
        week = "星期二";
        break;
      case 3:
        week = "星期三";
        break;
      case 4:
        week = "星期四";
        break;
      case 5:
        week = "星期五";
        break;
      case 6:
        week = "星期六";
        break;
    }
    this.today = {
      year,
      month,
      day,
      week
    };
  },
  components: {
    articleBar,
    recommend
  },
  methods: {
    filterCatalog(event) {
      let string = event.$el.innerText.trim();
      let arr = [];
      if (string !== "All") {
        for (let i = 0; i < articleList.length; i++) {
          if (articleList[i].type == string) {
            arr.push(articleList[i]);
          }
        }
      } else {
        arr = articleList;
      }
      arr.sort(function(a, b) {
        let aArr = a.date.split("-");
        let bArr = b.date.split("-");
        let aNum = aArr[0] * 365 + aArr[1] * 31 + aArr[2];
        let bNum = bArr[0] * 365 + bArr[1] * 31 + bArr[2];
        return bNum - aNum;
      });
      let arrString = JSON.stringify(arr);
      sessionStorage.setItem("nowArr", arrString);
      this.$store.commit("changeList", arr);
      this.$store.commit("changeSport", false);
      setTimeout(() => {
        this.$store.commit("changeSport", true);
      }, 100);
      this.$router.push("blogCatalog");
    },
    toTop() {
      let height = document.documentElement.scrollTop;
      let ave = Math.floor(height / 20);
      for (let i = 0; i <= 21; i++) {
        setTimeout(() => {
          if (i < 21) {
            document.documentElement.scrollTop = height - i * ave;
          } else {
            document.documentElement.scrollTop = 0;
          }
        }, i * 40);
      }
    }
  }
};
</script>


<style scoped>
a {
  text-decoration: none;
  color: #fff;
}
.container1 {
  display: flex;
  flex-direction: column;
}
.container2 {
  display: flex;
  flex-direction: row;
}
.header1 {
  background-color: #417eb7;
  color: #333;
  text-align: center;
  line-height: 45px;
  height: 220px !important;
  width: 100%;
  z-index: 1;
  background: url("http://ozgnrqjtt.bkt.clouddn.com/4bc967a17c8c2e865efc1d8ad96cf1e1.jpg")
    no-repeat 50% 50%;
}
.footer1 {
  background-color: #333;
  color: #fff;
  text-align: left;
  margin-top: 50px;
}
.aside1 {
  width: 240px;
  margin-top: 20px;
  margin-left: 5%;
  text-align: center;
  color: white;
  min-width: 200px;
  min-height: 400px;
  max-height: 600px;
  overflow: hidden;
  background: -webkit-linear-gradient(
    bottom,
    rgb(18, 151, 215),
    rgb(34, 143, 204) 30%,
    rgb(65, 126, 183) 50%,
    rgb(10, 53, 137) 100%
  );
  /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(
    top,
    rgb(18, 151, 215),
    rgb(34, 143, 204) 30%,
    rgb(65, 126, 183) 50%,
    rgb(10, 53, 137) 100%
  );
  /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(
    top,
    rgb(18, 151, 215),
    rgb(34, 143, 204) 30%,
    rgb(65, 126, 183) 50%,
    rgb(10, 53, 137) 100%
  );
  /* Firefox 3.6 - 15 */
  background: linear-gradient(
    to top,
    rgb(18, 151, 215),
    rgb(34, 143, 204) 30%,
    rgb(65, 126, 183) 50%,
    rgb(10, 53, 137) 100%
  );
}
.aside2 {
  width: 230px;
  margin-top: 20px;
  margin-right: 2%;
  text-align: left;
  color: white;
  min-width: 200px;
  min-height: 400px;
  max-height: 600px;
  overflow: hidden;
  background: rgb(34, 83, 156);
}
.main1 {
  margin-top: 20px;
  margin-left: 3%;
  width: 100%;
  overflow: visible;
  color: #333;
  text-align: left;
  padding: 0;
}
.container3 {
  flex: 1;
}
.icon-arrow-circle-o-top {
  position: fixed;
  bottom: 60px;
  right: 10px;
  cursor: pointer;
}
.icon-arrow-circle-o-top:hover {
  color: #417eb7;
}
ul,
li {
  list-style: none;
  text-align: center;
}
.wechat {
  width: 40%;
  height: 40%;
}
.footer-link {
  margin-left: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.aside1 i {
  font-size: 20px;
  color: #fff;
}
.aside1 .el-menu-item.is-active i {
  color: #ffa500;
}
@media screen and (max-width: 768px) {
  .container2 {
    flex-direction: column-reverse;
  }
  .aside1 {
    width: 80% !important;
  }
  .main1 {
    width: 96%;
    margin-left: 2%;
  }
  .header1 {
    line-height: 40px;
  }
  h1 {
    font-size: 20px;
  }
  .wechat {
    width: 80%;
    height: 80%;
  }
  .footer-link {
    margin-left: 0px;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
