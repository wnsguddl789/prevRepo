import React, { useState, useEffect, useRef, useCallback } from 'react';
import type { NextPage } from 'next';
import { tvApi } from '../api';
import styled from '@emotion/styled';
import { SHOW_TYPE } from '../../types';
import { GetServerSideProps } from 'next';

import Section from '../../components/Section';
import Poster from '../../components/Poster';
import Message from '../../components/Message';
import Loader from '../../components/Loader';

interface ServerSideProps {
  res: object;
}

const Tv = ({}: ServerSideProps) => {
  const [topRated, setTopRated] = useState([]);
  const [popular, setPopular] = useState([]);
  const [airingToday, setAiringToday] = useState([]);
  const [error, setError] = useState('');
  const loading = useRef(true);
  console.log(22);
  // console.log(res);
  const fetchData = useCallback(async () => {
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

      setTopRated(topRated);
      setPopular(popular);
      setAiringToday(airingToday);
    } catch (error) {
      setError("Can't find movies infomation.");
    } finally {
      loading.current = false;
    }
  }, []);

  useEffect(() => {
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // async function fetchData() {
    //   try {
    //     const {
    //       data: { results: topRated },
    //     } = await tvApi.topRated();
    //     const {
    //       data: { results: popular },
    //     } = await tvApi.popular();
    //     const {
    //       data: { results: airingToday },
    //     } = await tvApi.airingToday();

    //     setTopRated(topRated);
    //     setPopular(popular);
    //     setAiringToday(airingToday);
    //   } catch (error) {
    //     setError("Can't find movies infomation.");
    //   } finally {
    //     loading.current = false;
    //   }
    // }
    fetchData();
  }, [fetchData]);
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
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { params } = ctx;
  // const { slug } = params;
  // const res = await tvApi.popular();

  // Pass data to the page via props
  return { props: {} };
};
export default Tv;
const Container = styled.div`
  padding: 0px 10px;
`;
