const { add } = require('../add')

describe('test a test', () => {
  test('add two numbers', () => {
    expect(add(1, 2)).toBe(3)
  })
})
