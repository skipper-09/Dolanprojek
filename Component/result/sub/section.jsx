import React from 'react'
import Result from './result'
import Kategori from './kategori'
import { produk } from '../../../data/datadamy';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json())
export default function Section() {
    const { data, error } = useSWR('/api/produk', fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
    return (
        <>
            <div className="results mt-5">
                <h4>Wisata Yang anda cari di banyuwangi</h4>
                <span>Ada 375 Wisata di daerah banyuwangi</span>
                <div className="row mt-4">
                    <div className="col-md-3 col-sm-3 col-3 mt-2">
                        <div className="box border border-1 ">
                            <h5 className="text-center">Kategori</h5>
                        </div>
                        <div className="box2 border px-2 py-1 ">
                            <Kategori label="Pantai" />
                            <Kategori label="Gunung" />
                            <Kategori label="Hutan" />
                            <Kategori label="Air Terjun" />

                        </div>
                    </div>
                    <div className="col-md-9 col-sm-9 col-9">

                        {data.map((produk) => (

                            <Result key={produk.id} gambar={produk.photo} tujuan="/" judul={produk.judul} deskripsi={produk.deskripsi}
                                tujuan={`/serch/produk/[id]`} as={`/serch/produk/${produk.id}`}
                            />
                        ))}


                    </div>
                </div>
            </div>
        </>
    )
}

// export async function getServerSideProps() {
//     const res = await fetch('http://localhost:3000/api/hello');
//     const data = await res.json();
//     console.log(data);
//     return {
//         props: { data }
//     }
// }