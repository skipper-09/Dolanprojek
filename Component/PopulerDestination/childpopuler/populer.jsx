import React from 'react'
import Star from './star'
export const populer = (props) => {
    return (
        <>
            <div className="col-md-12 col-12 col-lg-4 mt-4  position-relative destination ">
                <div className="card">

                    <img src={props.img} className="img-thumbnail border-0 py-2 px-2" alt="destination1" />
                    <span className="position-absolute  px-3 mt-3 py-1 badgecustom badge-lg rounded-pill bg-light text-dark">
                        <span className="harga">Rp. {props.harga}</span>
                    </span>
                    <div className="card-body">
                        <h5 className="ms-2">{props.namedestination}</h5>
                        <span className="me-2" > <Star /> 4.5</span>
                    </div>
                </div>

            </div>
        </>
    )
}
export default populer;
