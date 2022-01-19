import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const handler = async (req, res) => {
    if (req.method !== 'POST')
        return res
            .status(405)
            .json({ message: 'Request method tidak diizinkan' });
    const produk = JSON.parse(req.body);
    const tambah = await prisma.produk.create({
        data: {
            judul: produk.judul,
            description: produk.description,
            photos: produk.photos,
            harga: produk.harga,
        },
    });
    res.json(tambah);
};
export default handler;