import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '49aaf51900215982d353ad8c17b8926d',
    language: 'ko',
  },
});
console.log(
  typeof window === 'undefined' ? 'en' : window.sessionStorage.getItem('language') ? window.sessionStorage.getItem('language') : 'en'
);
export const languageApi = {
  setLanguage: () => api.get('/configuration/languages'),
};

export const movieApi = {
  nowPlaying: () => api.get('movie/now_playing'),
  upcoming: () => api.get('movie/upcoming'),
  popular: () => api.get('movie/popular'),
  movieDetail: (id: number) =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: 'videos',
      },
    }),
  search: (term: string) =>
    api.get('search/movie', {
      params: {
        query: encodeURIComponent(term),
      },
    }),
  review: (id: number) => api.get(`movie/${id}/reviews`),
  similar: (id: number) => api.get(`movie/${id}/similar`),
};

export const tvApi = {
  topRated: () => api.get('tv/top_rated'),
  airingToday: () => api.get('tv/airing_today'),
  popular: () => api.get('tv/popular'),
  showDetail: (id: number) =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: 'videos',
      },
    }),
  search: (term: string) =>
    api.get('search/tv', {
      params: {
        query: encodeURIComponent(term),
      },
    }),
  review: (id: number) => api.get(`tv/${id}/reviews`),
  similar: (id: number) => api.get(`tv/${id}/similar`),
};
