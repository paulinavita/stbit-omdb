const init = (mocks = {}) => {
  jest.mock('redux', () => ({
    combineReducers: jest.fn().mockReturnValue({ omdb: {} }),
  }))

  const index = require('../../reducers/index.js').default
  return index
}
describe('Reducer: index', () => {
  test('Method: reducer runs', () => {
    const red = init()
    expect(red).toMatchObject({ omdb: {} })
  })
})
