<template>
  <container>
    <form-generator :schema="schema" v-model="model"></form-generator>
    <button v-if="!swapped" class="button" @click="changeAllTo('FancyInput')">Make Them All Fancy</button>
    <button v-if="swapped" class="button" @click="revert()">Take Me Back</button>
  </container>
</template>
<script>
import FormGenerator from '@/components/forms/FormGenerator';
export default {
  name: 'DynamicForm',
  components: {
    FormGenerator
  },
  data() {
    return {
      swapped: false,
      model: {
        firstName: 'Evan',
        total: '$10.00'
      },
      schema: [
        {
          type: 'FancyInput',
          label: 'First Name',
          placeholder: 'Please enter your First Name',
          name: 'firstName'
        },
        {
          type: 'SimpleInput',
          label: 'Last Name',
          name: 'lastName'
        },
        // ....
        {
          type: 'CurrencyInput',
          label: 'Total',
          name: 'total',
          currencies: ['$', '£', '€']
        },
        {
          type: 'CurrencyInput',
          label: 'Tip',
          name: 'tip',
          currencies: ['$', '£', '€']
        }
      ]
    };
  },
  methods: {
    changeAllTo(type) {
      this.swapped = true;
      this.schema = this.schema.map(n => {
        return { ...n, oldType: n.type, type };
      });
    },
    revert() {
      this.swapped = false;
      this.schema = this.schema.map(n => {
        return { ...n, type: n.oldType, oldType: n.type };
      });
    }
  }
};
</script>
