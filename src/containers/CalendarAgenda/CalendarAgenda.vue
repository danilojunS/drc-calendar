<template>
  <div
    :class="[{
      'calendar-agenda': true
    }, className]"
  >
    <calendar
      :year="year"
      :events="events"
      :selectedMonth="selectedMonth"
      :selectMonth="selectMonth"
      :selectedDay="selectedDay"
      :onDateSelected="onDateSelected"
      className="calendar"
    />
    <agenda
      :year="year"
      :selectedDay="selectedDay"
      :onDateSelected="onDateSelected"
      :selectedMonth="selectedMonth"
      :selectMonth="selectMonth"
      :events="events"
      className="agenda"
    />
  </div>
</template>

<script>
import moment from 'moment'

import VueTypes from 'vue-types'

import Calendar from '../../components/Calendar'
import Agenda from '../../components/Agenda'

export default {
  name: 'CalendarAgenda',
  props: {
    year: VueTypes.string.isRequired,
    events: VueTypes.arrayOf(VueTypes.shape({
      title: VueTypes.string.isRequired,
      startsAt: Date,
      endsAt: Date
    })),
    className: VueTypes.string
  },
  methods: {
    selectMonth (month) {
      this.selectedMonth = month
    },
    onDateSelected (date) {
      this.selectedDay = moment(date).format('YYYY-MM-DD')
      this.selectedMonth = moment(date).format('YYYY-MM')
    }
  },
  data () {
    return {
      selectedMonth: moment().format('YYYY-MM'),
      selectedDay: moment().format('YYYY-MM-DD')
    }
  },
  components: {
    'calendar': Calendar,
    'agenda': Agenda
  }
}
</script>

<style scoped>
.calendar-agenda {
  display: flex;
  justify-content: space-around;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
}

.calendar-agenda .calendar {
  width: 70%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
}

.calendar-agenda .agenda {
  width: 30%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
}
</style>
