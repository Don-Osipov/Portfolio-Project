<template>
  <div class="nav__wrapper">
    <DropDownNavigation></DropDownNavigation>
    <AboutMeText></AboutMeText>
  </div>
</template>

<script>
import DropDownNavigation from '../components/DropDownNavigation';
import AboutMeText from '../components/AboutMe-Text';
import { log } from 'util';
export default {
  components: {
    DropDownNavigation,
    AboutMeText
  }
};
</script>

<style lang="sass" scoped></style>
