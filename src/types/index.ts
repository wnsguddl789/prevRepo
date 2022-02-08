export interface MOVIE_TYPE {
  id: number;
  release_date: string;
  poster_path: string;
  original_title: string;
  title: string;
  vote_average: string;
}
export interface SHOW_TYPE {
  id: number;
  first_air_date: string;
  poster_path: string;
  name: string;
  vote_average: string;
}
export interface POSTER_TYPE {
  // onClick: React.MouseEventHandler<HTMLDivElement>;
  id: number;
  imageUrl: string;
  title: string;
  rating: string;
  year: string;
  isMovie: boolean;
}
export interface GENERE_TYPE {
  name: string;
}
export interface SIMILAR_TYPE {
  id: number;
  title: string;
  original_name: string;
  release_date: string;
  poster_path: string;
  vote_average: number;
}
export interface RESULT_TYPE {
  id: number;
  backdrop_path: string;
  poster_path: string;
  original_title: string;
  original_name: string;
  release_date: any;
  genres: Array<GENERE_TYPE>;
  overview: string;
  runtime: number;
  episode_run_time: Array<Number>;
  first_air_date: string;
}
