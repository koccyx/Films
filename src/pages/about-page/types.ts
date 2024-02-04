export interface genre {
  id: number;
  name: string;
}

export interface FilmPage {
  img: string;
  title: string | null;
  genres: string[];
  country: string;
  overview: string;
  releaseYear: number;
  averageVote: number;
  id: number;
}