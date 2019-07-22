<template>
  <div class="user">
    <Loader v-if="!loaded" />
    <div v-else class="user__content">
      <img
        :src="userImg()"
        :alt="user.name"
        class="user__img"
        width="28"
        height="28"
      >
      <p class="user__name">{{ user.name }}</p>
    </div>
  </div>
</template>

<script>
  import Loader from '@/components/Loader.vue';

  const DEFAULT_AVATAR = 'no-avatar.svg';

  export default {
    name: 'User',
    components: {
      Loader
    },
    computed: {
      user() {
        return this.$store.state.user;
      },
      loaded() {
        return this.$store.state.loaded.user;
      }
    },
    methods: {
      userImg() {
        return this.user.img ? this.user.img : DEFAULT_AVATAR;
      }
    },
    mounted() {
      this.$store.dispatch("loadUser");
    }
  }
</script>

<style>
  .user__content {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .user__img {
    margin: 0 8px 0 0;
  }

  .user__name {
    color: rgba(0, 0, 0, 0.6);
  }
</style>