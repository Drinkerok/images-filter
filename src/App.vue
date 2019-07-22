<template>
  <div id="app">
    <Header/>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<script>
  import Header from '@/components/layout/Header.vue';

  export default {
    name: "App",
    components: {
      Header,
    }
  }
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: sans-serif;
    font-size: 2.4rem;
  }

  .container {
    width: 930px;
    margin: 0 auto;
  }
</style>
