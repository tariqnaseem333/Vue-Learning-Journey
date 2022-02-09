import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Jobs from '../views/jobs/Jobs.vue'
import NotFound from '../views/NotFound.vue'
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
    // here id is the route parameter ':parameter_name'
    path: '/jobs/:id',
    name: 'JobDetails',
    component: JobDetails,
    // it means we can accept any route parameters a prop
    props: true
  },
  //  Redirect the path all-jobs to jobs. Previous version of
  //  the website was using it but now is not in use anymore
  // redirect the path
  {
    path: '/all-jobs',
    redirect: '/jobs'
  },
  // For the page that doesn't exist we want to show 404 page
  // catchall 404: it will catch all the route that is not 
  // present above
  {
    path: '/:catchAll(.*)',
    name: "NotFound",
    component: NotFound
  }
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
