import {
  OpenAPI,
  Posts,
  PostsService,
  Error,
} from '@nx-strapi-sveltekit-blog/api-client';
import { STRAPI_JWT } from '../lib/secrets';
OpenAPI.TOKEN = STRAPI_JWT;

export async function get(): Promise<{ body: Posts[] | Error }> {
  return { body: await PostsService.getPosts() };
}
