
import prisma from '../../client.ts'
const handler = async (req, res) => {
    if (req.method !== 'POST')
        return res
            .status(405)
            .json({ message: 'Request method tidak diizinkan' });
    const data = JSON.parse(req.body);
    const hapus = await prisma.produk.delete({
        where: { id: data.id },
    });
    res.json(hapus);
};
export default handler;
