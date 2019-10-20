<template>
  <nav class="projects">
    <ul class="projects__list">
      <!-- <router-link
        class="projects__items test"
        to="/projects/cognitive-control-research"
        >Cognitive Control Research</router-link
      >
      <router-link class="projects__items" to="/projects/lambent-data"
        >Lambent Data</router-link
      >
      <router-link class="projects__items" to="/projects/ai-focus-assistant"
        >AI Focus System</router-link
      >
      <router-link class="projects__items" to="/projects/health-design-thinking"
        >Design Thinking Health</router-link
      > -->
      <a href="#" class="projects__items">Cognitive Control Research</a>
      <a href="#" class="projects__items">Lambent Data</a>
      <a href="#" class="projects__items">AI Focus System</a>
      <a href="#" class="projects__items">Design Thinking Health</a>
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
      margin-bottom: 2.6rem

    // &::before
    //   margin-right: 10px
    //   content: '['
    //   transform: translateX(20px)

    // &::after
    //   margin-left: 10px
    //   content: ']'
    //   transform: translateX(-20px)

    // &::before, &::after
    //   display: inline-block
    //   transition: transform 0.3s, opacity 0.2s
</style>
