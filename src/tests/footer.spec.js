import React from 'react';
import {cleanup, render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const init = () => {
  cleanup()
  jest.resetModules()

  const Footer = require('../components/Footer').default
  const wrapper = render(<Footer></Footer>)
  return { wrapper }
}

describe('Component: Footer', () => {
  test('Render: default render', () => {
    const { wrapper } = init()
    expect(wrapper.getByTestId('footer')).toHaveClass('footer');
  })
  
})

