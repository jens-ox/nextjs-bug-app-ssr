// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getCurrentCommit } from '../../src/git'

type Data = {
  hash: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const hash = await getCurrentCommit('https://github.com/vercel/next.js/')
  res.status(200).json({ hash })
}
