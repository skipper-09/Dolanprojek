// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { produk } from '../../../data/datadamy'
export default function handler(req, res) {
  res.status(200).json(produk)
}
