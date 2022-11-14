import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'blog-nextjs-ts',
  apiKey: process.env.API_KEY as string,
});