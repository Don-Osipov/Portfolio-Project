<template>
  <div class="nav__wrapper">
    <DropDownNavigation></DropDownNavigation>
    <p>{{ title }}</p>
  </div>
</template>

<script>
import DropDownNavigation from '../components/DropDownNavigation';
export default {
  components: {
    DropDownNavigation
  },
  props: ['project'],
  computed: {
    title: function() {
      if (this.project === 'ai-driven-neuroscience-research') {
        return 'AI-driven neuroscience research';
      }
      if (this.project === 'biofield-devices') {
        return 'Biofield Devices';
      }
      if (this.project === 'ai-focus-systems') {
        return 'AI Focus Systems';
      }
      return '';
    }
  }
};
</script>

<style lang="sass"></style>
