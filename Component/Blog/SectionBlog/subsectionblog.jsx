import React from 'react'


export const Subsectionblog = ({ gambar, nama, tanggal, shortconten, author }) => {

    return (
        <>
            <div className="col-md-12 col-12">
                <div className="box d-flex mt-2 flex-row">
                    <div className="gambar">
                        <img src={gambar} alt="" className=" card-img" />
                    </div>
                    <div className="header py-3 px-3 ">
                        <h4 className="fw-bold">{nama}</h4>
                        <div className="atribut px-3">
                            <span ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            </svg> {author}</span>
                            <span className="ms-3"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                            </svg> {tanggal}</span>
                        </div>
                        <div className="shortconten py-2">
                            <p>{shortconten}</p>
                        </div>
                        <button type="button" className="btn btn-primary">Baca</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Subsectionblog;