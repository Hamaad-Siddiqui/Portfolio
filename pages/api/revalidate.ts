import type { NextApiRequest, NextApiResponse } from 'next';
import { isValidRequest } from '@sanity/webhook';

export default async function handler(
 req: NextApiRequest,
 res: NextApiResponse
) {
 if (!isValidRequest(req, process.env.SANITY_STUDIO_REVALIDATE_SECRET)) {
  res.status(401).json({ message: 'Invalid signature' });
  return;
 }

 try {
  await res.revalidate('/');
  return res.json({ revalidated: true });
 } catch (err) {
  return res.status(500).send('Error revalidating');
 }
}
