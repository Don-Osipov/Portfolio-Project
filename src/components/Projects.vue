<template>
  <nav class="projects">
    <ul class="projects__list">
      <router-link
        class="projects__items test"
        to="/projects/ai-driven-neuroscience-research"
        >AI-driven neuroscience research</router-link
      >
      <router-link class="projects__items" to="/projects/biofield-devices"
        >Biofield Devices</router-link
      >
      <router-link class="projects__items" to="/projects/ai-focus-system"
        >AI Focus system</router-link
      >
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
    line-height: 1


  &__items
    font-size: 3.5rem
    font-weight: 500
    list-style: none
    color: $c-p
    text-decoration: none
    display: block

    &:not(:last-child)
      margin-bottom: 2.5rem
</style>
