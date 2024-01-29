import { FilmsInterface } from '../state/films-reducer';

interface FetchedDate {
  films: FilmsInterface[];
  pages: number;
}

export async function fetchFilms(
  option: string,
  page: number,
  token: string
): Promise<FetchedDate> {
  
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${option}?language=en-US&page=${page}`,
      {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization:
          `Bearer ${token}`
            // 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTgwODIyYTQyMDJiZWY2NDk0MDM5NzlmYmRhZGUzMSIsInN1YiI6IjY1OGNhMDNiMzIzZWJhMTA3MjM2NjliZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Z5-6kkUmTCkqWiAf_YuxOZxmpmgko-6IaK4662xJUV4',
        },
      },
    );
    const data = await response.json();
    const films = data.results.map((elem: FilmsInterface) => ({
      title: elem.title,
      poster_path: elem.poster_path,
      vote_average: elem.vote_average,
      id: elem.id,
    }));

    return { films, pages: data.total_pages };
  } catch (error: unknown) {
    console.log(error);
    return { films: [], pages: 1 };
  }
}
