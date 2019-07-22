<template>
  <div class="container">
    <div class="main">
      <div class="main__user">
        <User />
        <Loader v-if="!imagesLoaded" />
        <Images v-else :images="images" />
      </div>
    </div>
  </div>
</template>

<script>
  import User from '@/components/User.vue';
  import Images from '@/components/Images.vue';
  import Loader from '@/components/Loader.vue';

  export default {
    name: 'Main',
    components: {
      User,
      Images,
      Loader
    },
    computed: {
      images() {
        return this.$store.state.images;
      },
      imagesLoaded() {
        return this.$store.state.loaded.images;
      }
    },
    mounted() {
      this.$store.dispatch("loadImages");
    }
  }
</script>

<style lang="less">
  .main {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    position: relative;
    padding: 30px 0;

    &:before {
      content: '';
      width: 1px;
      height: 100%;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      background-color: rgba(0, 0, 0, 0.3);
    };
  }

  .main__user {
    width: 50%;
    padding: 0 80px 0 0;
  }
</style>