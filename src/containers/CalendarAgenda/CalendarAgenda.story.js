import Vue from 'vue'
import { storiesOf } from '@storybook/vue'

import moment from 'moment'

import CalendarAgenda from '.'

Vue.component('calendar-agenda', CalendarAgenda)

const events = [
  {
    title: 'Dentist',
    startsAt: moment('2018-01-02 09:30').toDate(),
    endsAt: moment('2018-01-02 10:30').toDate()
  },
  {
    title: 'Interview',
    startsAt: moment('2018-01-07 11:30').toDate(),
    endsAt: moment('2018-01-07 12:00').toDate()
  },
  {
    title: 'Lunch with SO',
    startsAt: moment('2018-01-07 13:30').toDate(),
    endsAt: moment('2018-01-07 15:00').toDate()
  },
  {
    title: 'Today is the day to win!',
    startsAt: moment('2018-01-09 15:30').toDate(),
    endsAt: moment('2018-01-09 15:00').toDate()
  },
  {
    title: 'Find an apartment',
    startsAt: moment('2018-01-15 13:30').toDate(),
    endsAt: moment('2018-01-15 15:00').toDate()
  },
  {
    title: 'Buy dog food',
    startsAt: moment('2018-01-22 20:30').toDate(),
    endsAt: moment('2018-01-22 15:00').toDate()
  },
  {
    title: 'Create tests :P',
    startsAt: moment('2018-03-27 18:30').toDate(),
    endsAt: moment('2018-03-27 15:00').toDate()
  },
  {
    title: 'Compose a concert',
    startsAt: moment('2018-05-27 19:30').toDate(),
    endsAt: moment('2018-05-27 15:00').toDate()
  },
  {
    title: 'Conquer the world!',
    startsAt: moment('2018-12-30 11:30').toDate(),
    endsAt: moment('2018-12-30 15:00').toDate()
  }
]

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
  .add('with events', () => ({
    template: `
      <calendar-agenda
        :year="year"
        :events="events"
      >
      </calendar-agenda>
    `,
    data () {
      return {
        year: '2018',
        events
      }
    }
  }))
