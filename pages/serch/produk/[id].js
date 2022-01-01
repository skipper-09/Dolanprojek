import Layout from '../../../Component/Layout'
import Bayar from '../../../Component/Payment'
import useSWR from 'swr'
import { useRouter } from 'next/router'

const fetcher = async (url) => {
    const res = await fetch(url)
    const data = await res.json()

    if (res.status !== 200) {
        throw new Error(data.message)
    }
    return data
}
export default function Payment() {
    const { query } = useRouter()
    const { data, error } = useSWR(
        () => query.id && `/api/produk/${query.id}`,
        fetcher
    )
    if (error) return <div>{error.message}</div>
    if (!data) return <div class="balls">
        <div></div>
        <div></div>
        <div></div>
    </div>

    console.log(data);
    return (
        <Layout title="Payment">
            <Bayar gambar={data.photo} judul={data.judul} deskripsi={data.deskripsi} />
        </Layout >
    )
}
