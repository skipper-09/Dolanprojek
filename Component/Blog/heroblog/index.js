
import axios from 'axios';
import SubHero from './subHero';
import { useEffect, useState } from 'react';
import useSwr from 'swr';
import { Formatdate } from '../../utils/Formatdate'


export default function HeroBlog() {

    //fetcdata api
    const fetcher = url => axios.get(url).then(res =>
        res.data
    )



    const { data, error } = useSwr(process.env.PUBLICAPI + '/blogs?_start=2&_limit=5', fetcher);
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    return (
        <>
            <div className="hero-blog mt-5">
                <div className="row gy-4 ">
                    <div className="col-md-6 col-12 col-sm-12">

                        <SubHero />

                    </div>
                    <div className="col-md-6 col-12 col-sm-12 ">
                        <div className="row gy-2 gx-3">
                            {data.map((blog) => (
                                <div key={blog.id} className="col-md-6 col-6 col-sm-6 gy-2" >
                                    <div className="box position-relative">
                                        <img src={process.env.PUBLICAPI + blog.media.url} className="card-img" alt={blog.media.alternativeText} />
                                        <div className="atribut position-absolute text-white px-3">
                                            <h6 >{blog.judul}</h6>
                                            <p className="format">{Formatdate(blog.published_at)}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {/* <div className="col-md-6 col-6 col-sm-6">
                                <img src="/gambar/kawah-ijen.jpg" className="card-img" alt="" />
                                <h6>Cara Aman Wisata Hutan</h6>
                            </div>
                            <div className="col-md-6 col-6 col-sm-6">
                                <img src="/gambar/kawah-ijen.jpg" className="card-img" alt="" />
                                <h6>Cara Aman Wisata Hutan</h6>
                            </div>
                            <div className="col-md-6 col-6 col-sm-6">
                                <img src="/gambar/kawah-ijen.jpg" className="card-img" alt="" />
                                <h6>Air Terjun Terbaik banyuwangi</h6>
                            </div> */}
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}


// export async function getServerSideProps() {
//     const res = await fetch('http://localhost:1337/blogs')
//     const blog = await res.json()
//     console.log(blog);
//     return {
//         props: {
//             blog,
//         },
//     }
// }