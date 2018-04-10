import Vue from 'vue'
import { storiesOf } from '@storybook/vue'

import CalendarAgenda from '.'

Vue.component('calendar-agenda', CalendarAgenda)

storiesOf('CalendarAgenda|CalendarAgenda', module)
  .add('default', () => ({
    template: `
      <calendar-agenda
        :year="year"
      >
      </calendar-agenda>
    `,
    data () {
      return {
        year: '2018'
      }
    }
  }))
