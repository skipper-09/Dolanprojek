import React from 'react'
import Result from './result'
import Kategori from './kategori'

export default function Section() {
    const data = [
        { id: 1, gambar: "/gambar/bromo.jpg", judul: "Bromo", deskripsi: "  lorem", harga: "50.000" },
        { id: 2, gambar: "/gambar/Air-Terjunkembar.png", judul: "Air Terjun Kembar", deskripsi: "  lorem", harga: "60.000" },
        { id: 3, gambar: "/gambar/bromo.jpg", judul: "Bromo", deskripsi: "  lorem", harga: "50.000" },
    ]
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

                            <Result key={produk.id} gambar={produk.gambar} tujuan="/" judul={produk.judul} deskripsi={produk.deskripsi}
                                harga={produk.harga} tujuan={`/serch/${produk.id}`}
                            />
                        ))}


                    </div>
                </div>
            </div>
        </>
    )
}
