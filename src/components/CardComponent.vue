<template>
 <div class="card">
      <header class="card-header">
        <div class="card-header-title">
          <slot name="header"/>
        </div>
      </header>
      <div class="card-content">
      <div class="content">
        <slot/>
      </div>
    </div>
    <footer class="card-footer">
       <slot name="footer"/>
      <!--<a class="card-footer-item" @click="toggleLazy()">Show Lazy</a>-->
    </footer>
  </div>
</template>
<script>
export default {
  name: 'Card'
};
</script>
