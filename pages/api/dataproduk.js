import prisma from '../../client.ts'

const handler = async (req, res) => {
    const produk = await prisma.produk.findMany();
    res.json(produk);
};
export default handler;