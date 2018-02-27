<template>
  <container id="app">
    <NavLinks v-bind:links="links" />
    <router-view/>
  </container>
</template>

<script>
import NavLinks from '@/components/NavLinks';

export default {
  components: { NavLinks },
  name: 'App',
  data() {
    return {
      links: [{
        src: '/',
        description: '~/'

      }, {
        src: '/simple-syntax',
        description: 'Simple Syntax'
      }, {
        src: '/dynamic-form',
        description: 'Dynamic Form'
      },
      {
        src: '/simple-dynamic',
        description: 'Simple Dynamic'
      },
      {
        src: '/props-example',
        description: 'Props'
      },
      {
        src: '/lazy',
        description: 'Lazy Route'
      },
      {
        src: '/gpa-tracker',
        description: 'GPA Tracker'
      }]
    };
  }
};
</script>

<style lang="css">
@import '../node_modules/bulma/css/bulma.css';
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
