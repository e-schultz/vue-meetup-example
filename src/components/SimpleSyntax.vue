<template>
  <container>
    <h1 class="title">Directives</h1>

    <input class="input" type="text" v-model="filter" placeholder="Filter Directives"/><br/>
    <input class="input" type="text" v-model="unrelated" placeholder="Unrelated"/>
    <button v-on:click="filter=''">Clear</button>
  <p>
    Found: {{totalMatches}}
  </p>

<ul>
  <li v-for="directive in directives" :key="directive">{{directive}}</li>
  <li v-if="!hasMatches">No Matches Found for: {{filter}}</li>
</ul>

  </container>
</template>
<script>
export default {
  name: 'CommonComponent',
  data() {
    return {
      filter: '',
      unrelated: '',
      allDirectives: [
        'v-text',
        'v-html',
        'v-show',
        'v-if',
        'v-else-if',
        'v-for',
        'v-on',
        'v-pre',
        'v-cloak',
        'v-once'
      ]
    };
  },
  methods: {
    clearFilter() {
      this.filter = '';
    }
  },
  computed: {
    directives() {
      console.log('updating directives');
      return this.allDirectives.filter(n => n.indexOf(this.filter) >= 0);
    },
    hasMatches() {
      console.log('updating hasMatches');
      return this.directives.length > 0;
    },
    totalMatches() {
      console.log('updating totalMatches');
      return this.directives.length;
    }
  }
};
</script>
<style lang="css">
