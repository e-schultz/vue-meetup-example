<template>
<div>
  I'm being eager about this lazy component. <br/>
  <lazy-component/> <br/>
  <router-link to="/">Lets go home</router-link>
</div>
</template>
<script>
import LazyComponent from '@/components//LazyComponent';
export default {
  name: 'EagerLazy',
  components: { LazyComponent }
};
</script>
