import { times } from 'lodash'
import moment from 'moment'

const generateWeekDays = () => {
  return times(7).map(weekDay => moment().day(weekDay).format('ddd'))
}

export default generateWeekDays
