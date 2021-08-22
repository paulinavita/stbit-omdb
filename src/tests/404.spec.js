import React from 'react';
import {cleanup, render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const init = (mocks = {}) => {
  cleanup()
  jest.resetModules()

  const NotFound = require('../components/404').default
  const wrapper = render(<NotFound text={mocks.props}></NotFound>)
  return { wrapper }
}

describe('Component: 404', () => {
  test('Render: default render', () => {
    const { wrapper } = init({
      props: 'Page'
    })
    expect(wrapper.getByTestId('not-found')).toHaveTextContent('Page Not Found')
  })
  
})

