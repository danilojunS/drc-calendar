<template>
  <div
    :class="[{
      'agenda-date': true
    }, className]"
    :style="{
      width
    }"
    @click="onClick(date)"
  >
    <div class="title">
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
</template>

<script>
import moment from 'moment'
import VueTypes from 'vue-types'

export default {
  name: 'AgendaDate',
  props: {
    date: VueTypes.instanceOf(Date).isRequired,
    onClick: VueTypes.func.def(console.log),
    width: VueTypes.string.def('100%'),
    events: VueTypes.arrayOf(VueTypes.shape({
      title: VueTypes.string.isRequired,
      startsAt: Date,
      endsAt: Date,
    })),
    className: VueTypes.string
  },
  methods: {
    formatDate (date) {
      return moment(date).format('ddd, MMM Do')
    },
    formatStartTime (startsAt) {
      return startsAt && moment(startsAt).format('HH:mm') || ''
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
  background: #e0e0e0;
  font-size: 20px;
  padding: 8px;
}

.events {
  font-size: 14px;
  padding: 4px;
  min-height: 10px;
}

.event {
  margin: 4px;
}

.event:hover .start-time,
.event:hover .event-title {
  color: #42b983;
  cursor: pointer;
}

.start-time {
  font-weight: bold;
}
</style>
