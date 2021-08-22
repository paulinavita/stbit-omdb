import React, { useCallback, useState, useEffect } from 'react';
import Container from './Container';
import Rating from './Rating';
import Empty from './Empty';
import { useDispatch, useSelector } from "react-redux";
import { setSelectedMovie } from '../actions';
import Loading from './Loading';

export default function Detail(props) {
  // Imports
  const dispatch = useDispatch();
  const queryId = props.match.params.movieId || '';

  // States
  const selectedMovie = useSelector((state) => state.omdb.selectedMovie || [])
  const errorCode = useSelector((state) => state.omdb.errorCode)
  const [isLoading, setIsLoading] = useState(false);

  const fetchSelectedMovie = useCallback(async () => {
    try {
      setIsLoading(true)
      await dispatch(setSelectedMovie(queryId))
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }, [dispatch, queryId])

  const filteredDetail = (obj) => {
    const temp = { ...obj}
    delete temp.Ratings
    delete temp.Poster
    delete temp.Response
    delete temp.Type
    return temp
  }
  const hasError = errorCode?.Response && errorCode?.Response === 'False'

  const renderError = () => {
    const e = `Cannot find what you're looking for. \n ${errorCode?.Error}`
    return (<Container wide={true}><Empty msg={e}></Empty></Container>)
  }

  const renderDetail = () => {
    return(<Container wide={true}>
      <div data-testid="detail-view"  className="detail-view flex justify-center">
        <div className="text-left flex-none">
          <img src={selectedMovie && selectedMovie.Poster} alt={selectedMovie?.Title}></img>
          {selectedMovie?.Ratings?.map((r) => {
            return (<Rating key={r.Source} data-testid="detail-rating" rating={r}></Rating>)
          })}
        </div>
        <div data-testid="detail-content" className="flex-auto right px-6">
          { Object.entries(filteredDetail(selectedMovie)).map(([key, value]) => {
            return (
              <div key={key} className="text-left">
                <>
                  <div className="underline font-sans font-semibold tracking-wider">{key}</div>
                  <div className="font-light">{value}</div>
                </>
              </div>
            )})
          }
        </div>
      </div>
    </Container>)
  }

  useEffect(() => {
    fetchSelectedMovie()
  }, [fetchSelectedMovie])

  return (
    <>
      {
        isLoading
          ? <Container wide={true}><Loading></Loading></Container>
          : (
            hasError ? renderError() : renderDetail()
          )
      }
    </>
  )
}