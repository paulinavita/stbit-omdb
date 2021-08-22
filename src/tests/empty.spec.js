import React from 'react';
import {cleanup, render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const init = () => {
  cleanup()
  jest.resetModules()

  const Empty = require('../components/Empty').default
  const wrapper = render(<Empty></Empty>)
  return { wrapper }
}

describe('Component: Empty', () => {
  test('Render: default render', () => {
    const { wrapper } = init()
    expect(wrapper.getByTestId('empty-comp')).toHaveClass('empty');
  })
  
})

