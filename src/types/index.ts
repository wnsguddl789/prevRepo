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
  id: number;
  imageUrl: string;
  title: string;
  rating: string;
  year: string;
  isMovie: boolean;
}
