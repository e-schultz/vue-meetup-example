<template>
  <container>
   <div class="content">
      <h1>Hello VueJS Toronto</h1>
      <p>
        This is a bit of a toy / sandbox app I've been using to explore VueJS. This app might change and evolve over time, but has been a bit of me trying to answer to myself:
      </p>
      <blockquote>
        How would I do that in Vue?
      </blockquote>
      <p>
        From exploring the <router-link to="/simple-syntax">Delcaritve Syntax and DataBinding</router-link>, to how easy <router-link to="/lazy">Lazy Loading</router-link> routes and components to be.
      </p>
      <p>
        To the basics of <router-link to="/simple-dynamic">Leveraging Dynamic Components</router-link>, or seeing how easy it is to expand that concept for <router-link to="/dynamic-form">Dynamic Form Generation.</router-link>
      </p>
      <p>
        I hope you find it useful, and if there is a better way to approach things - let me know. Thanks for taking a look.
      </p>

   </div>

  </container>
</template>

<script>
import CommonComponent from '@/components/CommonComponent';

export default {
  name: 'HelloWorld',
  components: {
    CommonComponent,
    lazy: () => import('./LazyComponent.vue')
  },
  // ....
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      showLazy: false
    };
  },
  methods: {
    toggleLazy() {
      this.showLazy = !this.showLazy;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
