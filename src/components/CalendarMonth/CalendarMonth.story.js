import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import moment from 'moment'

import CalendarMonth from '.'

Vue.component('calendar-month', CalendarMonth)

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
    startsAt: moment('2018-01-27 18:30').toDate(),
    endsAt: moment('2018-01-27 15:00').toDate()
  },
  {
    title: 'Compose a concert',
    startsAt: moment('2018-01-27 19:30').toDate(),
    endsAt: moment('2018-01-27 15:00').toDate()
  },
  {
    title: 'Conquer the world!',
    startsAt: moment('2018-01-30 11:30').toDate(),
    endsAt: moment('2018-01-30 15:00').toDate()
  }
]

storiesOf('Calendar|CalendarMonth', module)
  .add('default', () => ({
    template: `
      <calendar-month
        :month="month"
        :onDateSelected="onDateSelected"
      >
      </calendar-month>
    `,
    data () {
      return {
        month: '2018-01',
        onDateSelected: action('onDateSelected')
      }
    }
  }))
  .add('selected date', () => ({
    template: `
      <calendar-month
        :month="month"
        :onDateSelected="onDateSelected"
        :selectedDate="selectedDate"
      >
      </calendar-month>
    `,
    data () {
      return {
        month: '2018-01',
        selectedDate: '2018-01-09',
        onDateSelected: action('onDateSelected')
      }
    }
  }))
  .add('with events', () => ({
    template: `
      <calendar-month
        :month="month"
        :onDateSelected="onDateSelected"
        :selectedDate="selectedDate"
        :events="events"
      >
      </calendar-month>
    `,
    data () {
      return {
        month: '2018-01',
        selectedDate: '2018-01-09',
        onDateSelected: action('onDateSelected'),
        events
      }
    }
  }))
