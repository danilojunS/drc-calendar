import assert from 'assert'
import { times, shuffle, sortBy } from 'lodash'
import moment from 'moment'

const DATE_FORMAT = 'YYYY-MM-DD'

const verbs = ['Get', 'Eet', 'Eat', 'Drink', 'Sleep', 'Watch']
const adverbs = ['slowly', 'quickly', 'faster', 'nicely', 'perfectly']
const nouns = ['fish', 'grass', 'books', 'banana', 'clock', 'car', 'dvd']

// from https://stackoverflow.com/questions/9035627/elegant-method-to-generate-array-of-random-dates-within-two-dates
const randomDate = (start, end) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}

const randomTitle = () => {
  const randomVerb = shuffle(verbs).pop()
  const randomNoun = shuffle(nouns).pop()
  const randomAdverb = shuffle(adverbs).pop()

  return `${randomVerb} ${randomNoun} ${randomAdverb}`
}

const generateMockEvents = (year, numberOfEvents = 100) => {
  assert(/[0-9]{4}/.test(year), 'year must have format YYYY')
  assert(typeof numberOfEvents === 'number' && numberOfEvents > 0, 'numberOfEvents must be a positive number')

  const firstDayOfYear = moment(`${year}-01-01`, DATE_FORMAT).toDate()
  const lastDayOfYear = moment(`${year}-12-31`, DATE_FORMAT).toDate()

  return sortBy(times(numberOfEvents).map(time => {
    const startsAt = randomDate(firstDayOfYear, lastDayOfYear)
    return {
      title: randomTitle(),
      startsAt,
      endsAt: moment(startsAt).add(Math.random() * 24 * 60, 'minutes').toDate()
    }
  }), event => event.startsAt.getTime())
}

export default generateMockEvents
