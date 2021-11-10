import React from 'react'
import Result from './result'
import Kategori from './kategori'

export default function Section() {
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
                        <Result gambar="/gambar/bromo.jpg" tujuan="/" judul="Gunung Bromo" deskripsi="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas semper, ligula eu pulvinar rutrum, turpis magna euismod ipsum, id egestas purus neque ac lectus. Cras pulvinar nisi a hendrerit molestie. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                            harga="50.000"
                        />
                        <Result gambar="/gambar/bromo.jpg" tujuan="/" judul="Gunung Bromo" deskripsi="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas semper, ligula eu pulvinar rutrum, turpis magna euismod ipsum, id egestas purus neque ac lectus. Cras pulvinar nisi a hendrerit molestie. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                            harga="50.000"
                        />
                        <Result gambar="/gambar/bromo.jpg" tujuan="/" judul="Gunung Bromo" deskripsi="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas semper, ligula eu pulvinar rutrum, turpis magna euismod ipsum, id egestas purus neque ac lectus. Cras pulvinar nisi a hendrerit molestie. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                            harga="50.000"
                        />
                        <Result gambar="/gambar/bromo.jpg" tujuan="/" judul="Gunung Bromo" deskripsi="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas semper, ligula eu pulvinar rutrum, turpis magna euismod ipsum, id egestas purus neque ac lectus. Cras pulvinar nisi a hendrerit molestie. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                            harga="50.000"
                        />

                    </div>
                </div>
            </div>
        </>
    )
}
