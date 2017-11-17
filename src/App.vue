<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import animate from "animate.css";
import "babel-polyfill";
export default {
  name: "app"
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  background-color: #e9eef3;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h1 {
  font-size: 36px;
}
.el-submenu__title i {
  color: #fff;
}
.el-collapse-item__header {
  background-color: rgb(13, 55, 138) !important;
  color: #fff !important;
  padding-left: 10px !important;
}
.el-collapse-item__content {
  padding: 10px !important;
}
ul {
  list-style: none;
  text-align: left;
}
</style>
