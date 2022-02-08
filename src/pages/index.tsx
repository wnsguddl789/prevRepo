import React, { useState, useEffect, useRef, useCallback } from 'react';
import type { NextPage } from 'next';
import styled from '@emotion/styled';

import { movieApi } from './api';
import { MOVIE_TYPE } from '../types';
import Section from '../components/Section';
import Poster from '../components/Poster';
import Message from '../components/Message';
import Loader from '../components/Loader';

const Home: NextPage = () => {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [popular, setPopular] = useState([]);
  const [error, setError] = useState('');
  const loading = useRef(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const {
          data: { results: nowPlaying },
        } = await movieApi.nowPlaying();
        const {
          data: { results: upcoming },
        } = await movieApi.upcoming();
        const {
          data: { results: popular },
        } = await movieApi.popular();

        setNowPlaying(nowPlaying);
        setUpcoming(upcoming);
        setPopular(popular);
      } catch (error) {
        setError("Can't find movies infomation.");
      } finally {
        loading.current = false;
      }
    }
    fetchData();
  }, [loading]);
  return loading.current ? (
    <Loader />
  ) : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Now Playing">
          {nowPlaying.map((movie: MOVIE_TYPE) => (
            <Poster
              key={movie.id}
              isMovie={true}
              id={movie.id}
              year={movie.release_date && movie.release_date.substring(0, 4)}
              imageUrl={movie.poster_path}
              title={movie.original_title}
              rating={movie.vote_average}
            />
          ))}
        </Section>
      )}
      {upcoming && upcoming.length > 0 && (
        <Section title="Upcoming Movies">
          {upcoming.map((movie: MOVIE_TYPE) => (
            <Poster
              key={movie.id}
              isMovie={true}
              id={movie.id}
              year={movie.release_date && movie.release_date.substring(0, 4)}
              imageUrl={movie.poster_path}
              title={movie.original_title}
              rating={movie.vote_average}
            />
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular Movies">
          {popular.map((movie: MOVIE_TYPE) => (
            <Poster
              key={movie.id}
              isMovie={true}
              id={movie.id}
              year={movie.release_date && movie.release_date.substring(0, 4)}
              imageUrl={movie.poster_path}
              title={movie.original_title}
              rating={movie.vote_average}
            />
          ))}
        </Section>
      )}
      {error && <Message text={error} color="e73c3c" />}
    </Container>
  );
};

export default Home;
const Container = styled.div`
  padding: 0px 10px;
`;
