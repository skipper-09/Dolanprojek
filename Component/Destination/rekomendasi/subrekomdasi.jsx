import React from 'react'

export const Subrekomdasi = ({ coloum, gambar, lokasi, jumlah, className }) => {
    return (
        <>
            <div className={`col-md-${coloum} ${className} mt-4`} >
                <div className="box position-relative">
                    <img src={gambar} className=" card-img" alt="" />
                    <div className="conten position-absolute top-0 start-0 py-4 px-4 ">
                        <span className=" text-white fw-bold lokasi">{lokasi}</span><br />
                        <span className="text-white mb-3 jumlah">{jumlah} Wisata</span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Subrekomdasi;