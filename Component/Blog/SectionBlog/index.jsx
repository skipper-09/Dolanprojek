import React from 'react'
import SubSectionblog from './subsectionblog'
import useSwr from 'swr'
import axios from 'axios'
import { Formatdate } from '../../utils/Formatdate'
export default function SectionBlog() {
    //fetcdata api
    const fetcher = url => axios.get(url).then(res =>
        res.data
    )



    const { data } = useSwr(process.env.PUBLICAPI + '/blogs', fetcher);
    if (!data) return <div></div>


    return (
        <>
            <div className="sectionblog mt-5">
                <div className="d-flex justify-content-between">
                    <h3>Blog</h3>
                    <div className="col-6 col-md-4 col-sm-4">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control " placeholder="Cari Blog" aria-describedby="basic-addon2" />
                            <button className="input-group-text  " id="basic-addon2">serch</button>
                        </div>
                    </div>
                </div>
                <div className="mt-4 post">
                    <div className="row">
                        {data.map((blog) => (
                            <SubSectionblog key={blog.id} gambar={process.env.PUBLICAPI + blog.media.url} nama={blog.judul} tanggal={Formatdate(blog.published_at)} shortconten={blog.headline} author={blog.author.nama} />
                        ))}

                    </div>
                </div>
            </div>
        </>
    )
}
