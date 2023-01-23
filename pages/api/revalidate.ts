import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
 req: NextApiRequest,
 res: NextApiResponse
) {
 if (req.query.secret !== process.env.SANITY_STUDIO_REVALIDATE_SECRET) {
  return res.status(401).json({ message: 'Invalid token' });
 }

 try {
  await res.revalidate('/');
  return res.json({ revalidated: true });
 } catch (err) {
  return res.status(500).send('Error revalidating');
 }
}
