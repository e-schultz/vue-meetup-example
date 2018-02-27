<template>
  <container>
    <div class="content">
      <h1>GPA Tracker</h1>
      <gpa-table :grades="grades"
                 @onAddRow="rowAdded()">
      </gpa-table>
    </div>

  </container>
</template>

<script>
/* eslint-disable */
import GpaTable from './GpaTable';

const maxBy = (array, prop) => {
  return [].concat(array).sort((a, b) => a[prop] < b[prop])[0] || {};
};

const minBy = (array, prop) => {
  return [].concat(array).sort((a, b) => a[prop] > b[prop])[0] || {};
};
export default {

  name: 'GpaTracker',
  components: { GpaTable },
  data() {
    return {
      grades:
        [{ code: 'ACC 406', gpa: undefined },
        { code: 'ITM 410', gpa: undefined },
        { code: 'ITM 500', gpa: undefined },
        { code: 'LAW 122', gpa: undefined }]
    };
  },
  methods: {
    rowAdded() {
      this.grades.push({ code: '', gpa: undefined });
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
