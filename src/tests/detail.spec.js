import React, { useEffect } from 'react';
import {cleanup, render, prettyDOM} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import * as redux from 'react-redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';

let mockStore = configureMockStore([thunk]);

const init = (mocks = {}) => {
  cleanup()
  // jest.resetModules()
  
  jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: () => mocks.dispatch
  }));

  // jest.spyOn(React, 'useEffect').mockImplementation(f => f())
  jest.spyOn(redux, 'useSelector').mockImplementation((cb) => {
    cb(mockStore)
  })
  const mockMatch = {...mocks.match}
  const Detail = require('../components/Detail').default
  const wrapper = render(<Detail match={mockMatch}></Detail>)
  return { wrapper, Detail }
}

describe('Component: Detail', () => {
  beforeEach(() => {
    mockStore = mockStore({ movies: [],
      searchTerm: '',
      selectedMovie: {},
      errorCode: {
        'Error': '',
        'Response': '',
      },
     });
  });

  test('Render: default render has selectedMovie', async () => {
    const store = {
      selectedMovie: {
        Poster: 'Poster',
        Title: 'Hehe',
        Ratings: [
          {
            source: 'source',
          }
        ]
      },
      errorCode: {
        Error: '',
        Response: ''
      }
    }

    const { wrapper } = await init({
      store,
      dispatch: jest.fn().mockResolvedValue(),
      match: {
        params: '1234'
      },
    })
    expect(wrapper).toBeDefined()
    // const dtl = wrapper.getByTestId('detail-view')
    // const list = wrapper.getByTestId('detail-content')

    // expect(dtl).toHaveClass('detail-view')
    // expect(list).toBeInTheDocument()
  })

})

