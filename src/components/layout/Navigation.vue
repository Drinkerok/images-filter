<template>
  <nav class="main-navigation">
    <ul class="main-navigation__list">
      <li class="main-navigation__item">
        <router-link to="/how-it-works" class="main-navigation__link">Как это работает</router-link>
      </li>
      <li class="main-navigation__item">
        <router-link to="/about" class="main-navigation__link">О нас</router-link>
      </li>
      <li class="main-navigation__item">
        <router-link to="/" class="main-navigation__link">Выход</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'Navigation',
  }
</script>

<style>
  .main-navigation {
    flex-grow: 1;
  }

  .main-navigation__list {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .main-navigation__item {
    margin: 0 0 0 55px;
  }

  .main-navigation__link {
    display: block;
    font-size: 1.6rem;
    color: #515A6F;
  }
</style>