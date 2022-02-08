import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { GetServerSideProps } from 'next';

import { movieApi } from '../api';
import { MOVIE_TYPE } from '../../types';
import Section from '../../components/Section';
import Poster from '../../components/Poster';
import Message from '../../components/Message';
import Loader from '../../components/Loader';

import isNull from '../../hooks/isNull';

interface ServerSideProps {
  nowPlaying: Array<MOVIE_TYPE>;
  upcoming: Array<MOVIE_TYPE>;
  popular: Array<MOVIE_TYPE>;
  ErrorMessage: string;
}

const Movie = ({ nowPlaying, upcoming, popular, ErrorMessage }: ServerSideProps) => {
  const loading = useRef(false);

  useEffect(() => {
    if ((isNull(nowPlaying) && isNull(upcoming) && isNull(popular)) === false) {
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
      {ErrorMessage && <Message text={ErrorMessage} color="e73c3c" />}
    </Container>
  );
};

export default Movie;
export const getServerSideProps: GetServerSideProps = async () => {
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
    return { props: { nowPlaying, upcoming, popular } };
  } catch (err) {
    const ErrorMessage = "Can't find movies infomation.";
    return { props: { ErrorMessage } };
  }
};
const Container = styled.div`
  padding: 0px 10px;
`;
