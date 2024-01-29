interface AccountIdInterface {
  id: number;
}

export default async function FetchAccountId(
  token: string,
): Promise<AccountIdInterface> {
  try {
    const response = await fetch(
      'https://api.themoviedb.org/3/account/account_id',
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
    return {id: data.id as number};
  } catch (error: unknown) {
    console.warn(error);
    return {
      id: 0,
    };
  }
}
