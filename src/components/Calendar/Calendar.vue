<template>
  <div
    :class="[{
      'calendar': true
    }, className]"
  >
    <div class="controls">
      <div class="previous-month" @click="previousMonth()" v-if="shouldShowPrevious()"></div>
      <div class="next-month" @click="nextMonth()" v-if="shouldShowNext()"></div>
    </div>
    <div class="months">
      <calendar-month
        v-show="isMonthSelected(month)"
        v-for="(month, index) in months"
        :key="index"
        :month="month"
        :onDateSelected="onDateSelected"
        :selectedDay="selectedDay"
        :events="events"
      />
    </div>
  </div>
</template>

<script>
import { filter, first, indexOf, size } from 'lodash'
import moment from 'moment'

import VueTypes from 'vue-types'

import CalendarMonth from '../CalendarMonth'

import generateMonthsOfYear from './utils/generate-months-of-year.js'

export default {
  name: 'Calendar',
  props: {
    year: VueTypes.string.isRequired,
    selectedMonth: VueTypes.string.isRequired,
    selectMonth: VueTypes.func.isRequired,
    selectedDay: VueTypes.string,
    onDateSelected: VueTypes.func.def(console.log),
    events: VueTypes.arrayOf(VueTypes.shape({
      title: VueTypes.string.isRequired,
      startsAt: Date,
      endsAt: Date,
    })),
    className: VueTypes.string
  },
  components: {
    'calendar-month': CalendarMonth
  },
  methods: {
    isMonthSelected (month) {
      return this.selectedMonth === month
    },
    shouldShowNext () {
      return indexOf(this.months, this.selectedMonth) < size(this.months) - 1
    },
    shouldShowPrevious () {
      return indexOf(this.months, this.selectedMonth) > 0
    },
    previousMonth () {
      this.selectMonth(this.months[indexOf(this.months, this.selectedMonth) - 1])
    },
    nextMonth () {
      this.selectMonth(this.months[indexOf(this.months, this.selectedMonth) + 1])
    }
  },
  computed: {
    months () {
      return generateMonthsOfYear(this.year)
    }
  }
}
</script>

<style scoped>
.calendar {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}

.controls {
  position: relative;
}
.previous-month {
  position: absolute;
  top: 20px;
  left: 10px;
  cursor: pointer;
  width: 0;
  height: 0;
  border-top: 12px solid transparent;
  border-bottom: 12px solid transparent;
  border-right: 12px solid #42b983;
}
.next-month {
  position: absolute;
  top: 20px;
  right: 10px;
  cursor: pointer;
  width: 0;
  height: 0;
  border-top: 12px solid transparent;
  border-bottom: 12px solid transparent;
  border-left: 12px solid #42b983;
}
</style>
