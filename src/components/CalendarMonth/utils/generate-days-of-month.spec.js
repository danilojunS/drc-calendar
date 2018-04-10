import generateDaysOfMonth from './generate-days-of-month'

const dayRegex = /[0-9]{4}-[0-9]{2}-[0-9]{2}/

const daysOfMarch = [
  '2018-03-01',
  '2018-03-02',
  '2018-03-03',
  '2018-03-04',
  '2018-03-05',
  '2018-03-06',
  '2018-03-07',
  '2018-03-08',
  '2018-03-09',
  '2018-03-10',
  '2018-03-11',
  '2018-03-12',
  '2018-03-13',
  '2018-03-14',
  '2018-03-15',
  '2018-03-16',
  '2018-03-17',
  '2018-03-18',
  '2018-03-19',
  '2018-03-20',
  '2018-03-21',
  '2018-03-22',
  '2018-03-23',
  '2018-03-24',
  '2018-03-25',
  '2018-03-26',
  '2018-03-27',
  '2018-03-28',
  '2018-03-29',
  '2018-03-30',
  '2018-03-31'
]

describe('generate-days-of-month.js', () => {
  it('should generate 31 days with correct format in January/2018', () => {
    const days = generateDaysOfMonth('2018-01')
    expect(days).toHaveLength(31)
    days.forEach(day => {
      expect(day).toMatch(dayRegex)
    })
  })
  it('should generate 28 days with correct format in February/2018', () => {
    const days = generateDaysOfMonth('2018-02')
    expect(days).toHaveLength(28)
    days.forEach(day => {
      expect(day).toMatch(dayRegex)
    })
  })
  it('should generate 29 days with correct format in February/2020 (leap year)', () => {
    const days = generateDaysOfMonth('2020-02')
    expect(days).toHaveLength(29)
    days.forEach(day => {
      expect(day).toMatch(dayRegex)
    })
  })
  it('should generate correct days of March/2018', () => {
    const days = generateDaysOfMonth('2018-03')
    expect(days).toMatchObject(daysOfMarch)
  })
  it('should throw error if month format is incorrect', () => {
    expect(() => {
      generateDaysOfMonth('2018-1')
    }).toThrow()
  })
})
