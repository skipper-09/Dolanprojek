import React from 'react'
import Link from 'next/link';
export default function Hero() {
    return (
        <>
            <div className="hero">
                <div className="container">
                    <div className="row ">
                        <div className="col-md-6  content" >
                            <h1 className="fw-bold">Buat Liburan Yang  Tak <span className="text-white">Terlupakan</span><img className="animate__animated animate__swing position-absolute  " src="/gambar/icon-beach.svg" /></h1>
                            <p className=" fst-italic">Kami Selalu Membuat Liburan Anda Menyenangkan Dan Tak Terlupakan</p>
                            <div className="form-group input">
                                <input type="text" className="form-control serch  shadow" placeholder="Pulau Merah" />
                                <Link href="/serch">
                                    <button className="iconserch "> <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 36 36"><defs><style dangerouslySetInnerHTML={{ __html: ".a{fill:#3660cf;opacity:0.7;}" }} /></defs><path className="a" d="M35.511,31.125,28.5,24.115a1.686,1.686,0,0,0-1.2-.492H26.158a14.622,14.622,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2L31.13,35.5a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.39ZM14.626,24.747A10.124,10.124,0,1,1,24.751,14.624,10.118,10.118,0,0,1,14.626,24.747Zm0-16.872a5.191,5.191,0,0,0-5.192,5.191c0,2.318,3.393,6.543,4.693,8.076a.65.65,0,0,0,1,0c1.3-1.534,4.693-5.758,4.693-8.076a5.191,5.191,0,0,0-5.192-5.191Zm0,6.75a1.688,1.688,0,1,1,1.687-1.687,1.687,1.687,0,0,1-1.687,1.688Z" /></svg></button>
                                </Link>

                            </div>
                        </div>
                        <div className="col-md-6 gamhero" data-aos="zoom-in">
                            <img src="/gambar/Gambar-traveler.svg" alt="Gambar Hero" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
