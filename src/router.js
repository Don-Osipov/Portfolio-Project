import Vue from 'vue';
import Home from './views/Home.vue';
import ProjectView from './views/ProjectView.vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', component: Home },
    { path: '/:pro/', component: ProjectView }
  ]
});
