<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li class="navigation__items">
        <a href="#" class="navigation__links">Projects</a>
      </li>
      <li class="navigation__items">
        <a href="#" class="navigation__links">About Me</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
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


  &__links:link,
  &__links:visited
    color: $c-p
    text-decoration: none
</style>
