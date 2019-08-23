<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <router-link class="navigation__items" to="/">Shamay Agaron</router-link>
      <div class="flex-wrapper">
        <li class="navigation__items">
          <a href="#" class="navigation__links">Projects</a>
        </li>

        <router-link class="navigation__items" to="/about-me"
          >About Me</router-link
        >
      </div>
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
  display: block
  margin-top: 5.5rem
  padding: 0 5.5rem

  &__list
    display: grid
    grid-template-columns: repeat(2, 50%)

  &__items
    font-size: 2.5rem
    list-style: none
    color: $c-p
    text-decoration: none

  &__links:link,
  &__links:visited
    color: $c-p
    text-decoration: none

.flex-wrapper
  display: flex
  justify-content: space-around
</style>
