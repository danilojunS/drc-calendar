import Vue from 'vue'
import Router from 'vue-router'

import moment from 'moment'

import HelloWorld from '../containers/HelloWorld'
import CalendarAgenda from '../containers/CalendarAgenda'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello-world',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/calendar',
      name: 'CalendarAgenda',
      component: CalendarAgenda,
      props: {
        year: moment().format('YYYY'),
        events: []
      }
    }
  ]
})
