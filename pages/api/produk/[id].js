import { produk } from "../../../data/datadamy"

export default function produkHandler({ query: { id } }, res) {
    const filtered = produk.filter((p) => p.id == id)

    // User with id exists
    if (filtered.length > 0) {
        res.status(200).json(filtered[0])
    } else {
        res.status(404).json({ message: `produk with id: ${id} not found.` })
    }
}
