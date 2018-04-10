import generateMonthsOfYear from './generate-months-of-year'

describe('generate-months-of-year', () => {
  it('should generate 12 months of year with correct format', () => {
    const months = generateMonthsOfYear('2018')
    expect(months).toHaveLength(12)
    months.forEach(month => {
      expect(month).toMatch(/[0-9]{4}-[0-9]{2}/)
    })
  })
  it('should throw error if month format is incorrect', () => {
    expect(() => {
      generateMonthsOfYear('1')
    }).toThrow()
  })
})
