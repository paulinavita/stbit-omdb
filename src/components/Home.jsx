import React, { useState, useCallback } from 'react';
import { fetchMovies, setMoviesEmpty, setClearError } from '../actions';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import useInfiniteScroll from "../helpers/useInfiniteScroll";
import Card from './Card';
import Container from './Container';
import SearchInput from './SearchInput';
import Loading from './Loading';
import Empty from './Empty';

export default function Home() {
  // Imports
  const dispatch = useDispatch();
  const history = useHistory();

  // States
  const movies = useSelector((state) => state.omdb.movies || [])
  const errorCode = useSelector((state) => state.omdb.errorCode)
  const [page, setPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const [isFetching, setIsFetching] = useInfiniteScroll(setMoreMovies);
  
  // Methods
  const isMinSearchLength = searchTerm.length <= 2
  const isEmptyState = errorCode.Error === '' && isMinSearchLength
  const handleDetailClick = (id) => {
    history.push(`details/${id}`);
  }
  
  async function setMoreMovies () {
    setPage((prev) => prev + 1);
    !isMinSearchLength && await dispatch(fetchMovies(page, searchTerm))

    setIsFetching(false)
  }

  const setMovies = useCallback(async (clear) => {
    try {
      if (clear || isMinSearchLength) return dispatch(setMoviesEmpty())

      setIsFetching(true)
      await dispatch(fetchMovies(page, searchTerm))
      setIsFetching(false)
      
    } catch (error) {
      setIsFetching(false)
    }
  }, [dispatch, isMinSearchLength, searchTerm, page, setIsFetching])

  const handleKeyUp = (e) => {
    const v = e.target.value
    setSearchTerm(v)
  }
  const handleSearchClick = () => {
    if (searchTerm === '') {
      dispatch(setClearError())
    }

    setPage(1)
    setIsFetching(true)
    setMovies(true)
  }

  const renderResult = () => {
    if (errorCode?.Response === 'False') {
      return (<Container wide={true}><Empty msg={errorCode?.Error}></Empty></Container>)
    }

    return (<Container>
      {(
      movies && movies.map((mov) => {
          return (<Card key={mov.imdbID} movie={mov} handleClick={handleDetailClick}></Card>)
        }) 
      )}
    </Container>)
  }
  
  return (
    <div data-testid="home-view">
      <Container wide={true}>
        <SearchInput
          value={searchTerm}
          onChange={(e) => handleKeyUp(e)}
          onClick={handleSearchClick}
        />
      </Container>
      {
        isEmptyState 
          ? (<Container wide={true}><Empty msg={'Type minimum 2 characters and click the button'}></Empty></Container>)
          : renderResult()    
      }
      { isFetching && <Container wide={true}><Loading /></Container> }
    </div>
  )
}