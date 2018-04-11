import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import moment from 'moment'

import AgendaDate from '.'

Vue.component('agenda-date', AgendaDate)

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

const date7 = moment('2018-04-07').toDate()

storiesOf('Components|AgendaDate', module)
  .add('default', () => ({
    template: `
      <agenda-date
        :date="date"
        :onClick="onClick"
      >
      </agenda-date>
    `,
    data () {
      return {
        date: date7,
        onClick: action('onClick')
      }
    }
  }))
  .add('with events', () => ({
    template: `
      <agenda-date
        :date="date"
        :onClick="onClick"
        :events="events"
      >
      </agenda-date>
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
      <agenda-date
        :date="date"
        :onClick="onClick"
        :events="events"
        selected
      >
      </agenda-date>
    `,
    data () {
      return {
        date: date7,
        onClick: action('onClick'),
        events
      }
    }
  }))
