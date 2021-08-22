import React from 'react';
import {cleanup, render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const init = (mocks) => {
  cleanup()
  jest.resetModules()
  const props = {
    ...mocks.props
  }

  const Rating = require('../components/Rating').default
  const wrapper = render(<Rating rating={props}></Rating>)
  return { wrapper }
}

describe('Component: 404', () => {
  test('Render: default render', () => {
    const { wrapper } = init({
      props: {
        Source: 'Source',
        Value: 'Value'
      },
    })
    expect(wrapper.getByTestId('rating')).toHaveTextContent('Source')
  })
  
})

