import { createClient } from 'next-sanity';
import { sanityConfig } from './sanity-config';

export const client = createClient(sanityConfig);
