import React from 'react';
import {cleanup, render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const init = () => {
  cleanup()
  jest.resetModules()

  const Layout = require('../components/Layout').default
  const wrapper = render(<Layout><div></div></Layout>)
  return { wrapper }
}

describe('Component: Layout', () => {
  test('Render: default render', () => {
    const { wrapper } = init()
    expect(wrapper.getByTestId('layout')).toBeVisible();
  })
})

