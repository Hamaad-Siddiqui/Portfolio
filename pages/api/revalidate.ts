import type { NextApiRequest, NextApiResponse } from "next";
import { isValidSignature, SIGNATURE_HEADER_NAME } from "@sanity/webhook";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = await readBody(req);
  const signature = req.headers[SIGNATURE_HEADER_NAME] as string;
  const secret = process.env.SANITY_STUDIO_REVALIDATE_SECRET as string;

  if (!isValidSignature(body, signature, secret)) {
    res.status(401).json({ message: "Invalid signature" });
    return;
  }

  try {
    await res.revalidate("/");
    res.status(200).json({ message: "Revalidated" });
    return;
  } catch (err) {
    return res.status(500).send("Error revalidating");
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};

async function readBody(readable: NextApiRequest) {
  const chunks: any[] = [];
  for await (const chunk of readable) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks).toString("utf8");
}
