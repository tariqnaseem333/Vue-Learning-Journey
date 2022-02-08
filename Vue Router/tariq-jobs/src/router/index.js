import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Jobs from '../views/jobs/Jobs.vue'
import JobDetails from '../views/jobs/JobDetails.vue'


// here each object represent single route
const routes = [
  {
    // url path relative to root of site
    path: '/',
    // name of the route
    name: 'Home',
    // component we want to inject at this route location
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs
  },
  {
    // here id is the route parameter 
    path: '/jobs/:id',
    name: 'JobDetails',
    component: JobDetails
  },
]

const router = createRouter({
  // createWebHistory will create web history in the browser
  // by using web history api in the browser so we can go
  // forward or backward 
  // process.env.BASE_URL: we are also passing the base url
  // of our project
  // routes: passing the routes array so that router can register them
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
