import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import { times } from 'lodash'
import moment from 'moment'

import CalendarDate from '.'

Vue.component('calendar-date', CalendarDate)

const date7 = moment('2018-04-07').toDate()
const date12 = moment('2018-06-12').toDate()

const events = [
  {
    title: 'Dentist',
    startsAt: moment('2018-04-07 09:30').toDate(),
    endsAt: moment('2018-04-07 10:30').toDate()
  },
  {
    title: 'Interview',
    startsAt: moment('2018-04-07 11:30').toDate(),
    endsAt: moment('2018-04-07 12:00').toDate()
  },
  {
    title: 'Lunch with SO',
    startsAt: moment('2018-04-07 13:30').toDate(),
    endsAt: moment('2018-04-07 15:00').toDate()
  },
  {
    title: 'Find an apartment'
  },
  {
    title: 'Buy dog food'
  }
]

const tooManyEvents = times(10).map(time => ({
  title: `Event with a really really big name ${time}`,
  startsAt: moment(`2018-04-07 ${time + 10}:30`).toDate()
}))

storiesOf('Components|CalendarDate', module)
  .add('default', () => ({
    template: `
      <calendar-date
        :date="date"
        :onClick="onClick"
      >
      </calendar-date>
    `,
    data () {
      return {
        date: date7,
        onClick: action('onClick')
      }
    }
  }))
  .add('with dimensions', () => ({
    template: `
      <calendar-date
        :date="date"
        :onClick="onClick"
        width="100px"
        height="100px"
      >
      </calendar-date>
    `,
    data () {
      return {
        date: date12,
        onClick: action('onClick')
      }
    }
  }))
  .add('with events', () => ({
    template: `
      <calendar-date
        :date="date"
        :onClick="onClick"
        :events="events"
      >
      </calendar-date>
    `,
    data () {
      return {
        date: date7,
        onClick: action('onClick'),
        events
      }
    }
  }))
  .add('selected', () => ({
    template: `
      <calendar-date
        :date="date"
        :onClick="onClick"
        :events="events"
        selected
      >
      </calendar-date>
    `,
    data () {
      return {
        date: date7,
        onClick: action('onClick'),
        events
      }
    }
  }))
  .add('unfocused', () => ({
    template: `
      <calendar-date
        :date="date"
        :onClick="onClick"
        unfocused
      >
      </calendar-date>
    `,
    data () {
      return {
        date: date7,
        onClick: action('onClick')
      }
    }
  }))
  .add('events overflow', () => ({
    template: `
      <calendar-date
        :date="date"
        :onClick="onClick"
        :events="events"
      >
      </calendar-date>
    `,
    data () {
      return {
        date: date12,
        onClick: action('onClick'),
        events: tooManyEvents
      }
    }
  }))
