import React from 'react';
import {cleanup, render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const init = () => {
  cleanup()
  jest.resetModules()

  const SearchInput = require('../components/SearchInput').default
  const wrapper = render(<SearchInput></SearchInput>)
  return { wrapper }
}

describe('Component: SearchInput', () => {
  test('Render: default render', () => {
    const { wrapper } = init()
    expect(wrapper.getByText('FIND YOUR FAVORITE MOVIE')).toBeVisible();
  })
  
})

