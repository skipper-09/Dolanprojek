import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const handler = async (req, res) => {
    const produk = await prisma.produk.findMany();
    res.json(produk);
};
export default handler;