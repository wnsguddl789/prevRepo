import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { GetServerSideProps } from 'next';

import { movieApi } from './api';
import { MOVIE_TYPE } from '../types';
import Section from '../components/Section';
import Poster from '../components/Poster';
import Message from '../components/Message';
import Loader from '../components/Loader';

import useIsNull from '../hooks/useIsNull';

interface ServerSideProps {
  nowPlaying: Array<MOVIE_TYPE>;
  upcoming: Array<MOVIE_TYPE>;
  popular: Array<MOVIE_TYPE>;
}

function isNull(v: any) {
  return v === undefined || v === null ? true : false;
}
const Home = ({ nowPlaying, upcoming, popular }: ServerSideProps) => {
  const [error, setError] = useState('');
  const loading = useRef(true);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    if ((useIsNull(nowPlaying) && useIsNull(upcoming) && useIsNull(popular)) === false) {
      loading.current = false;
    }
  });

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
export const getServerSideProps: GetServerSideProps = async () => {
  const {
    data: { results: nowPlaying },
  } = await movieApi.nowPlaying();
  const {
    data: { results: upcoming },
  } = await movieApi.upcoming();
  const {
    data: { results: popular },
  } = await movieApi.popular();
  return { props: { nowPlaying, upcoming, popular } };
};
const Container = styled.div`
  padding: 0px 10px;
`;
