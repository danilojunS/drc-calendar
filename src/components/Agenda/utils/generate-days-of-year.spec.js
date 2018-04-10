import { first, last } from 'lodash'

import generateDaysOfYear from './generate-days-of-year'

const dayRegex = /[0-9]{4}-[0-9]{2}-[0-9]{2}/

describe('generate-days-of-year.js', () => {
  it('should generate 365 days with correct format on a normal year', () => {
    const days = generateDaysOfYear('2018')
    expect(days).toHaveLength(365)
    days.forEach(day => {
      expect(day).toMatch(dayRegex)
    })
    expect(first(days)).toBe('2018-01-01')
    expect(last(days)).toBe('2018-12-31')
  })
  it('should generate 365 days with correct format on a leap year', () => {
    const days = generateDaysOfYear('2020')
    expect(days).toHaveLength(366)
    days.forEach(day => {
      expect(day).toMatch(dayRegex)
    })
    expect(first(days)).toBe('2020-01-01')
    expect(last(days)).toBe('2020-12-31')
  })
  it('should throw error if year format is incorrect', () => {
    expect(() => {
      generateDaysOfYear('1')
    }).toThrow()
  })
})
