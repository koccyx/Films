export default async function FetchFavorites(
  token: string,
  accountId: number,
): Promise<number[]> {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/account/${accountId}/favorite/movies`,
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
    const favId = data.results.map((elem:any) => elem.id);  
    return favId;
  } catch (error: unknown) {
    console.warn(error);
    return [];
  }
}
