import React from 'react'

export default function Result() {
    return (
        <>
            <div className="header mt-5">
                <div className="row mt-5">
                    <div className="col-4 col-sm-5 col-md-4 ">
                        <div className="input-group flex-nowrap">
                            <span className="input-group-text border-0" id="addon-wrapping"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                            </svg></span>
                            <input type="text" className="form-control" placeholder="Pulau Merah" aria-label="Username" aria-describedby="addon-wrapping" />
                        </div>
                    </div>
                    <div className="col-3 col-sm-5 col-md-3">
                        <div className="input-group flex-nowrap">
                            <span className="input-group-text border-0" id="addon-wrapping">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar-fill" viewBox="0 0 16 16">
                                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5z" />
                                </svg></span>
                            <input type="date" className="form-control" aria-describedby="addon-wrapping" />
                        </div>
                    </div>
                    <div className="col-1 col-sm-1">
                        <button name="" id="" className="btn btn-primary" role="button">Cari</button>
                    </div>
                </div>
            </div>
        </>
    )
}
