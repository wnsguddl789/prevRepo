import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { movieApi } from '../../api';
import { GENERE_TYPE, SIMILAR_TYPE, RESULT_TYPE } from '../../../types';

import Section from '../../../components/Section';
import Poster from '../../../components/Poster';
import Loader from '../../../components/Loader';

import {
  Container,
  Backdrop,
  Content,
  Cover,
  Data,
  Title,
  ItemContainer,
  Item,
  Divider,
  Overview,
  ReviewLink,
} from '../../../../styles/DetailStyle';

const Detail = ({ similar, data }: any) => {
  const [result, setResult] = useState<RESULT_TYPE>(data);
  const loading = useRef(false);
  const [isMovie, setIsMovie] = useState(true);

  const router = useRouter();
  useEffect(() => {
    if (router) {
      setIsMovie(router.pathname.split('/')[1] === 'Movie' ? true : false);
    }
  }, [router, setIsMovie]);

  useEffect(() => {
    if (result) {
      loading.current = false;
    }
  }, [result]);

  return loading.current ? (
    <Loader />
  ) : (
    <Container>
      <Backdrop bgImage={result && result.backdrop_path ? `https://image.tmdb.org/t/p/original${result?.backdrop_path}` : ''} />

      <Content>
        <Cover
          bgImage={
            result && result.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : require('../../../../public/assets/noPosterImage.png').default
          }
        />
        <Data>
          <Title>{result.original_title ? result.original_title : result.original_name}</Title>
          <ItemContainer>
            <Item>{result.release_date ? result?.release_date.substring(0, 4) : result?.first_air_date.substring(0, 4)}</Item>
            <Divider />
            <Item>{result.runtime ? `${result.runtime} min` : `${result.episode_run_time[0]} min`}</Item>
            <Divider />
            <Item>
              {result.genres &&
                result.genres.map((genre: GENERE_TYPE, idx) => (idx === result.genres.length - 1 ? genre.name : `${genre.name} / `))}
            </Item>
          </ItemContainer>
          <Overview>{result.overview}</Overview>
          <ReviewLink href={isMovie ? `/review/movie/${result?.id}` : `/review/show/${result?.id}`}>리뷰확인</ReviewLink>
          {similar.results && similar.results.length > 0 && (
            <Section title={isMovie ? `Similar Movie` : `Similar Tv show`}>
              {similar.results.map((item: SIMILAR_TYPE) => (
                <Poster
                  isMovie={isMovie}
                  key={item.id}
                  title={isMovie ? item.title : item.original_name}
                  year={item.release_date && item.release_date.substring(0, 4)}
                  imageUrl={item.poster_path}
                  rating={String(item.vote_average)}
                  id={item.id}
                />
              ))}
            </Section>
          )}
        </Data>
      </Content>
    </Container>
  );
};
export default Detail;

export async function getServerSideProps(context: any) {
  const params = context.params;
  const { data } = await movieApi.movieDetail(params.id);
  const { data: similar } = await movieApi.similar(params.id);
  return {
    props: { similar, data }, // will be passed to the page component as props
  };
}
