<template>
  <nav class="navigation">
    <Icons />
    <ul class="navigation__list">
      <li class="navigation__items">
        <a href="#" class="navigation__links">Projects</a>
      </li>
      <router-link class="navigation__items" to="/about-me"
        >About Me</router-link
      >
    </ul>
  </nav>
</template>

<script>
import Icons from '../components/Icons';

export default {
  components: {
    Icons
  }
};
</script>

<style lang="sass" scoped>
.navigation
  grid-column: 1 / -1
  align-self: start
  &__list
    display: flex
    justify-content: space-around


  &__items
    font-size: 2.5rem
    list-style: none
    color: $c-p
    text-decoration: none

  &__links:link,
  &__links:visited
    color: $c-p
    text-decoration: none
</style>
