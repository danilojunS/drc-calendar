import assert from 'assert'
import moment from 'moment'
import { times } from 'lodash'

import { YEAR_FORMAT } from './constants'

const generateDaysOfYear = year => {
  assert(/[0-9]{4}/.test(year), `year must have format ${YEAR_FORMAT}`)

  const dayFormat = `${YEAR_FORMAT}-MM-DD`
  const firstDayOfTheYearString = `${year}-01-01`

  const firstDayOfYear = moment(firstDayOfTheYearString, dayFormat).startOf('year')
  const lastDayOfYear = moment(firstDayOfTheYearString, dayFormat).endOf('year')

  const numberOfDaysToCreate = lastDayOfYear.diff(firstDayOfYear, 'days') + 1

  const daysOfYear = times(numberOfDaysToCreate).map(day => {
    return moment(firstDayOfTheYearString, dayFormat)
      .add(day, 'days')
      .format(dayFormat)
  })

  return daysOfYear
}

export default generateDaysOfYear
