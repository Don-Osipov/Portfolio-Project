<template>
  <section>
    <div class="rightside">
      <h1>Heyo is me, Shamonster</h1>
      <h2>
        I like to Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Praesentium, eum?
      </h2>

      <h2>
        Ive done this and this and im from PRINCETON. Here are some of my (did i
        mention im from PrInCeToN?) scientific articles (what a scholar)
      </h2>

      <h2 v-for="(x, index) in 5" :key="index">
        Sciency thing {{ x }}
        <p>This is what my sciency thing is about {{ x }}</p>
      </h2>
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
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
section
  height: 100%
  display: grid
  grid-template-columns: 3fr 2fr
  margin: 4rem
  margin-top: 12rem

h1
  color: $c-p
  font-size: 3rem
  margin-top: 7rem
  margin-bottom: 1rem

h2
  margin-bottom: 5rem

.leftside
  text-align: center

.filler
  margin-top: 8rem
</style>
