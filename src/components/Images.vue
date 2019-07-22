<template>
  <div class="images">
    <ul class="images__list">
      <li
        v-for="image in images"
        :key="image.id"
        class="images__item"
      >
        <img
          :src="image.src"
          alt=""
          class="images__img"
        >
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Images",
    props: {
      images: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style>
  .images {
    overflow: hidden;
    padding: 36px 0 0;
  }

  .images__list {
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    flex-wrap: wrap;
    width: calc(100% + 36px);
    margin: 0 -18px;
  }

  .images__item {
    width: calc(33.333333% - 36px);
    min-height: 116px;
    margin: 0 18px 36px;
  }

  .images__img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>