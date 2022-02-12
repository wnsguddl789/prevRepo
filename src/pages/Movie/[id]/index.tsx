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
  const loading = useRef(false);
  const [isMovie, setIsMovie] = useState(true);

  const router = useRouter();
  useEffect(() => {
    if (router) {
      setIsMovie(router.pathname.split('/')[1] === 'Movie' ? true : false);
    }
  }, [router, setIsMovie]);

  return loading.current ? (
    <Loader />
  ) : (
    <Container>
      <Backdrop bgImage={data.backdrop_path ? `https://image.tmdb.org/t/p/original${data?.backdrop_path}` : ''} />

      <Content>
        <Cover
          bgImage={
            data.poster_path
              ? `https://image.tmdb.org/t/p/original${data.poster_path}`
              : require('../../../../public/assets/noPosterImage.png').default
          }
        />
        <Data>
          <Title>{data.original_title ? data.original_title : data.original_name}</Title>
          <ItemContainer>
            <Item>{data.release_date ? data?.release_date.substring(0, 4) : data?.first_air_date.substring(0, 4)}</Item>
            <Divider />
            <Item>{data.runtime ? `${data.runtime} min` : `${data.episode_run_time[0]} min`}</Item>
            <Divider />
            <Item>
              {data.genres &&
                data.genres.map((genre: GENERE_TYPE, idx: number) => (idx === data.genres.length - 1 ? genre.name : `${genre.name} / `))}
            </Item>
          </ItemContainer>
          <Overview>{data.overview}</Overview>
          <ReviewLink href={isMovie ? `/review/movie/${data?.id}` : `/review/show/${data?.id}`}>리뷰확인</ReviewLink>
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

export async function getServerSideProps({ params }: any) {
  const { data } = await movieApi.movieDetail(params.id);
  const { data: similar } = await movieApi.similar(params.id);
  return {
    props: { similar, data }, // will be passed to the page component as props
  };
}
