<template>
  <main class="main">
    <div class="allnavs page-padding--primary">
      <Navigation></Navigation>
      <Projects></Projects>
      <div class="placeholder"></div>
      <div class="main__design"></div>
    </div>
  </main>
</template>

<script>
import Navigation from './Navigation';
import Projects from './Projects';
export default {
  components: {
    Navigation,
    Projects
  }
};
</script>

<style lang="sass" scoped>



.main
  display: flex
  // flex-direction: column

  background-color: #fff
  width: 50%

  &__design
    grid-row: 2 / 3
    grid-column: 2 / 3
    align-self: center
    height: 25rem
    width: 12.5rem
    border-radius: 30rem 0 0 30rem
    background-color: $c-p
    transform: translateX(4rem)

.placeholder
  grid-row: 3/4

.allnavs
  height: 100%
  width: 100%
  display: grid
  grid-template-rows: 3.5rem 1fr 3.5rem
  grid-template-columns: 1fr 10rem
  overflow: hidden
</style>
