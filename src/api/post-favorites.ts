export default async function postFavorite(
  token: string,
  accountId: number,
  movieId: number,
  isFavorite: boolean, 
): Promise<any> {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/account/${accountId}/favorite`,
      {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          media_type: 'movie', 
          media_id: movieId, 
          favorite: isFavorite,
        }) 
      },
    );
    const data = await response.json();
    return data;
  } catch (error: unknown) {
    console.warn(error);
    return [];
  }
}
