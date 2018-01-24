<template>
  <container>
    <card>
      <p slot="header">Lazy Loaded Route</p>
      <section>
        <p>I was a route that was lazy loaded.</p>
        <p>Click Show Lazy to lazy load a component</p>
      </section>
       <a  slot="footer" class="card-footer-item" @click="toggleLazy()">Show Lazy</a>
    </card>

     <div class="section">
      <lazy v-if="showLazy"></lazy><br/>
    </div>

  </container>
</template>
<script>
import Card from '@/components/CardComponent';

export default {
  name: 'LazyRoute',
  components: {
    Card,
    lazy: () => import('@/components/LazyComponent')
  },
  data() {
    return {
      showLazy: false
    };
  },
  methods: {
    toggleLazy: function() {
      this.showLazy = !this.showLazy;
    }
  }
};
</script>
