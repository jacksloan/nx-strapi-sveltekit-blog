import { STRAPI_JWT as accessToken } from '$lib/secrets';

export async function get(): Promise<any> {
  try {
    const url = 'http://localhost:1337/posts';
    const headers = { Authorization: `Bearer ${accessToken} ` };
    const response = await fetch(url, { headers });
    const posts = await response.json();
    return { body: posts };
  } catch (error) {
    console.error(error?.message || error);
    return { body: [] };
  }
}
