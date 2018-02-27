<template>
  <table>
    <thead>
      <tr>
        <th>Course Code</th>
        <th>GPA</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(grade, index) in grades"
          :key="index">
        <td>
          <input class="input"
                 v-model="grade.code"> </td>
        <td> <input class="input"
                 v-model.number="grade.gpa"> </td>
      </tr>
      <tr>
        <td colspan="2">
          <button v-on:click="addRow()">Add Course</button>
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td>Average GPA</td>
        <td>{{average}}</td>
      </tr>
      <tr>
        <td>Highest GPA</td>
        <td>{{highest.code}} - {{highest.gpa}}</td>
      </tr>
      <tr>
        <td>Lowest GPA</td>
        <td>
          <span v-if="gpaEntered.length> 1">{{lowest.code}} - {{lowest.gpa}}
          </span>
        </td>
      </tr>
    </tfoot>
  </table>
</template>
<script>

const maxBy = (array, prop) => {
  return [].concat(array).sort((a, b) => a[prop] < b[prop])[0] || {};
};

const minBy = (array, prop) => {
  return [].concat(array).sort((a, b) => a[prop] > b[prop])[0] || {};
};

export default {
  name: 'GpaTable',
  props: ['grades'],
  methods: {
    addRow() {
      this.$emit('onAddRow');
    }
  },
  computed: {
    // which items have a GPA entered
    gpaEntered() {
      return this.grades
        .filter(grade => grade.gpa !== undefined && grade.gpa !== '');
    },
    average() {
      const totalGpaEntered = this.gpaEntered.length;
      if (totalGpaEntered === 0) {
        return 0;
      } else {
        return (this.gpaEntered
          .reduce((total, grade) => total + grade.gpa, 0) / totalGpaEntered).toFixed(2);
      }
    },
    highest() {
      return maxBy(this.gpaEntered, 'gpa');
    },
    lowest() {
      return minBy(this.gpaEntered, 'gpa');
    }
  }
};
</script>
