import React from 'react'

import axios from 'axios';
import useSwr from 'swr'
export const subHero = ({ gambar, judul }) => {
    const fetcher = url => axios.get(url).then(res =>
        res.data
    )

    const { data, error } = useSwr(process.env.PUBLICAPI + '/blogs?header=true', fetcher);
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    return (
        <>
            {data.map((article) => (
                <div className="wrap position-relative ">
                    <img src={process.env.PUBLICAPI + article.media.url} className="card-img" alt="" />
                    <div className=" atribut position-absolute px-4">
                        <h5 className=" text-white">{article.judul}</h5>
                    </div>
                </div>
            ))}
        </>
    )
}

export default subHero;
