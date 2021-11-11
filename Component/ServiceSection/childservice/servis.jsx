import React from 'react'

export const servis = (props) => {
    return (
        <>
            <div className="col-md-6 col-sm-6 col-lg-3 " data-aos="fade-up" data-aos-duration="2000">
                <div className={props.className + " mt-5 d-flex shadow  "}>
                    <img src={props.gambar} className="px-3 " alt={props.description} width="90" />
                    <h5 className="py-4">{props.content}</h5>
                </div>
            </div>
        </>
    )
}
export default servis;