export interface genre {
  id: number;
  name: string;
}

export interface FilmPageInterface {
  img: string;
  title: string | null;
  genres: string[];
  country: string;
  overview: string;
  releaseYear: number;
  averageVote: number;
}

export default async function FetchFilmInfo(
  movieId: number,
  token: string,
): Promise<FilmPageInterface> {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization:
            // 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTgwODIyYTQyMDJiZWY2NDk0MDM5NzlmYmRhZGUzMSIsInN1YiI6IjY1OGNhMDNiMzIzZWJhMTA3MjM2NjliZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Z5-6kkUmTCkqWiAf_YuxOZxmpmgko-6IaK4662xJUV4',
            `Bearer ${token}`
        },
      },
    );
    const data = await response.json();
    const filmInfo: FilmPageInterface = {
      img: data.poster_path,
      averageVote: data.vote_average,
      country: data.production_countries[0].iso_3166_1,
      genres: data.genres.map((genre: genre) => genre.name),
      overview: data.overview,
      releaseYear: data.release_date.slice(0, 4),
      title: data.title,
    };
    return filmInfo;
  } catch (error: unknown) {
    console.warn(error);
    return {
      img: '',
      title: null,
      averageVote: 0,
      country: '',
      genres: [],
      overview: '',
      releaseYear: 0,
    };
  }
}
