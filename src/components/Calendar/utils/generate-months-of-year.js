import { times } from 'lodash'
import assert from 'assert'
import moment from 'moment'

import { YEAR_FORMAT } from './constants'

const generateMonthsOfYear = year => {
  assert(/[0-9]{4}/.test(year), `year must have format ${YEAR_FORMAT}`)

  return times(12).map(month => {
    return moment(`${year}-${month + 1}-01`, `${YEAR_FORMAT}-M-DD`).format('YYYY-MM')
  })
}

export default generateMonthsOfYear
