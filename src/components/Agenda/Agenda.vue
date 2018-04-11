<template>
  <div
    :class="[{
      'agenda': true
    }, className]"
    ref="agenda"
  >
    <div class="title">
      Agenda {{ year }}
    </div>
    <div class="days" ref="days">
      <agenda-date
        v-for="(day, index) in days"
        :key="index"
        :date="day.date"
        :events="day.events"
        :selected="day.selected"
        :onClick="onDateSelected"
      />
    </div>
  </div>
</template>

<script>
import {
  filter,
  countBy,
  map,
  sortBy,
  first
} from 'lodash'
import moment from 'moment'

import VueTypes from 'vue-types'

import AgendaDate from '../AgendaDate'

import generateDaysOfYear from './utils/generate-days-of-year.js'

export default {
  name: 'Agenda',
  props: {
    year: VueTypes.string.isRequired,
    selectedDay: VueTypes.string,
    onDateSelected: VueTypes.func.def(console.log),
    selectedMonth: VueTypes.string,
    selectMonth: VueTypes.func.def(console.log),
    events: VueTypes.arrayOf(VueTypes.shape({
      title: VueTypes.string.isRequired,
      startsAt: Date,
      endsAt: Date
    })),
    className: VueTypes.string
  },
  components: {
    'agenda-date': AgendaDate
  },
  computed: {
    days () {
      return generateDaysOfYear(this.year)
        .map(day => ({
          date: moment(day, 'YYYY-MM-DD').toDate(),
          events: filter(this.events, event => {
            return event &&
              event.startsAt &&
              moment(event.startsAt).format('YYYY-MM-DD') === day
          }),
          selected: moment(day, 'YYYY-MM-DD').format('YYYY-MM-DD') === this.selectedDay
        }))
    }
  },
  methods: {
    scrollToSelectedDay (selectedDay, behavior = 'smooth', block = 'nearest') {
      if (!selectedDay) return

      const selectedDayIndex = Number(moment(selectedDay).format('DDD')) - 1
      const dayToScroll = this.$refs.days.children[selectedDayIndex]
      dayToScroll.scrollIntoView({
        block,
        behavior
      })
    }
  },
  watch: {
    selectedDay (newSelectedDay) {
      this.scrollToSelectedDay(newSelectedDay)
    }
  },
  mounted () {
    // automatically scroll to selectedDay
    this.scrollToSelectedDay(this.selectedDay, 'instant', 'start')

    // adapted from https://gist.github.com/jjmu15/8646226
    const isInViewportVertical = element => {
      const rect = element.getBoundingClientRect()
      const html = document.documentElement
      return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || html.clientHeight)
      )
    }

    // automatically select month based on agenda position
    this.$refs.agenda.onscroll = () => {
      const visibleDays = Array.from(this.$refs.days.children).filter(day => {
        return isInViewportVertical(day)
      })
      const months = visibleDays.map(day => {
        const title = day.querySelector('.title').textContent || '' // Mon, Jan 1st
        return title.trim().split(' ')[1] // Jan
      })
      const countMonths = countBy(months) // { Jan: 1, Feb: 6 }
      const countMonthsSorted = sortBy(
        map(countMonths, (occurences, month) => ({
          occurences,
          month
        })),
        month => month.occurences
      )
        .reverse()

      const monthToSelect = moment()
        .month(first(countMonthsSorted).month)
        .format('YYYY-MM')

      if (monthToSelect !== this.selectedMonth) {
        this.selectMonth(monthToSelect)
      }
    }
  }
}
</script>

<style scoped>
.agenda {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
.title {
  font-size: 3vw;
  text-align: right;
  color: #42b983;
  height: 100px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 38px;
}
</style>
