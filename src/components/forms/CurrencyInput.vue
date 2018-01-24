<template>
  <div class="field has-addons has-addons">
    <p class="control">
      <span class="select">
        <select v-bind:value="currencyType" ref="currencyType" v-on:input="update()">
          <option></option>
          <option v-for="currency in currencies" :key="currency">{{currency}}</option>
        </select>
      </span>
    </p>
    <p class="control">
      <input class="input"
        ref="currencyValue"
        v-bind:value="currencyValue"
        v-on:input="update()">
    </p>
  </div>
</template>
<script>
const CURRENCY_REGEX = /[^.0-9]/;
export default {
  name: 'CurrencyInput',
  props: ['label', 'value', 'placeholder', 'currencies'],
  computed: {
    currencyType() {
      return this.value ? this.value.match(CURRENCY_REGEX)[0] : '';
    },
    currencyValue() {
      return this.value ? this.value.replace(CURRENCY_REGEX, '') : '';
    }
  },

  methods: {
    update() {
      const { currencyType, currencyValue } = this.$refs;
      const value = `${currencyType.value}${currencyValue.value || 0}`;
      this.$emit('input', value);
    }
  }
};
</script>
