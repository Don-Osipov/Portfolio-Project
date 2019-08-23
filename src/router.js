import Vue from 'vue';
import Home from './views/Home.vue';
import ProjectView from './views/ProjectView.vue';
import AboutMe from './views/AboutMe.vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', component: Home },
    { path: '/projects/:project', component: ProjectView, props: true },
    { path: '/about-me', component: AboutMe },
    { path: '*', component: Home }
  ],
  mode: 'history'
});
