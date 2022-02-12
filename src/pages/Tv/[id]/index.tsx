import React, { useState, useRef, useEffect } from 'react';

import { useRouter } from 'next/router';
import { tvApi } from '../../api';
import { GENERE_TYPE, SIMILAR_TYPE, RESULT_TYPE } from '../../../types';

import Loader from '../../../components/Loader';
import Section from '../../../components/Section';
import Poster from '../../../components/Poster';

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
  const [isMovie, setIsMovie] = useState(true);

  const router = useRouter();
  useEffect(() => {
    if (router) {
      setIsMovie(router.pathname.split('/')[1] === 'Movie' ? true : false);
    }
  }, [router, setIsMovie]);

  return (
    <Container>
      <Backdrop bgImage={data && data.backdrop_path ? `https://image.tmdb.org/t/p/original${data?.backdrop_path}` : ''} />

      <Content>
        <Cover
          bgImage={
            data && data.poster_path
              ? `https://image.tmdb.org/t/p/original${data.poster_path}`
              : require('../../../../public/assets/noPosterImage.png').default
          }
        />
        <Data>
          <Title>{data?.original_title ? data?.original_title : data?.original_name}</Title>
          <ItemContainer>
            <Item>{data?.release_date ? data?.release_date.substring(0, 4) : data?.first_air_date.substring(0, 4)}</Item>
            <Divider>▫️</Divider>
            <Item>{data?.runtime ? `${data?.runtime} min` : `${data?.episode_run_time[0]} min`}</Item>
            <Divider>▫️</Divider>
            <Item>
              {data?.genres &&
                data?.genres.map((genre: GENERE_TYPE, idx: number) => (idx === data?.genres.length - 1 ? genre.name : `${genre.name} / `))}
            </Item>
          </ItemContainer>
          <Overview>{data?.overview}</Overview>
          <ReviewLink href={isMovie ? `/review/movie/${data?.id}` : `/review/show/${data?.id}`}>리뷰확인</ReviewLink>
          {similar.results && similar.results.length > 0 && (
            <Section title={isMovie ? `Similar Movie` : `Similar Tv show`}>
              {similar.results.map((item: SIMILAR_TYPE) => {
                return (
                  <Poster
                    isMovie={isMovie}
                    key={item.id}
                    title={isMovie ? item.title : item.original_name}
                    year={item.release_date && item.release_date.substring(0, 4)}
                    imageUrl={item.poster_path}
                    rating={String(item.vote_average)}
                    id={item.id}
                  />
                );
              })}
            </Section>
          )}
        </Data>
      </Content>
    </Container>
    // <Detail result={result} isMovie={isMovie} similar={similar} error={error} loading={loading.current} />
  );
};
export default Detail;
export async function getServerSideProps(context: any) {
  const params = context.params;
  const { data } = await tvApi.showDetail(params.id);
  const { data: similar } = await tvApi.similar(params.id);
  return {
    props: { similar, data }, // will be passed to the page component as props
  };
}
