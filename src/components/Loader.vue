<template>
  <div class="loading">Загрузка</div>
</template>

<script>
  export default {
    name: "Loader"
  }
</script>

<style>
  @keyframes loadingAnimate {
    0% {
      content: '';
    }
    33% {
      content: '.';
    }
    66% {
      content: '..';
    }
    100% {
      content: '...';
    }
  }
  .loading:after {
    content: '';
    animation: loadingAnimate 1s linear infinite normal;
  }
</style>