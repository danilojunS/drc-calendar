import Vue from 'vue'
import Router from 'vue-router'

import moment from 'moment'

import Welcome from '../containers/Welcome'
import CalendarAgenda from '../containers/CalendarAgenda'

import generateMockEvents from '../utils/generate-mock-events'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/calendar',
      name: 'CalendarAgenda',
      component: CalendarAgenda,
      props: {
        year: moment().format('YYYY'),
        events: generateMockEvents('2018', 150)
      }
    }
  ]
})
