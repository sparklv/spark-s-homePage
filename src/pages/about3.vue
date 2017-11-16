<template>
    <section class="animated">
      <h2 style="float:left;margin-left:100px;text-decoration:underline;color:#fff">我的技能 ></h2>
        <div style="width:100%;height:90%;margin-top:7%;">
            <div id="container" style="float:left;width: 50%;height:80%;"></div>
            <div id="container2" style="float:left;width: 50%;height:80%;"></div>
            <div style="clear:both"></div>
        </div>       
    </section>
</template>

<script>
export default {
  name: "blogHome",
  data() {
    return {};
  },
  mounted() {
    var options = {
      chart: {
        type: "bar", //指定图表的类型，默认是折线图（line）
        backgroundColor: "transparent"
      },
      title: {
        text: "" // 标题
      },
      xAxis: {
        categories: [
          "html",
          "css",
          "js",
          "vue",
          "jq",
          "bootstrap",
          "webpack",
          "es6",
          "React",
          "sass",
          "highcharts",
          "echarts"
        ], // x 轴分类
        labels: {
          style: {
            color: "#fff",
            fontSize: "16px"
          }
        }
      },
      yAxis: {
        title: {
          text: "" // y 轴标题
        },
        labels: {
          style: {
            color: "#fff",
            fontSize: "16px"
          }
        },
        max: 5
      },
      series: [
        {
          // 数据列
          name: "Skills", // 数据列名
          data: [5, 5, 4, 4, 4, 3, 3, 3, 3, 3, 2, 2] // 数据
        }
      ],
      credits: {
        enabled: false
      }
    };
    // 图表初始化函数
    var chart = Highcharts.chart("container", options);
    Highcharts.chart("container2", {
      chart: {
        backgroundColor: "transparent"
      },
      credits: {
        enabled: false
      },
      series: [
        {
          type: "wordcloud",
          data: [
            { name: "javascript", weight: 1 },
            { name: "html", weight: 1 },
            { name: "css", weight: 1 },
            { name: "jquery", weight: 1 },
            { name: "vue2.0", weight: 1 },
            { name: "React", weight: 1 },
            { name: "webpack", weight: 1 },
            { name: "ElementUI", weight: 1 },
            { name: "Sass", weight: 1 },
            { name: "echarts", weight: 1 },
            { name: "ES6", weight: 1 },
            { name: "Vuex", weight: 1 },
            { name: "hightchart", weight: 1 },
            { name: "bootstrap", weight: 1 }
          ]
        }
      ],
      title: {
        text: ""
      }
    });
  },
  components: {},
  methods: {}
};
</script>


<style scoped>
section {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #00cd66;
  overflow: hidden;
}
.highcharts-background {
  fill: transparent !important;
}
</style>