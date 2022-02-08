import React, { useState, useEffect, useRef } from 'react';
import { tvApi } from '../api';
import styled from '@emotion/styled';
import { SHOW_TYPE } from '../../types';
import { GetServerSideProps } from 'next';

import Section from '../../components/Section';
import Poster from '../../components/Poster';
import Message from '../../components/Message';
import Loader from '../../components/Loader';

import isNull from '../../hooks/isNull';

interface ServerSideProps {
  topRated: Array<SHOW_TYPE>;
  popular: Array<SHOW_TYPE>;
  airingToday: Array<SHOW_TYPE>;
  ErrorMessage: string;
}

const Tv = ({ topRated, popular, airingToday, ErrorMessage }: ServerSideProps) => {
  const loading = useRef(false);

  useEffect(() => {
    if ((isNull(topRated) && isNull(popular) && isNull(airingToday)) === false) {
      loading.current = false;
    }
  });
  return loading.current ? (
    <Loader />
  ) : (
    <Container>
      {topRated && topRated.length > 0 && (
        <Section title="Top Rated Shows">
          {topRated.map((show: SHOW_TYPE) => (
            <Poster
              key={show.id}
              id={show.id}
              year={show.first_air_date && show.first_air_date.substring(0, 4)}
              imageUrl={show.poster_path}
              title={show.name}
              rating={show.vote_average}
              isMovie={false}
            />
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular Shows">
          {popular.map((show: SHOW_TYPE) => (
            <Poster
              key={show.id}
              id={show.id}
              year={show.first_air_date && show.first_air_date.substring(0, 4)}
              imageUrl={show.poster_path}
              title={show.name}
              rating={show.vote_average}
              isMovie={false}
            />
          ))}
        </Section>
      )}
      {airingToday && airingToday.length > 0 && (
        <Section title="Airing Today Shows">
          {airingToday.map((show: SHOW_TYPE) => (
            <Poster
              key={show.id}
              id={show.id}
              year={show.first_air_date && show.first_air_date.substring(0, 4)}
              imageUrl={show.poster_path}
              title={show.name}
              rating={show.vote_average}
              isMovie={false}
            />
          ))}
        </Section>
      )}
      {ErrorMessage && <Message text={ErrorMessage} color="e73c3c" />}
    </Container>
  );
};

export default Tv;

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const {
      data: { results: topRated },
    } = await tvApi.topRated();
    const {
      data: { results: popular },
    } = await tvApi.popular();
    const {
      data: { results: airingToday },
    } = await tvApi.airingToday();
    return { props: { topRated, popular, airingToday } };
  } catch (err) {
    const ErrorMessage = "Can't find movies infomation.";
    return { props: { ErrorMessage } };
  }
};

const Container = styled.div`
  padding: 0px 10px;
`;
