<template>
  <container>
    Hello {{name}}, we should only be here if you are over 18. Are you? {{myAge}} <br/>

  </container>
</template>
<script>
const greaterThan = minValue => value => {
  return value > minValue;
};

const over18 = greaterThan(18);

export default {
  component: 'ValidateProps',
  props: {
    name: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      validator: over18
    }
  },
  data() {
    return {
      myAge: this.age
    };
  }
};
</script>
