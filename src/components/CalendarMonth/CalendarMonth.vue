<template>
  <div
    class="calendar-month"
  >
    <div class="title">
      {{ formatMonth(month) }}
    </div>
    <div class="week-days">
      <div class="week-day" v-for="(weekDay, index) in weekDays" :key="index">
        {{ weekDay }}
      </div>
    </div>
    <div class="days">
      <calendar-date
        v-for="(day, index) in days"
        :key="index"
        width="calc(100% / 7 - 2px)"
        height="calc(100% / 5)"
        :date="day.date"
        :events="day.events"
        :unfocused="day.unfocused"
        :selected="day.selected"
        :onClick="onDateSelected"
      />
    </div>
  </div>
</template>

<script>
import { filter } from 'lodash'
import moment from 'moment'

import VueTypes from 'vue-types'

import CalendarDate from '../CalendarDate'

import { MONTH_FORMAT, DAY_FORMAT } from './utils/constants'
import generateDaysOfMonthWithPlaceholders from './utils/generate-days-of-month-with-placeholders'
import generateWeekDays from './utils/generate-week-days'

export default {
  name: 'CalendarMonth',
  props: {
    month: VueTypes.string.isRequired,
    selectedDay: VueTypes.string,
    onDateSelected: VueTypes.func.def(console.log),
    events: VueTypes.arrayOf(VueTypes.shape({
      title: VueTypes.string.isRequired,
      startsAt: Date,
      endsAt: Date
    }))
  },
  computed: {
    days () {
      const daysOfMonthWithPlaceholders = generateDaysOfMonthWithPlaceholders(this.month)
      return daysOfMonthWithPlaceholders.map(day => ({
        unfocused: moment(day, DAY_FORMAT).format(MONTH_FORMAT) !== this.month,
        date: moment(day, DAY_FORMAT).toDate(),
        events: filter(this.events, event => {
          return event && event.startsAt && moment(event.startsAt).format(DAY_FORMAT) === day
        }),
        selected: day === this.selectedDay
      }))
    },
    weekDays () {
      return generateWeekDays()
    }
  },
  components: {
    'calendar-date': CalendarDate
  },
  methods: {
    formatMonth (month) {
      return moment(month, MONTH_FORMAT).format('MMMM YYYY')
    }
  }
}
</script>

<style scoped>
.calendar-month {
  width: 100%;
  height: 100%;
}

.title {
  height: 75px;
  font-size: 30px;
  text-align: center;
  color: #42b983;
  display: flex;
  justify-content: center;
  align-items: center;
}

.week-days {
  height: 25px;
  width: 100%;
}
.week-day {
  display: inline-block;
  text-align: center;
  width: calc(100% / 7 - 2px);
  margin-bottom: 10px;
}

.days {
  height: calc(100% - 110px);
  width: 100%;
}
</style>
