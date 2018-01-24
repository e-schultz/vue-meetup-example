<template>
  <div class="field">
    <label class="label">{{label}}</label>
    <div class="control">
      <input class="input"
        type="text"
        :placeholder="placeholder"
        v-bind:value="value"
        v-on:input="update($event.target.value)">
    </div>
  </div>
</template>
<script>
export default {
  name: 'FancyInput',
  props: ['label', 'placeholder', 'value'],
  methods: {
    update(value) {
      this.$emit('input', value);
    }
  }
};
</script>
