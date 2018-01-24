<template>
  <section class="section">
    <div class="container">
      <component :is="currentMode"
        :label="'Dynamic!'"
        :placeholder="'Example Place Holder'"
        v-model="demo"
       ></component>
       <button class="button" @click="isFancy = !isFancy">Switch!</button>
    </div>
  </section>
</template>
<script>
import FancyInput from '@/components/forms/FancyInput';
import SimpleInput from '@/components/forms/SimpleInput';

export default {
  name: 'SimpleDynamic',
  components: { FancyInput, SimpleInput },
  data() {
    return {
      demo: undefined,
      isFancy: true
    };
  },
  computed: {
    currentMode() {
      return this.isFancy ? 'FancyInput' : 'SimpleInput';
    }
  }
};
</script>
