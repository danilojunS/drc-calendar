<template>
  <div
    :class="{
      'calendar-date': true,
      'calendar-date--selected': selected
    }"
    :style="{
      width,
      height
    }"
    @click="onClick(date)"
  >
    <div class="container">
      <div class="day">
        {{ formatDate(date) }}
      </div>
      <div class="events">
        <div class="event" v-for="(event, index) in events" :key="index">
          <label class="start-time" v-if="event.startsAt">
            {{ formatStartTime(event.startsAt) }}
          </label>
          <label class="event-title">
            {{ event.title }}
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import VueTypes from 'vue-types'

export default {
  name: 'CalendarDate',
  props: {
    date: VueTypes.instanceOf(Date).isRequired,
    onClick: VueTypes.func.def(console.log),
    width: VueTypes.string.def('200px'),
    height: VueTypes.string.def('200px'),
    events: VueTypes.arrayOf(VueTypes.shape({
      title: VueTypes.string.isRequired,
      startsAt: Date,
      endsAt: Date,
    })),
    selected: VueTypes.bool.def(false)
  },
  methods: {
    formatDate (date) {
      return date && moment(date).format('DD')
    },
    formatStartTime (startsAt) {
      return startsAt && moment(startsAt).format('HH:mm') || ''
    }
  }
}
</script>

<style scoped>
.calendar-date {
  border: 1px solid #e0e0e0;
  cursor: pointer;
}
.calendar-date--selected {
  border: 1px solid #42b983;
}

.container {
  position: relative;
  width: 100%;
  height: 100%;
}

.day {
  font-size: 1em;
  padding: 10px;
}

.events {
  position: absolute;
  top: 40px;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-y: auto;
}

.event {
  font-size: 0.8em;
  padding: 4px 10px;
}

.start-time {
  font-weight: bold;
}
</style>
