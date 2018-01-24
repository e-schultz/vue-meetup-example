<template>
<section>
  <component
    v-for="(field) in schema"
    :key="field.name"
    :is="field.type"
    v-bind="field"
    v-bind:value="value[field.name]"
    v-on:input="update(field.name,$event)"></component>
</section>
</template>
<script>
export default {
  name: 'FormGenerator',
  components: {
    FancyInput: () => import('@/components/forms/FancyInput'),
    SimpleInput: () => import('@/components/forms/SimpleInput'),
    CurrencyInput: () => import('@/components/forms/CurrencyInput')
  },
  props: ['schema', 'value'],
  methods: {
    update(fieldName, value) {
      const updatedForm = { ...this.value, [fieldName]: value };
      this.$emit('input', updatedForm);
    }
  }
};
</script>
