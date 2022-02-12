/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { POSTER_TYPE } from '../../types';
import { useRouter } from 'next/router';

const Poster = ({ id, imageUrl, title, rating, year, isMovie }: POSTER_TYPE) => {
  const router = useRouter();
  return (
    // eslint-disable-next-line @next/next/link-passhref
    <Link href={isMovie ? `/Movie/${id}` : `/Tv/${id}`}>
      <Container>
        <ImageContainer>
          <Image
            bgURL={imageUrl ? `https://image.tmdb.org/t/p/w300/${imageUrl}` : require('../../../public/assets/noPosterImage.png').default}
          >
            <Rating>
              <span role="img" aria-label="rating">
                ⭐
              </span>{' '}
              {rating}/10
            </Rating>
          </Image>
        </ImageContainer>
        <Title>{title && title.length > 15 ? `${title.substring(0, 15)}...` : title}</Title>
        <Year>{year}</Year>
      </Container>
    </Link>
  );
};

export default Poster;

const Container = styled.div`
  font-size: 12px;
  cursor: pointer;
`;

const Image = styled.div<{
  bgURL: string;
}>`
  background-image: url(${(props) => props.bgURL});
  height: 180px;
  background-size: cover;
  border-radius: 8px;
  background-position: center center;
  transition: opacity 0.1s linear;
`;
const Rating = styled.span`
  bottom: 5px;
  right: 5px;
  position: absolute;
  opacity: 0;
  transition: opacity 0.1s linear;
`;

const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;

const Title = styled.span`
  display: block;
  margin-bottom: 3px;
`;

const Year = styled.span`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
`;
