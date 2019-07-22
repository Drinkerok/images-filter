<template>
  <div class="logo">
    <router-link to="/" class="logo__link">
      <img src="@/assets/img/logo.svg" alt="" class="logo__img">
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "Logo",
  }
</script>

<style>
  .logo {
    flex-shrink: 0;
  }

  .logo__link {
    display: block;
  }

  .logo__img {
    display: block;
  }
</style>