<template>
  <section class="nav__wrapper">
    <DropDownNavigation></DropDownNavigation>
    <Icons />
    <Contact></Contact>
  </section>
</template>

<script>
import DropDownNavigation from '../components/DropDownNavigation';
import { log } from 'util';
import Contact from '../components/Contact';
export default {
  components: {
    DropDownNavigation,
    Contact
  }
};
</script>

<style lang="sass" scoped></style>
