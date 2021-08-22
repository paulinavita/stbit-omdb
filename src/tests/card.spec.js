import React from 'react';
import { render, fireEvent, screen, waitFor, cleanup, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Component: Card', () => {
  afterEach(cleanup);
  test('Render: default render', () => {
    const props = {
      movie: {
        Poster: 'poster',
        Title: 'title',
        Year: 'year',
      },
      handleClick: jest.fn(),
    }
    const Card = require('../components/Card').default
    const w = render(<Card movie={props.movie} handleClick={props.handleClick}></Card>)
    const c = w.getByTestId('list-card')
    expect(c).toHaveClass('card-item')
    expect(c).toHaveTextContent('year')
    expect(c).toHaveTextContent('title')
  })

  test('Method: handleClick', () => {
    const mockHandleClick = jest.fn()
    const props = {
      movie: {
        Poster: 'poster',
        Title: 'title',
        Year: 'year',
        imdbID: 'imdbID123'
      },
      handleClick: mockHandleClick,
    }
    const Card = require('../components/Card').default
    const w = render(<Card movie={props.movie} handleClick={props.handleClick}></Card>)
    const section = w.getByTestId('section-gotodetail')
    fireEvent.click(section)
    expect(mockHandleClick).toBeCalledWith('imdbID123')
  })

  test('Method: setIsPopupOpen', () => {
    const mockHandleClick = jest.fn()
    const mockSetState = jest.fn();

    const props = {
      movie: {
        Poster: 'poster',
        Title: 'title',
        Year: 'year',
        imdbID: 'imdbID123'
      },
      handleClick: mockHandleClick,
    }
    jest.spyOn(React, 'useState').mockImplementation(initial => [initial, mockSetState]);

    const Card = require('../components/Card').default
    const w = render(<Card movie={props.movie} handleClick={props.handleClick}></Card>)

    jest.mock('react', () => ({
      useState: initial => [initial, mockSetState]
    }));

    const section = w.queryByTestId('popup-card')
    act(() => {
      fireEvent.click(section);
    });   
    // TODO: Update expect 
    // expect(w.queryByTestId('popup-card-open')).toBeVisible();
  })


})

