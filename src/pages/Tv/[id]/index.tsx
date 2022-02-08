import React, { useState, useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { tvApi } from '../../api';
import { GENERE_TYPE, SIMILAR_TYPE, RESULT_TYPE } from '../../../types';

import Loader from '../../../components/Loader';
import Section from '../../../components/Section';
import Poster from '../../../components/Poster';

const Detail = ({ similar, data }: any) => {
  const [result, setResult] = useState<RESULT_TYPE>(data);
  const loading = useRef(true);
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
          <Title>{result?.original_title ? result?.original_title : result?.original_name}</Title>
          <ItemContainer>
            <Item>{result?.release_date ? result?.release_date.substring(0, 4) : result?.first_air_date.substring(0, 4)}</Item>
            <Divider>▫️</Divider>
            <Item>{result?.runtime ? `${result?.runtime} min` : `${result?.episode_run_time[0]} min`}</Item>
            <Divider>▫️</Divider>
            <Item>
              {result?.genres &&
                result?.genres.map((genre: GENERE_TYPE, idx: number) =>
                  idx === result?.genres.length - 1 ? genre.name : `${genre.name} / `
                )}
            </Item>
          </ItemContainer>
          <Overview>{result?.overview}</Overview>
          <ReviewLink href={isMovie ? `/review/movie/${result?.id}` : `/review/show/${result?.id}`}>리뷰확인</ReviewLink>
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

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div<{
  bgImage: string;
}>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;
`;

const Cover = styled.div<{
  bgImage: string;
}>`
  width: 30%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 5px;
`;

const Data = styled.div`
  width: 60%;
  margin-left: 10px;
`;

const Title = styled.h3`
  font-size: 32px;
  margin-bottom: 20px;
`;

const ItemContainer = styled.div`
  margin: 20px 0;
`;

const Item = styled.span``;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.5;
  width: 50%;
  margin-bottom: 5px;
`;

const ReviewLink = styled(Link)`
  box-sizing: border-box;
  font-size: 14px;
  opacity: 0.7;
`;
