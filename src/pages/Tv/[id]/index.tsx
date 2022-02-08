import React, { useState, useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { movieApi } from '../../api';

import Section from '../../../components/Section';
import Poster from '../../../components/Poster';
import Loader from '../../../components/Loader';

const Detail = () => {
  const [similar, setSimilar] = useState([]);
  const [result, setResult] = useState([]);
  const [error, setError] = useState('');
  const loading = useRef(true);

  const router = useRouter();
  console.log(Number(router.query.id));
  useEffect(async () => {
    const data: { results: result } = await movieApi.movieDetail(Number(router.query.id));
    console.log(data.data);
  }, [router.query.id]);
  return loading.current ? (
    <Loader />
  ) : (
    <Container>
      {/* <Backdrop bgImage={result && result.backdrop_path ? `https://image.tmdb.org/t/p/original${result?.backdrop_path}` : null} />

      <Content>
        <Cover
          bgImage={
            result && result.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : require('../../aseets/noPosterImage.png').default
          }
        />
        <Data>
          <Title>{result.original_title ? result.original_title : result.original_name}</Title>
          <ItemContainer>
            <Item>{result.release_date ? result?.release_date.substring(0, 4) : result?.first_air_date.substring(0, 4)}</Item>
            <Divider>▫️</Divider>
            <Item>{result.runtime ? `${result.runtime} min` : `${result.episode_run_time[0]} min`}</Item>
            <Divider>▫️</Divider>
            <Item>
              {result.genres && result.genres.map((genre, idx) => (idx === result.genres.length - 1 ? genre.name : `${genre.name} / `))}
            </Item>
          </ItemContainer>
          <Overview>{result.overview}</Overview>
          <ReviewLink to={isMovie ? `/review/movie/${result.id}` : `/review/show/${result.id}`}>리뷰확인</ReviewLink>
          {similar && similar.length > 0 && (
            <Section title={isMovie ? `Similar Movie` : `Similar Tv show`}>
              {similar.map((item) => (
                <Poster
                  onClick={() => history.push(history.location.pathname)}
                  isMovie={isMovie}
                  key={item.id}
                  title={isMovie ? item.title : item.original_name}
                  year={item.release_date && item.release_date.substring(0, 4)}
                  imageUrl={item.poster_path}
                  rating={parseInt(item.vote_average)}
                  id={item.id}
                />
              ))}
            </Section>
          )}
        </Data>
      </Content> */}
    </Container>
  );
};
export default Detail;

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
