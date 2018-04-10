<template>
  <div
    :class="[{
      'agenda': true
    }, className]"
    :style="{
      width
    }"
  >
    <div class="title">
      {{ year }}
    </div>
    <div class="days">
      <agenda-date
        v-for="(day, index) in days"
        :key="index"
        :date="day.date"
        :events="day.events"
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
    onDateSelected: VueTypes.func.def(console.log),
    width: VueTypes.string.def('100%'),
    events: VueTypes.arrayOf(VueTypes.shape({
      title: VueTypes.string.isRequired,
      startsAt: Date,
      endsAt: Date,
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
        }))
    }
  }
}
</script>

<style scoped>
.agenda-date {
  border: 1px solid #e0e0e0;
  cursor: pointer;
  display: inline-block;
}
.title {
  font-size: 50px;
  text-align: right;
  padding: 20px;
  color: #42b983;
}
</style>
