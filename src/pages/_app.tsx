import React, { useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useSelector, useDispatch } from 'react-redux';
import { LoginAction, LogOutAction } from '../reducers/user';
import wrapper from '../store';
import '../../styles/reset.css';
import AppLayout from '../components/AppLayout';
import { ROUTES } from '../constant';
import { movieApi, tvApi } from './api';

const INIT_IMAGE_URL = 'https://media.vlpt.us/images/wnsguddl789/post/e78f377c-d471-4780-9246-10e8eb755de4/image%20(1).png';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [title, setTitle] = useState('');
  const router = useRouter();
  const [description, setDescription] = useState('NOMFILX');
  const [image, setImage] = useState(INIT_IMAGE_URL);
  const dispatch = useDispatch();

  /*
   * 브라우저 재 렌더링시 글로벌 상태관리
   * 1. 유저 로그인 유무 -> 세션관리
   * 2. 추가...
   */
  useEffect(() => {
    const isSiginIn = () => {
      if (window.sessionStorage.getItem('isLoggedIn') === null) {
        window.sessionStorage.setItem('isLoggedIn', 'false');
      } else {
        if (Boolean(window.sessionStorage.getItem('isLoggedIn')) === true) {
          dispatch(LoginAction());
        }
      }
    };
    return () => {
      isSiginIn();
    };
  }, [dispatch]);

  /*
   * 오픈그래프 설정(SNS 게시되는데 최적화)
   * 문서 Title 설정
   */
  useEffect(() => {
    async function getDetail(isMovie: boolean) {
      if (isMovie) {
        const { data } = await movieApi.movieDetail(Number(router.query.id));
        setTitle(` - ${data.title}`);
        setDescription(data.overview);

        setImage(`https://image.tmdb.org/t/p/original${data?.backdrop_path}`);
      } else {
        const { data } = await tvApi.showDetail(Number(router.query.id));
        setTitle(` - ${data.name}`);
        setImage(`https://image.tmdb.org/t/p/original${data?.backdrop_path}`);
        setDescription(data.overview);
      }
    }
    ROUTES &&
      ROUTES.map((route) => {
        if (route.PATH === router.pathname) {
          setTitle(` - ${route.LABEL}`);
        } else {
          const isMovie = router.pathname.split('/')[1] === 'Movie';
          if (router.pathname.split('/').length === 3) {
            if (router.pathname.split('/')[1] === 'Movie') {
              getDetail(isMovie);
            } else if (router.pathname.split('/')[1] === 'Tv') {
              getDetail(isMovie);
            }
          } else {
            // setImage(INIT_IMAGE_URL);
          }
        }
      });
  });

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>NOMFLIX{title}</title>
        </Helmet>
      </HelmetProvider>
      <Head>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nomflix-typescript.vercel.app/" />
        <meta property="og:title" content={`NOMFLIX${title}`} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content="NOMFLIX" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content={image} />
        {/* option start */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        {/* option end */}
      </Head>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  );
};

export default wrapper.withRedux(MyApp);
