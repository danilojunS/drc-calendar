
import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import CalendarMonth from '.'

Vue.component('calendar-month', CalendarMonth)

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
