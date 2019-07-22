<template>
  <div class="container">
    <header class="page-header">
      <Logo />
      <Navigation />
    </header>
  </div>
</template>

<script>
  import Logo from '@/components/layout/Logo.vue';
  import Navigation from '@/components/layout/Navigation.vue';

  export default {
    name: 'Header',
    components: {
      Logo,
      Navigation
    }
  }
</script>

<style>
  .page-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 0;
  }
</style>