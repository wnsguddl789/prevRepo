import React, { useState, useEffect, useRef } from 'react';
import { tvApi } from '../api';
import styled from '@emotion/styled';
import { SHOW_TYPE } from '../../types';
import { GetServerSideProps } from 'next';

import Section from '../../components/Section';
import Poster from '../../components/Poster';
import Message from '../../components/Message';
import Loader from '../../components/Loader';

import useIsNull from '../../hooks/useIsNull';

interface ServerSideProps {
  topRated: Array<SHOW_TYPE>;
  popular: Array<SHOW_TYPE>;
  airingToday: Array<SHOW_TYPE>;
}

const Tv = ({ topRated, popular, airingToday }: ServerSideProps) => {
  const [error, setError] = useState('');
  const loading = useRef(true);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    if ((useIsNull(topRated) && useIsNull(popular) && useIsNull(airingToday)) === false) {
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
      {error && <Message text={error} color="e73c3c" />}
    </Container>
  );
};
export const getServerSideProps: GetServerSideProps = async () => {
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
};
export default Tv;
const Container = styled.div`
  padding: 0px 10px;
`;
