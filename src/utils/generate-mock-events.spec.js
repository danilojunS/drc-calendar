import moment from 'moment'

import generateMockEvents from './generate-mock-events'

describe('generate-mock-events.js', () => {
  it('should generate number of events passed to function', () => {
    const events = generateMockEvents('2018', 123)
    expect(events).toHaveLength(123)
    events.forEach(event => {
      expect(typeof event.title).toBe('string')
      expect(event.startsAt).toBeInstanceOf(Date)
      expect(event.endsAt).toBeInstanceOf(Date)
    })
  })
  it('should generate events in the year passed to function', () => {
    const events = generateMockEvents('2018', 123)
    events.forEach(event => {
      expect(typeof event.title).toBe('string')
      expect(event.startsAt).toBeInstanceOf(Date)
      expect(event.endsAt).toBeInstanceOf(Date)
      expect(moment(event.startsAt).format('YYYY')).toBe('2018')
      expect(moment(event.endsAt).format('YYYY')).toBe('2018')
    })
  })
  it('should throw error if any input is not valid', () => {
    expect(() => {
      generateMockEvents('201', 10)
    }).toThrow()
    expect(() => {
      generateMockEvents('2018', 'not a number')
    }).toThrow()
  })
})
