import { times } from 'lodash'
import moment from 'moment'

import generateDaysOfMonthWithPlaceholders from './generate-days-of-month-with-placeholders'

const daysOfJanuaryWithPlaceholders = [
  '2017-12-31',
  '2018-01-01',
  '2018-01-02',
  '2018-01-03',
  '2018-01-04',
  '2018-01-05',
  '2018-01-06',
  '2018-01-07',
  '2018-01-08',
  '2018-01-09',
  '2018-01-10',
  '2018-01-11',
  '2018-01-12',
  '2018-01-13',
  '2018-01-14',
  '2018-01-15',
  '2018-01-16',
  '2018-01-17',
  '2018-01-18',
  '2018-01-19',
  '2018-01-20',
  '2018-01-21',
  '2018-01-22',
  '2018-01-23',
  '2018-01-24',
  '2018-01-25',
  '2018-01-26',
  '2018-01-27',
  '2018-01-28',
  '2018-01-29',
  '2018-01-30',
  '2018-01-31',
  '2018-02-01',
  '2018-02-02',
  '2018-02-03'
]

describe('generate-days-of-month-with-placeholders.js', () => {
  it('should always generate 35 days of month with placeholders', () => {
    const months = times(12).map(month => {
      return moment(`2018-${month + 1}`, 'YYYY-M')
    })

    months.forEach(month => {
      const daysOfMonthWithPlaceholders = generateDaysOfMonthWithPlaceholders('2018-01')
      expect(daysOfMonthWithPlaceholders).toHaveLength(35)
    })
  })
  it('should generate January/2018 days of month with placeholders', () => {
    const daysOfMonthWithPlaceholders = generateDaysOfMonthWithPlaceholders('2018-01')
    expect(daysOfMonthWithPlaceholders).toMatchObject(daysOfJanuaryWithPlaceholders)
  })
  it('should throw error if month format is incorrect', () => {
    expect(() => {
      generateDaysOfMonthWithPlaceholders('2018-1')
    }).toThrow()
  })
})
