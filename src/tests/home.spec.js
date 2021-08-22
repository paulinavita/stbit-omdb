import React from 'react';
import {cleanup, render, prettyDOM, act} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import * as redux from 'react-redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import userEvent from '@testing-library/user-event';

let mockStore = configureMockStore([thunk]);

const init = (mocks = {}) => {
  cleanup()
  
  jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: () => mocks.dispatch
  }));

  const mockDispatch = mocks.dispatch
  redux.useDispatch = jest.fn().mockImplementation(() => mockDispatch);
  jest.spyOn(React, 'useEffect').mockImplementation(f => f())
  jest.spyOn(redux, 'useSelector').mockImplementation((cb) => {
    cb(mockStore)
  })

  const Home = require('../components/Home').default
  const wrapper = render(<Home></Home>)
  return { wrapper, Home }
}

describe('Component: Home', () => {
  test('Render: default render', async () => {
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

    const { wrapper } = await init({ store })
    expect(wrapper.getByTestId('home-view')).toBeDefined()
  })
})

