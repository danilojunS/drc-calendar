import {
  times,
  first,
  last
} from 'lodash'
import moment from 'moment'

import { DAY_FORMAT } from './constants'
import generateDaysOfMonth from './generate-days-of-month'

const generateDaysOfMonthWithPlaceholders = month => {
  const daysOfMonth = generateDaysOfMonth(month).map(day => {
    return moment(day, DAY_FORMAT).startOf('day')
  })

  const firstDayOfMonth = first(daysOfMonth)
  const lastDayOfMonth = last(daysOfMonth)

  const numberOfPlaceholdersToPrepend = Number(firstDayOfMonth.format('d'))
  const numberOfPlaceholdersToAppend = 6 - Number(lastDayOfMonth.format('d'))

  const daysToPrepend = times(numberOfPlaceholdersToPrepend)
    .map(time => {
      return moment(firstDayOfMonth).subtract(time + 1, 'days')
    })
    .reverse()
  const daysToAppend = times(numberOfPlaceholdersToAppend)
    .map(time => {
      return moment(lastDayOfMonth).add(time + 1, 'days')
    })

  const daysOfMonthWithPlaceholders = [].concat(daysToPrepend, daysOfMonth, daysToAppend)
    .map(day => day.format(DAY_FORMAT))

  return daysOfMonthWithPlaceholders
}

export default generateDaysOfMonthWithPlaceholders
