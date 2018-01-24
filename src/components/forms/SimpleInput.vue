<template>
  <div class="field">
    {{label}}:
    <input type="text"
      :placeholder="placeholder"
      v-bind:value="value"
      v-on:input="update($event.target.value)"/>
  </div>
</template>
<script>
export default {
  name: 'SimpleInput',
  props: ['label', 'placeholder', 'value'],
  methods: {
    update(value) {
      this.$emit('input', value);
    }
  }
};
</script>
