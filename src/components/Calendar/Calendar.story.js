import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import moment from 'moment'

import Calendar from '.'

Vue.component('calendar', Calendar)

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

storiesOf('Components|Calendar', module)
  .add('with next', () => ({
    template: `
      <calendar
        :year="year"
        :selectMonth="selectMonth"
        :selectedMonth="selectedMonth"
        :onDateSelected="onDateSelected"
      >
      </calendar>
    `,
    data () {
      return {
        year: '2018',
        selectMonth: action('selectMonth'),
        selectedMonth: '2018-01',
        onDateSelected: action('onDateSeleted')
      }
    }
  }))
  .add('with previous and next', () => ({
    template: `
      <calendar
        :year="year"
        :selectMonth="selectMonth"
        :selectedMonth="selectedMonth"
        :onDateSelected="onDateSelected"
      >
      </calendar>
    `,
    data () {
      return {
        year: '2018',
        selectMonth: action('selectMonth'),
        selectedMonth: '2018-02',
        onDateSelected: action('onDateSeleted')
      }
    }
  }))
  .add('with previous', () => ({
    template: `
      <calendar
        :year="year"
        :selectMonth="selectMonth"
        :selectedMonth="selectedMonth"
        :onDateSelected="onDateSelected"
      >
      </calendar>
    `,
    data () {
      return {
        year: '2018',
        selectMonth: action('selectMonth'),
        selectedMonth: '2018-12',
        onDateSelected: action('onDateSeleted')
      }
    }
  }))
  .add('with events', () => ({
    template: `
      <calendar
        :year="year"
        :selectMonth="selectMonth"
        :selectedMonth="selectedMonth"
        :onDateSelected="onDateSelected"
        :events="events"
      >
      </calendar>
    `,
    data () {
      return {
        year: '2018',
        selectMonth: action('selectMonth'),
        selectedMonth: '2018-01',
        onDateSelected: action('onDateSeleted'),
        events
      }
    }
  }))
  .add('with events and selected', () => ({
    template: `
      <calendar
        :year="year"
        :selectMonth="selectMonth"
        :selectedMonth="selectedMonth"
        :onDateSelected="onDateSelected"
        :events="events"
        :selectedDay="selectedDay"
      >
      </calendar>
    `,
    data () {
      return {
        year: '2018',
        selectMonth: action('selectMonth'),
        selectedMonth: '2018-01',
        onDateSelected: action('onDateSeleted'),
        events,
        selectedDay: '2018-01-09'
      }
    }
  }))
