import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import moment from 'moment'

import Agenda from '.'

Vue.component('agenda', Agenda)

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

storiesOf('Agenda|Agenda', module)
  .add('default', () => ({
    template: `
      <agenda
        :year="year"
        :onDateSelected="onDateSelected"
      >
      </agenda>
    `,
    data () {
      return {
        year: '2018',
        onDateSelected: action('onDateSelected')
      }
    }
  }))
  .add('with events', () => ({
    template: `
      <agenda
        :year="year"
        :onDateSelected="onDateSelected"
        :events="events"
      >
      </agenda>
    `,
    data () {
      return {
        year: '2018',
        onDateSelected: action('onDateSelected'),
        events
      }
    }
  }))
