<template>
  <div class="container">
    <div class="text-page">
      <p class="text-page__header">{{ content.header }}</p>
      <p class="text-page__description">{{ content.description }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Text-page',
    props: {
      content: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style>
  .text-page {
    color: rgba(0, 0, 0, 0.6);
    max-width: 826px;
    margin: 0 auto;
  }

  .text-page__header {
    text-align: center;
    font-size: 3.5rem;
    line-height: 4rem;
    margin: 0 0 14px;
  }

  .text-page__description {
    text-align: center;
  }
</style>