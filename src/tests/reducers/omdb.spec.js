const init = (mocks = {}) => {
  jest.clearAllMocks()
  const initialState = {
    movies: [],
    searchTerm: '',
    selectedMovie: {},
    errorCode: {
      'Error': '',
      'Response': '',
    },
  };

  const omdb = require('../../reducers/omdb.js').default
  return { omdb, initialState }
}
describe('Reducer: index', () => {
  test('Method: reducer SET_MOVIES', () => {
    const { omdb, initialState } = init()
    const act = {
      type: 'SET_MOVIES',
      payload: [ { title: 'new_title' } ]
    }
    const actionReturn = omdb(initialState, act)
    expect(actionReturn).toMatchObject({"errorCode": {"Error": "", "Response": ""}, "movies": [{"title": "new_title"}], "searchTerm": "", "selectedMovie": {}})
  })

  test('Method: reducer SET_MOVIES_EMPTY', () => {
    const { omdb, initialState } = init()
    const act = {
      type: 'SET_MOVIES_EMPTY',
      payload: [ { title: 'new_title' } ]
    }
    const actionReturn = omdb(initialState, act)
    expect(actionReturn).toMatchObject({"errorCode": {"Error": "", "Response": ""}, "movies": [], "searchTerm": "", "selectedMovie": {}})
  })

  test('Method: reducer SET_MOVIES_ERROR', () => {
    const { omdb, initialState } = init()
    const act = {
      type: 'SET_MOVIES_ERROR',
      payload: {
        errorCode: {
        'Error': 'ini_error',
        'Response': 'resp_fail',
        }
      }
    }
    const actionReturn = omdb(initialState, act)
    expect(actionReturn).toStrictEqual({"errorCode": {"errorCode": {"Error": "ini_error", "Response": "resp_fail"}}, "movies": [], "searchTerm": "", "selectedMovie": {}})
  })

  test('Method: reducer SET_SELECTED_MOVIE', () => {
    const { omdb, initialState } = init()
    const act = {
      type: 'SET_SELECTED_MOVIE',
      payload: {
        Title: '500 days of summer',
        Ratings: [{Source: 'imdb'}],
        Poster: 'http://mocks'
      }
    }
    const actionReturn = omdb(initialState, act)
    expect(actionReturn).toStrictEqual({"errorCode": {"Error": "", "Response": ""}, "movies": [], "searchTerm": "", "selectedMovie": {"Poster": "http://mocks", "Ratings": [{"Source": "imdb"}], "Title": "500 days of summer"}})
  })

  test('Method: reducer OTHER', () => {
    const { omdb, initialState } = init()
    const act = {
      type: 'OTHER',
      payload: {
        test: 'payload'
      }
    }
    const actionReturn = omdb(initialState, act)
    expect(actionReturn).toBe(initialState)
  })

})
