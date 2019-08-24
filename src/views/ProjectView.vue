<template>
  <div class="nav__wrapper">
    <DropDownNavigation></DropDownNavigation>
    <section>
      <div class="rightside">
        <h1>{{ title }}</h1>
      </div>
      <div class="leftside">
        <h3 class="filler">THIS SIDE IS FOR PICS AND STUFF</h3>
        <h3 class="filler">THIS SIDE IS FOR PICS AND STUFF</h3>
        <h3 class="filler">THIS SIDE IS FOR PICS AND STUFF</h3>
        <h3 class="filler">THIS SIDE IS FOR PICS AND STUFF</h3>
        <h3 class="filler">THIS SIDE IS FOR PICS AND STUFF</h3>
        <h3 class="filler">THIS SIDE IS FOR PICS AND STUFF</h3>
        <h3 class="filler">THIS SIDE IS FOR PICS AND STUFF</h3>
      </div>
    </section>
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
      if (this.project === 'cognitive-control-research') {
        return 'Cognitive Control Research';
      }
      if (this.project === 'lambent-data') {
        return 'Lambent Data';
      }
      if (this.project === 'ai-focus-system') {
        return 'AI Focus Systems';
      }
      if (this.project === 'design-thinking-health') {
        return 'Design Thinking Health';
      }
      return '';
    }
  }
};
</script>

<style lang="sass" scoped>
section
  height: 100%
  display: grid
  grid-template-columns: 3fr 2fr
  margin: 4rem
  margin-left: 8.5rem
  margin-top: 6rem

h1
  color: $c-p
  font-size: 3rem
  margin-bottom: 1rem


.filler
  margin-top: 8rem
</style>
