import React, { useState, useRef, useCallback } from 'react';
import styled from '@emotion/styled';
import { movieApi, tvApi } from '../api';
import { MOVIE_TYPE, SHOW_TYPE } from '../../types';

import Section from '../../components/Section';
import Poster from '../../components/Poster';
import Message from '../../components/Message';
import Loader from '../../components/Loader';

const Search = () => {
  const [movieResults, setMovieResults] = useState([]);
  const [tvResults, setTvResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');
  const loading = useRef(false);

  const searchByTerm = useCallback(async () => {
    loading.current = true;
    try {
      const {
        data: { results: movieResults },
      } = await movieApi.search(searchTerm);
      const {
        data: { results: tvResults },
      } = await tvApi.search(searchTerm);
      loading.current = false;
      setMovieResults(movieResults);
      setTvResults(tvResults);
    } catch {
      setError("Can't find results.");
    }
  }, [searchTerm]);

  const updateTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    e.preventDefault();
    if (searchTerm !== '') {
      searchByTerm();
    }
  };
  return (
    <Container>
      <Input placeholder="Search Movies or TV Shows..." value={searchTerm} onChange={updateTerm} />

      {loading.current ? (
        <Loader />
      ) : (
        <>
          {movieResults && movieResults.length > 0 && (
            <Section title="Movie Results">
              {movieResults.map((movie: MOVIE_TYPE) => (
                <Poster
                  isMovie={true}
                  key={movie.id}
                  id={movie.id}
                  year={movie.release_date && movie.release_date.substring(0, 4)}
                  imageUrl={movie.poster_path}
                  title={movie.title}
                  rating={movie.vote_average}
                />
              ))}
            </Section>
          )}
          {tvResults && tvResults.length > 0 && (
            <Section title="TV Show Results">
              {tvResults.map((show: SHOW_TYPE) => (
                <Poster
                  isMovie={false}
                  key={show.id}
                  id={show.id}
                  year={show.first_air_date && show.first_air_date.substring(0, 4)}
                  imageUrl={show.poster_path}
                  title={show.name}
                  rating={show.vote_average}
                />
              ))}
            </Section>
          )}
          {error && <Message text={error} color="e73c3c" />}
          {tvResults && movieResults && tvResults.length === 0 && movieResults.length === 0 && (
            <Message text={`Nothing Found`} color="#95a5a6" />
          )}
        </>
      )}
    </Container>
  );
};

export default Search;

const Container = styled.div`
  padding: 10px;
`;

const Input = styled.input`
  all: unset;
  font-size: 20px;
  width: 100%;
  margin-bottom: 50px;
`;
