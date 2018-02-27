<template>
  <ul>
    <li v-for="link in links"
        v-bind:key="link.src">
      <router-link v-bind:to="link.src">{{link.description}}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'NavLinks',
  props: ['links']
};
</script>

<style lang="css">

</style>
<style scoped>
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
