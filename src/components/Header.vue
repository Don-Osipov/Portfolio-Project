<template>
  <header class="header page-padding--primary">
    <div class="heading">
      <h1 class="header__name">Shamay Agaron</h1>
      <p class="header__info">
        This site is under construction.
      </p>
    </div>
    <div class="header__design-wrapper">
      <div class="header__design"></div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
.header
  position: relative
  color: #fff
  background-color: $c-p
  width: 50%
  &__name
    font-size: 5rem

  &__info
    font-size: 2rem

  &__design-wrapper
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)

  &__design
    background-color: #fff
    height: 23rem
    width: 23rem
    border-radius: 50%
    display: inline-block

.heading
  display: flex
  flex-direction: column
  align-items: flex-start
</style>
