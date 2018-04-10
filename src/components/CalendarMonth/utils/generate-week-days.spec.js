import generateWeekDays from './generate-week-days'

describe('generate-week-days.js', () => {
  it('should generate 7 week days, from Sunday to Saturday', () => {
    const weekDays = generateWeekDays()
    expect(weekDays).toHaveLength(7)
    expect(weekDays).toMatchObject([
      'Sun',
      'Mon',
      'Tue',
      'Wed',
      'Thu',
      'Fri',
      'Sat'
    ])
  })
})
