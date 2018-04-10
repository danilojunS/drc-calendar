import assert from 'assert'
import { times } from 'lodash'
import moment from 'moment'

import { MONTH_FORMAT, DAY_FORMAT } from './constants'

const generateDaysOfMonth = month => {
  assert(/[0-9]{4}-[0-9]{2}/.test(month), `month must have format ${MONTH_FORMAT}`)

  const firstDayOfMonth = moment(month, MONTH_FORMAT).startOf('month').startOf('day')
  const lastDayOfMonth = moment(month, MONTH_FORMAT).endOf('month').startOf('day')

  const numberOfDaysInMonth = lastDayOfMonth.diff(firstDayOfMonth, 'days') + 1

  return times(numberOfDaysInMonth).map(day => {
    return moment(`${month}-${day + 1}`, `${MONTH_FORMAT}-D`)
      .startOf('day')
      .format(DAY_FORMAT)
  })
}

export default generateDaysOfMonth
