<template>
  <container>
    <validate-props :name="name" :age="age"></validate-props>
  </container>
</template>
<script>
import ValidateProps from '@/components/ValidateProps';
export default {
  name: 'PropsExample',
  components: { ValidateProps },
  data() {
    return {
      name: 'Evan Schultz',
      age: 10
    };
  }
};
</script>
