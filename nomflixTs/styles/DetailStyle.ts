import styled from '@emotion/styled';
import Link from 'next/link';

export const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

export const Backdrop = styled.div<{
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

export const Content = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;
`;

export const Cover = styled.div<{
  bgImage: string;
}>`
  width: 30%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 5px;
`;

export const Data = styled.div`
  width: 70%;
  margin-left: 50px;
  & > a {
    /* margin: 20px; */
  }
`;

export const Title = styled.h3`
  font-size: 32px;
  margin-bottom: 20px;
`;

export const ItemContainer = styled.div`
  width: 100%;
  margin: 20px 0;
`;

export const Item = styled.span`
  width: 100%;
`;

export const Divider = styled.span`
  margin: 0 10px;
`;

export const Overview = styled.p`
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.5;
  width: 80%;
  margin-bottom: 5px;
`;

export const ReviewLink = styled(Link)`
  box-sizing: border-box;
  font-size: 14px;
  opacity: 0.7;
`;
