<template>
  <container id="app">
    <ul>
  <li><router-link to="/">~/</router-link></li>
  <li><router-link to="/simple-syntax">Simple Syntax</router-link></li>
  <li><router-link to="/dynamic-form">Dynamic Form</router-link></li>
  <li><router-link to="/simple-dynamic">Simple Dynamic</router-link></li>
  <li><router-link to="/lazy">Lazy Route</router-link></li>
</ul>
    <router-view/>
  </container>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style lang="css">
    @import "../node_modules/bulma/css/bulma.css";
</style>
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
