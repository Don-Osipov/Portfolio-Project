<template>
  <nav class="projects">
    <ul class="projects__list">
      <li class="projects__items">
        <a href="#" class="projects__links">AI-driven neuroscience research</a>
      </li>
      <li class="projects__items">
        <a href="#" class="projects__links">Biofield devices</a>
      </li>
      <li class="projects__items">
        <a href="#" class="projects__links"> AI Focus system</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
.projects
  grid-row: 2 / 3
  align-self: center
  &__list

  &__items
    font-size: 3.5rem
    font-weight: 500
    list-style: none
    line-height: 1.7

  &__links:link,
  &__links:visited
    color: $c-p
    text-decoration: none
</style>
