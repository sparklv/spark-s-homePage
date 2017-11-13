<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import animate from "animate.css";
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
</style>
