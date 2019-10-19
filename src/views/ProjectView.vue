<template>
  <div class="projectPage__wrapper">
    <DropDownNavigation></DropDownNavigation>
    <section class="content">
      <div class="rightside">
        <div class="landing">
          <h1 class="title">{{ title }}</h1>
          <h2 class="summary">
            This is a project that does this and that and this and that and this
            and that
          </h2>
          <h3 class="role">
            My role:
            <p class="role__content">
              I was the sole creator and was in charge of pooping
            </p>
          </h3>
        </div>
        <div class="info"></div>
      </div>
      <div class="leftside">
        <div class="landing">
          <img
            class="pic1 pic"
            src="../assets/final.png"
            alt="the best image"
          />
        </div>
        <div class="info"></div>
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

.projectPage__wrapper
  width: 100%
  height: 95vh

.content
  // height: 100%
  display: grid
  grid-template-columns: 3fr 2fr
  margin: 4rem
  margin-left: 8.5rem
  margin-top: 6rem

.title
  color: black
  font-size: 6rem
  margin-bottom: .9rem

.summary
  font-size: 2.5rem
  width: 70%
  padding-left: 2.5rem
  color: $c-s
  font-weight: normal

.role
  font-size: 2.5rem
  padding-left: 2.5rem
  padding-top: 2rem
  color: $c-t

  &__content
    font-size: 2rem
    color: $c-s
    font-weight: normal
.pic1
  height: 285px
  width: 400px

.landing
  height: 80%

//TESTING
.rightside
  // background-color: pink
.leftside
  // background-color: skyblue
</style>
