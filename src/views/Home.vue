<template>
  <div class="home-wrapper">
    <Header></Header>
    <MainNav></MainNav>
  </div>
</template>

<script>
import Header from '../components/Header';
import MainNav from '../components/MainNav';
export default {
  components: {
    Header,
    MainNav
  }
};
</script>

<style lang="sass">
.home-wrapper
  width: 100%
  display: flex

*, :after, :before
  margin: 0
  padding: 0
  box-sizing: inherit


html
  font-size: 62.5%

body,
html
  box-sizing: border-box

body
  font-family: Quicksand, sans-serif

.page-padding--primary
  padding: 5.5rem
</style>
