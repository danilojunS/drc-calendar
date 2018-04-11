<template>
  <div
    :class="[{
      'agenda': true
    }, className]"
  >
    <div class="title">
      Agenda {{ year }}
    </div>
    <div class="days">
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
import { filter } from 'lodash'
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
  font-size: 50px;
  text-align: right;
  padding: 22px;
  color: #42b983;
}
</style>
